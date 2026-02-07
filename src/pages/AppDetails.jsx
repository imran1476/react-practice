import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import appsData from "../data/appsData.json";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import toast from 'react-hot-toast';

const AppDetails = () => {
  const { id } = useParams();
  // String id ke number-e convert kore match kora hocche
  const app = appsData.find(a => a.id === Number(id));
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // LocalStorage theke check kora hocche app-ti installed ki na
    const installed = JSON.parse(localStorage.getItem('installedApps') || '[]');
    setIsInstalled(installed.some((a) => a.id === app?.id));
  }, [app]);

  const handleInstall = () => {
    const installed = JSON.parse(localStorage.getItem('installedApps') || '[]');
    
    // Jodi agey theke install na thake tobei add hobe
    if (!isInstalled) {
      const newInstalledList = [...installed, app];
      localStorage.setItem('installedApps', JSON.stringify(newInstalledList));
      setIsInstalled(true);
      toast.success(`${app.title} Installed Successfully! 🎉`);
    }
  };

  // App khunje na pele error message
  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-3xl font-bold text-gray-400 italic">App Not Found!</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* App Header Section */}
      <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-10">
        <img src={app.image} className="w-48 h-48 rounded-[2rem] shadow-lg object-cover" alt={app.title} />
        
        <div className="flex-1">
          <h1 className="text-4xl font-black text-gray-900 mb-2">{app.title}</h1>
          <p className="text-blue-600 font-semibold mb-6">{app.companyName}</p>
          
          <div className="flex gap-8 mb-8 border-y border-gray-50 py-6">
            <div className="text-center md:text-left">
              <p className="font-black text-xl text-gray-800">⭐ {app.ratingAvg}</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Rating</p>
            </div>
            <div className="text-center md:text-left border-x px-8 border-gray-100">
              <p className="font-black text-xl text-gray-800">
                {app.downloads >= 1000 ? (app.downloads / 1000).toFixed(0) + 'K' : app.downloads}
              </p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Downloads</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-black text-xl text-gray-800">{app.size} MB</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Size</p>
            </div>
          </div>

          <button 
            disabled={isInstalled}
            onClick={handleInstall}
            className={`px-12 py-4 rounded-2xl font-black text-lg shadow-lg transition-all active:scale-95 ${
              isInstalled 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none' 
              : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-200'
            }`}
          >
            {isInstalled ? "✓ Installed" : "Install App"}
          </button>
        </div>
      </div>

      {/* Chart & Description Section */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Recharts Component */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50">
          <h3 className="text-xl font-bold text-gray-800 mb-8">Ratings Overview</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={app.ratings}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis hide={true} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}} 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="count" fill="#2563eb" radius={[6, 6, 6, 6]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50">
          <h3 className="text-xl font-bold text-gray-800 mb-6">About this app</h3>
          <div className="prose prose-blue">
            <p className="text-gray-600 leading-relaxed text-lg italic">
              "{app.description}"
            </p>
            <div className="mt-6 p-4 bg-blue-50 rounded-2xl text-blue-700 text-sm">
              <strong>Info:</strong> All versions of {app.title} are verified for safety and performance by Hero IO Security.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;