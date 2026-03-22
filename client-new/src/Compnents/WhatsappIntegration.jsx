import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

import { motion } from "framer-motion";

const WhatsappIntegration = () => {
  return (
    <>
      <a
        href="https://wa.me/919867657587578868889776543210?text=Hi!%20I%20was%20viewing%20your%20website%20and%20want%20to%20know%20more%20about%20your%20courses."
        className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 bg-green-500 hover:bg-green-600 text-white w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full shadow-lg transition duration-300 flex items-center justify-center z-99999"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </>
  );
};

export default WhatsappIntegration;
