export const WA_NUMBER = '918610766168';
export const PHONE_RAW = '8610766168';
export const PHONE_DISPLAY = '+91 86107 66168';

export const waLink = (lines) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;

export const sendToWhatsApp = (lines) => {
  window.open(waLink(lines), '_blank', 'noopener');
};
