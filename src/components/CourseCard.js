import React from 'react';
import { FaClock, FaSignal, FaCheckCircle } from 'react-icons/fa';
import Reveal from './Reveal';
import { useJoin } from './JoinModal';
import '../styles/CourseCard.css';

export default function CourseCard({ c, delay = 0 }) {
  const { open } = useJoin();
  return (
    <Reveal delay={delay} className="card course">
      <div className="thumb">
        <img src={c.img} alt={c.title} loading="lazy" />
        <span className="chip">{c.tag}</span>
        <span className="cicon"><c.Icon /></span>
      </div>
      <div className="cbody">
        <h3>{c.title}</h3>
        <p className="meta"><span><FaClock /> {c.dur}</span><span><FaSignal /> {c.level}</span></p>
        <ul>{c.pts.map((p) => <li key={p}><FaCheckCircle /> {p}</li>)}</ul>
        <div className="cfoot"><b>{c.price}</b><button className="btn gold sm" onClick={() => open(c.title)}>Join now</button></div>
      </div>
    </Reveal>
  );
}
