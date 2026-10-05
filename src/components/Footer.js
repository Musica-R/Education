import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaGraduationCap } from 'react-icons/fa';
import Reveal from './Reveal';
import { PHONE_DISPLAY, PHONE_RAW, waLink } from '../utils/whatsapp';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <Reveal className="fcta">
          <div><h3>Ready to start learning?</h3><p>Send us a message and book your free demo class.</p></div>
          <a className="btn wa" href={waLink(['Hi BM Institute, I would like to know more about your courses.'])} target="_blank" rel="noopener noreferrer"><FaWhatsapp /> Chat on WhatsApp</a>
        </Reveal>
        <div className="fgrid">
          <Reveal>
            <div className="brand"><span className="mono"><FaGraduationCap /></span><span className="bn">BM Institute</span></div>
            <p>Practical training in MS Office, Excel, PowerPoint, C, Java and Python. Small batches, hands-on labs and friendly trainers.</p>
          </Reveal>
          <Reveal delay={120}><h4>Pages</h4>
            {[['/', 'Home'], ['/about', 'About us'], ['/courses', 'Courses'], ['/gallery', 'Gallery'], ['/contact', 'Contact']].map(([t, n]) => <Link key={t} to={t}>{n}</Link>)}</Reveal>
          <Reveal delay={240}><h4>Courses</h4>
            {['MS Office', 'MS Excel', 'MS PowerPoint', 'C Programming', 'Java', 'Python'].map((c) => <Link key={c} to="/courses">{c}</Link>)}</Reveal>
          <Reveal delay={360}><h4>Contact</h4>
            <a href={`tel:+91${PHONE_RAW}`}><FaPhoneAlt /> {PHONE_DISPLAY}</a>
            <a href="mailto:hello@bminstitute.in"><FaEnvelope /> hello@bminstitute.in</a>
            <p><FaMapMarkerAlt /> Main Road, Salem, Tamil Nadu</p></Reveal>
        </div>
      </div>
      <div className="copy">© {new Date().getFullYear()} BM Institute. All rights reserved.</div>
    </footer>
  );
}
