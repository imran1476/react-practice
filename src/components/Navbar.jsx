import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const activeStyle = ({ isActive }) => 
    isActive 
      ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1" 
      : "text-gray-600 hover:text-blue-500 transition-colors";

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">H</div>
          <span>HERO<span className="text-blue-600">IO</span></span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10 font-medium">
          <NavLink to="/" className={activeStyle}>Home</NavLink>
          <NavLink to="/apps" className={activeStyle}>Apps</NavLink>
          <NavLink to="/installation" className={activeStyle}>Installation</NavLink>
        </div>

        {/* Contribution Button */}
        <a 
          href="https://github.com/your-github-profile" 
          target="_blank" 
          rel="noreferrer"
          className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200"
        >
          Contribution
        </a>
      </div>
    </nav>
  );
};

export default Navbar;