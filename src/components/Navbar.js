import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaPhoneAlt, FaClock, FaBars, FaTimes, FaGraduationCap } from 'react-icons/fa';
import { useJoin } from './JoinModal';
import { PHONE_DISPLAY, PHONE_RAW } from '../utils/whatsapp';
import '../styles/Navbar.css';

const links = [['/', 'Home'], ['/about', 'About'], ['/courses', 'Courses'], ['/gallery', 'Gallery'], ['/contact', 'Contact']];

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [solid, setSolid] = useState(false);
  const { pathname } = useLocation();
  const { open } = useJoin();

  useEffect(() => setMenu(false), [pathname]);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40);
    f();
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);

  return (
    <header className={`nav ${solid ? 'solid' : ''}`}>
      <div className="topbar">
        <div className="wrap">
          <span><FaClock /> Mon – Sat, 8 AM – 8 PM</span>
          <a href={`tel:+91${PHONE_RAW}`}><FaPhoneAlt /> {PHONE_DISPLAY}</a>
        </div>
      </div>
      <div className="wrap bar">
        <Link to="/" className="brand">
          <span className="mono"><FaGraduationCap /></span>
          <span className="bn">BM Institute<small>Computer training center</small></span>
        </Link>
        <nav className={`links ${menu ? 'open' : ''}`}>
          {links.map(([to, t]) => <NavLink key={to} to={to} end={to === '/'}>{t}</NavLink>)}
          <button className="btn gold sm" onClick={() => { setMenu(false); open(); }}>Join now</button>
        </nav>
        <button className="burger" aria-label="Menu" onClick={() => setMenu(!menu)}>{menu ? <FaTimes /> : <FaBars />}</button>
      </div>
    </header>
  );
}
