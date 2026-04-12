import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
        // Implement logout functionality here
        // Example: await signOut(auth);
        signOut(auth)
        .then(() => {
            // Sign-out successful.

            toast.success("Logout successful!");
        })
        .catch((error) => {
            // An error happened.
            toast.error(error.message);
        });
  }

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

      {/* Auth Section */}
      <div className="flex gap-3 items-center">
        {user ? (
          <>
            <div className="relative group">
              <img
                src={user.photoURL}
                alt="user"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
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