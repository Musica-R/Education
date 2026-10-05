import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { waLink } from '../utils/whatsapp';
import '../styles/WhatsAppFloat.css';

export default function WhatsAppFloat() {
  return (
    <a className="wa-float" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer"
      href={waLink(['Hi BM Institute, I would like to know more about your courses.'])}>
      <FaWhatsapp />
    </a>
  );
}
