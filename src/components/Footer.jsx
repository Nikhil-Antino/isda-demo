import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image"; // Assuming you're using Next.js Image component
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          {/* Brand Logo with Description */}
          <div className="flex flex-col xl:flex-row items-center space-x-4 w-full gap-y-2">
            <div className="flex flex-col gap-y-2">
              <Image
                src="/images/logo/7.png"
                alt="logo"
                width={300}
                height={40}
                objectFit="contain"
                className="cursor-pointer"
              />
              <p className="font-semmibold bg-gradient-to-r from-[#fac749] via-[#ffa323] to-[#fb930e] bg-clip-text text-transparent flex items-center gap-x-2">
                Shaping Skills{" "}
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#fac749] via-[#ffa323] to-[#fb930e]" />{" "}
                Securing Future
              </p>
            </div>
            <p className="text-sm w-full flex flex-col gap-y-1">
              <span>
                At ISDA, co-founded by IIT and IIM alumni, we’re building a
                brighter future for India’s youth – where opportunities are
                abundant.. Our courses meet the demand for impactful
                non-technical roles driving growth and decision-making.
              </span>

              <span>
                Unlike many platforms focused solely on tech roles, ISDA
                empowers professionals for high-impact business careers—spanning
                management, strategy, and operations—where interpersonal skills
                are essential. Our graduates secure rewarding roles with strong
                earning potential and clear growth paths.
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul>
              <li>Email: connect@isda.academy</li>
              <li>Phone: +91 99021 56768</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {/* <a href="#" className="hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white">
                <FaTwitter />
              </a> */}
              <Link
                className="hover:text-white"
                href={
                  "https://www.linkedin.com/showcase/isda-indian-skill-development-academy/?viewAsMember=true"
                }
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
              {/* <a href="#" className="hover:text-white">
                <FaInstagram />
              </a> */}
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Address</h3>
            <p>
              2nd Floor, Bizzhub Coworking, A/7, KHB Colony, 5th Block,
              Koramangala, Bengaluru, Karnataka
            </p>
            <p>Zip Code: 560095</p>
          </div>

          {/* Privacy Policy & Terms */}
          <div>
            <h3 className="text-lg font-bold mb-4">Policies</h3>
            <ul>
              <li>
                <Link href={"/privacy-policy"}>Privacy Statement</Link>
              </li>
              <li>
                <Link href={"/term-of-use"}>Term of Use</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Indian Skill Development Academy.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
