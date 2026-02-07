import { Link } from "react-router-dom";
import appsData from "../data/appsData.json";
import AppCard from "../components/AppCard";

const Home = () => {
  // Top 8 apps filter
  const topApps = appsData.slice(0, 8);

  return (
    <div className="pb-20">
      {/* 1. Banner Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-24 pb-32 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            The Next Generation <br /> <span className="text-blue-600">App Marketplace</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Explore thousands of professional and lifestyle apps. Faster, safer, and curated just for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.apple.com/app-store/" target="_blank" className="bg-black text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
              App Store
            </a>
            <a href="https://play.google.com/store" target="_blank" className="bg-white border-2 border-gray-200 text-black px-10 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-50 transition-all">
              Play Store
            </a>
          </div>
        </div>
      </section>

      {/* 2. States Section */}
      <section className="container mx-auto px-4 -mt-16 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-600 text-white p-10 rounded-[2.5rem] shadow-2xl shadow-blue-200 transform hover:-translate-y-2 transition-all">
            <h3 className="text-5xl font-black mb-2">120K+</h3>
            <p className="text-blue-100 font-medium uppercase tracking-widest text-sm">Total Downloads</p>
          </div>
          <div className="bg-white border p-10 rounded-[2.5rem] shadow-xl transform hover:-translate-y-2 transition-all">
            <h3 className="text-5xl font-black text-gray-900 mb-2">4.9/5</h3>
            <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">Average Rating</p>
          </div>
          <div className="bg-gray-900 text-white p-10 rounded-[2.5rem] shadow-2xl shadow-gray-300 transform hover:-translate-y-2 transition-all">
            <h3 className="text-5xl font-black mb-2">500+</h3>
            <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">Verified Apps</p>
          </div>
        </div>
      </section>

      {/* 3. Top Apps Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-2">Editor's Choice</h2>
            <p className="text-gray-500 italic">Handpicked top performing apps of the month</p>
          </div>
          <Link to="/apps" className="bg-blue-50 text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all">
            Show All Apps →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {topApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;