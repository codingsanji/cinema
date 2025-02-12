import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 MovieApp. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="mx-2 hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="mx-2 hover:text-gray-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
