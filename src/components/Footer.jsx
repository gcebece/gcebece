import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <h3>Map</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.558844924354!2d78.32862307483377!3d12.545357987732228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac4ad3c72b0051%3A0x121c6c71d83706b5!2sGovernment%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1710727356614!5m2!1sen!2sin"
          frameborder="0"
          style={{
            width: "100%", // Adjust width as needed
            height: "400px", // Adjust height as needed
            border: "none", // Remove border
            borderRadius: "8px", // Add border radius
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Add box shadow
          }}
        ></iframe>
      </div>
      <br /> <br />
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved Dept of ECE . Made
          with by ❤️ Kumaravel ECE Final Year
        </p>{" "}
        <br />
        <p>
          For Any Enquiry Contact <br /> Mobile No : 6379390196 , <br />
          Mail ID: kumaravelprogrammer@gmail.com
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
