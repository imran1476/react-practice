import { useState, useEffect } from 'react';
import appsData from '../data/appsData.json';
import AppCard from '../components/AppCard';

const AllApps = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('');
  const [loading, setLoading] = useState(true);

  // Loading animation simulation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [searchTerm, sortType]);

  // Search & Sort Logic
  const filteredApps = appsData
    .filter(app => app.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortType === 'high-low') return b.downloads - a.downloads;
      if (sortType === 'low-high') return a.downloads - b.downloads;
      return 0;
    });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black mb-2">All Applications</h1>
        <p className="text-gray-500">Find the best tools for your daily needs</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-2xl shadow-sm border mb-10 gap-4">
        <p className="font-bold text-gray-700 text-lg">Total Apps: {filteredApps.length}</p>
        
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <input 
            type="text"
            placeholder="Search by title..."
            className="border-2 border-gray-100 p-3 rounded-xl w-full md:w-80 focus:border-blue-500 outline-none transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select 
            className="border-2 border-gray-100 p-3 rounded-xl outline-none focus:border-blue-500"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">Sort by Downloads</option>
            <option value="high-low">High to Low</option>
            <option value="low-high">Low to High</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
        </div>
      ) : filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredApps.map(app => <AppCard key={app.id} app={app} />)}
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold text-gray-300 italic">No App Found 🔍</h2>
        </div>
      )}
    </div>
  );
};

export default AllApps;