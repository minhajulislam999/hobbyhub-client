import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => toast.success("Logged out successfully!"))
      .catch((err) => toast.error(err.message));
  };

  return (
    <nav className="bg-base-100 shadow-md px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-primary">HobbyHub</Link>

      {/* Nav Links */}
      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:text-primary">Home</Link>
        <Link to="/groups" className="hover:text-primary">All Groups</Link>
        {user && (
          <>
            <Link to="/createGroup" className="hover:text-primary">Create Group</Link>
            <Link to="/myGroups" className="hover:text-primary">My Groups</Link>
          </>
        )}
      </div>

      {/* Right Side */}
      <div className="flex gap-3 items-center">
        {/* Theme Toggle */}
        <label className="swap swap-rotate">
          <input type="checkbox" onChange={handleThemeToggle} checked={theme === 'dark'} />
          <span className="swap-on text-xl">🌙</span>
          <span className="swap-off text-xl">☀️</span>
        </label>

        {user ? (
          <>
            <div className="relative group">
              <img src={user.photoURL} alt="user" className="w-10 h-10 rounded-full cursor-pointer" />
              <span className="absolute hidden group-hover:block bg-gray-800 text-white text-sm px-2 py-1 rounded -bottom-8 left-0">
                {user.displayName}
              </span>
            </div>
            <button onClick={handleLogout} className="btn btn-sm btn-error">Logout</button>
          </>
        ) : (
          <Link to="/login" className="btn btn-sm btn-primary">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;