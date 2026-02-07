import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-black text-white tracking-tighter mb-4 block">
            HERO<span className="text-blue-500">IO</span>
          </Link>
          <p className="text-sm leading-relaxed">
            Leading the way in app distribution and discovery. Your trust is our priority.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/apps" className="hover:text-blue-400">All Apps</Link></li>
            <li><Link to="/installation" className="hover:text-blue-400">My Installations</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Subscribe</h4>
          <div className="flex">
            <input type="text" placeholder="Email" className="bg-gray-800 border-none rounded-l-lg p-2 w-full focus:ring-1 focus:ring-blue-500 outline-none" />
            <button className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700 transition">Go</button>
          </div>
        </div>
      </div>
      <p className="text-center mt-8 text-xs text-gray-500 italic">
        © 2025 Hero IO. Made with ❤️ by Your Name.
      </p>
    </footer>
  );
};

export default Footer;