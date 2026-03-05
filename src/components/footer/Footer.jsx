import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 mt-10">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-5 gap-8">
        <div>
          <h2 className="text-white text-lg font-bold mb-3">
            CS — Ticket System
          </h2>
          <p className="text-sm text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Sales</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Social Links</h3>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <FontAwesomeIcon icon={faTwitter} />
              @CS — Ticket System
            </p>

            <p className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLinkedin} />
              @CS — Ticket System
            </p>

            <p className="flex items-center gap-2">
              <FontAwesomeIcon icon={faFacebook} />
              @CS — Ticket System
            </p>

            <p className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} />
              support@cst.com
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © 2026 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
