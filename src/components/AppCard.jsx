import { Link } from 'react-router-dom';

const AppCard = ({ app }) => {
  return (
    <Link to={`/app/${app.id}`} className="group block">
      <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="relative mb-4">
          <img 
            src={app.image} 
            alt={app.title} 
            className="w-20 h-20 rounded-2xl object-cover shadow-inner group-hover:rotate-6 transition-transform" 
          />
          <span className="absolute top-0 right-0 bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded-full border border-blue-100">
            {app.size} MB
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-1 truncate">{app.title}</h3>
        <p className="text-sm text-gray-400 mb-4">{app.companyName}</p>
        
        <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500 font-bold">★</span>
            <span className="font-bold text-gray-700">{app.ratingAvg}</span>
          </div>
          <div className="text-xs text-gray-500 font-medium">
            {app.downloads > 1000000 ? (app.downloads / 1000000).toFixed(1) + 'M' : (app.downloads / 1000).toFixed(0) + 'K'} DL
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;