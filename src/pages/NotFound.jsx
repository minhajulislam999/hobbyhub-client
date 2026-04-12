import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-2">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary mt-6">Go Back Home</Link>
    </div>
  );
};

export default NotFound;