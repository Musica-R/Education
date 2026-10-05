import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import PageHead from '../components/PageHead';
import Faq from '../components/Faq';
import Reveal from '../components/Reveal';
import { JoinForm } from '../components/JoinModal';
import { PHONE_DISPLAY, PHONE_RAW, waLink } from '../utils/whatsapp';
import '../styles/Contact.css';

const info = [
  [FaPhoneAlt, 'Call us', PHONE_DISPLAY, `tel:+91${PHONE_RAW}`],
  [FaWhatsapp, 'WhatsApp', PHONE_DISPLAY, waLink(['Hi BM Institute'])],
  [FaEnvelope, 'Email', 'hello@bminstitute.in', 'mailto:hello@bminstitute.in'],
  [FaMapMarkerAlt, 'Visit us', 'Main Road, Salem, Tamil Nadu', null],
  [FaClock, 'Timings', 'Mon – Sat, 8 AM – 8 PM', null],
];

export default function Contact() {
  return (
    <>
      <PageHead title="Contact us" text="Send your details on WhatsApp or visit the center. We reply the same day." />
      <section className="sec">
        <div className="wrap split top">
          <div className="cinfo">
            {info.map(([I, t, v, h], i) => (
              <Reveal key={t} delay={i * 120} className="crow">
                <span><I /></span>
                <div><h3>{t}</h3>{h ? <a href={h} target="_blank" rel="noopener noreferrer">{v}</a> : <p>{v}</p>}</div>
              </Reveal>
            ))}
          </div>
          <Reveal dir="right" delay={200} className="formcard">
            <h2>Join BM Institute</h2>
            <p>Your details will open in WhatsApp, ready to send.</p>
            <JoinForm />
          </Reveal>
        </div>
      </section>
      <section className="sec alt nopad">
        <Reveal className="map">
          <iframe title="BM Institute location" loading="lazy" src="https://www.google.com/maps?q=Salem,Tamil+Nadu&output=embed" />
        </Reveal>
      </section>
      <Faq />
    </>
  );
}
