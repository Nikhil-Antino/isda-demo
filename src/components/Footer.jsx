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
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          {/* Brand Logo with Description */}
          <div className="flex flex-col xl:flex-row items-center space-x-4 w-full">
            <Image
              src="/images/logo/7.png"
              alt="logo"
              width={250}
              height={40}
              objectFit="contain"
              className="cursor-pointer"
            />
            <p className="text-sm w-full flex flex-col gap-y-1">
              <span>
                At ISDA, we believe in shaping future leaders. As an upskilling
                platform, co-founded by IIT & IIM alumni, we have developed
                industry-leading programs across business domains. Our
                meticulously crafted courses are designed to address the growing
                need for non-technical roles that drive business growth and
                decision-making.
              </span>

              <span>
                Unlike many platforms focused solely on tech roles, ISDA is
                dedicated to empowering professionals to excel in high-impact
                business roles—whether in management, strategy, or
                operations—where people skills are the key to success. Our
                students have gone on to secure rewarding positions in
                industries like consulting, operations, and business executive
                roles, with significant earning potential and clear career
                growth trajectories.
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
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
            <div className="flex justify-center md:justify-start space-x-4">
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
