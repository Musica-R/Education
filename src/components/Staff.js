import React from 'react';
import Reveal from './Reveal';
import { staff } from '../data';
import '../styles/Staff.css';

export default function Staff() {
  return (
    <section className="sec staff">
      <div className="wrap">
        <Reveal as="h2" className="sh">Meet our staff</Reveal>
        <Reveal as="p" delay={120} className="sub">Trainers who teach with patience and real work experience.</Reveal>
        <div className="grid4">
          {staff.map((s, i) => (
            <Reveal key={s.name} delay={i * 150} className="scard">
              <div className="photo"><img src={s.img} alt={s.name} loading="lazy" /></div>
              <div className="sinfo">
                <h3>{s.name}</h3>
                <p className="role">{s.role}</p>
                <p className="sub2">{s.sub}</p>
                <span className="exp">{s.exp} experience</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
