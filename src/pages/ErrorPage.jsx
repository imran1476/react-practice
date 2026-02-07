import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-black text-blue-100 absolute -z-10">404</h1>
      <h2 className="text-4xl font-bold mb-4">Oops! Page Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-blue-200 transition">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;