const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-primary">HobbyHub</h2>
          <p className="mt-2 text-sm">
            Discover and join local hobby groups. Build communities around your passions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/groups" className="hover:text-primary">All Groups</a></li>
            <li><a href="/login" className="hover:text-primary">Login</a></li>
            <li><a href="/register" className="hover:text-primary">Register</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📧 support@hobbyhub.com</li>
            <li>📍 Dhaka, Bangladesh</li>
            <li>📞 +880 1234 567890</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-sm mt-8 border-t pt-4">
        © 2025 HobbyHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;