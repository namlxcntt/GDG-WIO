import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-center py-4 md:py-8 mx-auto border-t border-gray-200">
          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4 text-center">
            <p>Copyright @2023 Google Developer Group Hanoi</p>
            <p>All right reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
