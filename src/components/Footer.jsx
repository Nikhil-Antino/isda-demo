import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image"; // Assuming you're using Next.js Image component

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/logo/7.png"
              alt="logo"
              width={250}
              height={40}
              objectFit="contain"
              className="cursor-pointer"
            />
            <p className="mt-4 text-sm">
              Building a brighter future through education.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul>
              <li>Email: info@example.com</li>
              <li>Phone: +123 456 7890</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-white">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Address</h3>
            <p>123 Street Name, City, Country</p>
            <p>Zip Code: 12345</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
