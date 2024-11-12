import React from "react";
import { FaGithub, FaLinkedin,FaAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white text-success p-4">
      <div className="container mx-auto text-center border border-success">
        <div className="flex justify-center mx-2 ">
          <Link
            to="https://github.com/a-ayush-kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 px-3"
          >
            <FaGithub size={30} />
          </Link>

          <Link
            to="https://linkedin.com/in/ayush-kumar-b75713286"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 px-3"
          >
            <FaLinkedin size={30} />
          </Link>

          <Link
            to="https://ayush-portflio.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 px-3"
          >
            <FaAddressCard size={30} />
          </Link>
        </div>
        <p className="text-sm font-bold">
          © 2024 Ayush Kumar - designed and developed.
        </p>
      </div>
    </footer>
  );
}
