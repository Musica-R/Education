import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFileExcel, FaPython, FaJava, FaStar, FaUserGraduate } from 'react-icons/fa';
import Reveal from './Reveal';
import { useJoin } from './JoinModal';
import { img } from '../data';
import '../styles/Hero.css';

const words = ['MS Excel', 'Python', 'Java', 'C Language', 'PowerPoint', 'MS Office'];

export default function Hero() {
  const [i, setI] = useState(0);
  const { open } = useJoin();
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero">
      <div className="wrap hero-in">
        <div className="hero-text">
          <Reveal as="p" className="badge"><FaStar /> Trusted computer training center</Reveal>
          <Reveal as="h1" delay={150}>Master <span key={i} className="swap">{words[i]}</span><br />and build a career that lasts.</Reveal>
          <Reveal as="p" delay={300} className="lead">Practical, lab-based courses taught by experienced trainers in small batches. Learn step by step and finish with a real project.</Reveal>
          <Reveal delay={450} className="row">
            <button className="btn gold" onClick={() => open()}>Join now</button>
            <Link to="/courses" className="btn outline">Explore courses</Link>
          </Reveal>
          <Reveal delay={600} className="mini">
            <div><b>2,500+</b><span>Students</span></div>
            <div><b>6</b><span>Courses</span></div>
            <div><b>15+</b><span>Years</span></div>
          </Reveal>
        </div>
        <Reveal dir="right" delay={300} className="hero-art">
          <div className="ring" />
          <img className="main" src={img.hero} alt="Students at BM Institute" />
          <img className="small" src={img.hero2} alt="Computer lab session" />
          <span className="fchip c1"><FaFileExcel /> MS Excel</span>
          <span className="fchip c2"><FaPython /> Python</span>
          <span className="fchip c3"><FaJava /> Java</span>
          <span className="fchip c4"><FaUserGraduate /> Certificate course</span>
        </Reveal>
      </div>
    </section>
  );
}
