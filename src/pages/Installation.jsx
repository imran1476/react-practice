import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    // LocalStorage theke data ana
    const savedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    setInstalledApps(savedApps);
  }, []);

  const handleUninstall = (id, title) => {
    const updatedApps = installedApps.filter(app => app.id !== id);
    localStorage.setItem('installedApps', JSON.stringify(updatedApps));
    setInstalledApps(updatedApps);
    toast.error(`${title} Uninstalled!`, {
      style: { borderRadius: '10px', background: '#333', color: '#fff' }
    });
  };

  return (
    <div className="container mx-auto px-4 py-16 min-h-[60vh]">
      <div className="mb-10">
        <h1 className="text-4xl font-black text-gray-900 mb-2">My Installations</h1>
        <p className="text-gray-500 italic">Manage your installed applications from here.</p>
      </div>

      {installedApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {installedApps.map(app => (
            <div key={app.id} className="flex items-center justify-between p-5 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <img src={app.image} className="w-14 h-14 rounded-xl shadow-sm" alt="" />
                <div>
                  <h3 className="font-bold text-gray-800">{app.title}</h3>
                  <p className="text-xs text-green-500 font-medium tracking-wide">● INSTALLED</p>
                </div>
              </div>
              <button 
                onClick={() => handleUninstall(app.id, app.title)}
                className="bg-red-50 text-red-500 px-4 py-2 rounded-xl text-sm font-bold hover:bg-red-500 hover:text-white transition-colors"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-white rounded-[3rem] border-2 border-dashed border-gray-100">
          <div className="text-6xl mb-4">📥</div>
          <h2 className="text-2xl font-bold text-gray-400">Your library is empty!</h2>
          <p className="text-gray-400">Go to the App store to install some apps.</p>
        </div>
      )}
    </div>
  );
};

export default Installation;