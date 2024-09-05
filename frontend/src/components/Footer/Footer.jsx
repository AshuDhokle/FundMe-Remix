import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="p-2 bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-around">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="mb-2">Email: contact@example.com</p>
            <p className="mb-2">Phone: +123 456 7890</p>
            <p>Address: 123 Main Street, City, Country</p>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-400"><FaFacebookF size={20} /></a>
              <a href="#" className="text-blue-400 hover:text-blue-300"><FaTwitter size={20} /></a>
              <a href="#" className="text-pink-600 hover:text-pink-400"><FaInstagram size={20} /></a>
              <a href="#" className="text-blue-700 hover:text-blue-500"><FaLinkedinIn size={20} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} LifeSpring Fund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
