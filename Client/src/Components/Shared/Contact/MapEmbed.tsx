import React from "react";

const MapEmbed: React.FC = () => {
  return (
    <div className="w-full h-[400px] p-4 bg-white rounded-2xl shadow-md">
      <div className="w-full h-full rounded-xl overflow-hidden border border-gray-200">
        <iframe
          title="Preciso Fashion Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.4919743711225!2d85.29060207554079!3d27.7140549761787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18f2d306eb21%3A0xdae844496e6b4bd6!2sBhagwan%20Pau%20Taxi%20Stand!5e1!3m2!1sen!2snp!4v1751615349443!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapEmbed;
