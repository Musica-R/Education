import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Reveal from './Reveal';
import { faqs } from '../data';
import '../styles/Faq.css';

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="sec alt faq">
      <div className="wrap faq-in">
        <div className="faq-head">
          <Reveal as="h2" className="sh left">Frequently asked questions</Reveal>
          <Reveal as="p" delay={150}>Can't find your answer? Message us on WhatsApp and we will reply the same day.</Reveal>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a], i) => (
            <Reveal key={q} delay={i * 100} className={`fq ${open === i ? 'on' : ''}`}>
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{q}</span><FaPlus />
              </button>
              <div className="fa"><p>{a}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
