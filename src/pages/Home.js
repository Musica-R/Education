import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserTie, FaLaptopCode, FaCertificate, FaUsers, FaQuoteLeft, FaCheck, FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';
import Hero from '../components/Hero';
import Staff from '../components/Staff';
import Faq from '../components/Faq';
import Reveal from '../components/Reveal';
import CourseCard from '../components/CourseCard';
import { useJoin } from '../components/JoinModal';
import { courses, stats, img, reviews, batches, path } from '../data';
import { waLink } from '../utils/whatsapp';
import '../styles/Home.css';

const why = [
  [FaUserTie, 'Experienced trainers', 'Learn from teachers who use these tools at work every day.'],
  [FaLaptopCode, 'Hands-on lab', 'Every class includes practice time on your own computer.'],
  [FaUsers, 'Small batches', 'Limited seats so each student gets personal attention.'],
  [FaCertificate, 'Certificate & projects', 'Finish with a project and a course certificate.'],
];

export default function Home() {
  const { open } = useJoin();
  return (
    <>
      <Hero />

      <section className="statbar">
        <div className="wrap sgrid">
          {stats.map(([n, l], i) => <Reveal key={l} delay={i * 130} className="stat"><b>{n}</b><span>{l}</span></Reveal>)}
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <Reveal dir="left" className="imgstack">
            <img className="round" src={img.class} alt="Classroom" loading="lazy" />
            <div className="floatcard"><b>15+</b><span>years of teaching</span></div>
          </Reveal>
          <div>
            <Reveal as="h2" className="sh left">Learn by doing, not just watching</Reveal>
            <Reveal as="p" delay={150}>At BM Institute every topic starts with a short explanation and moves straight into practice. You finish each course with a project you can show to an employer.</Reveal>
            {['Step-by-step teaching from the basics', 'Practice sheets and weekly tests', 'Flexible morning, evening and weekend batches', 'Resume help and mock interviews'].map((t, i) => (
              <Reveal key={t} delay={250 + i * 120} className="tick"><FaCheck /> {t}</Reveal>
            ))}
            <Reveal delay={800}><Link to="/about" className="btn dark">About us</Link></Reveal>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <Reveal as="h2" className="sh">Our courses</Reveal>
          <Reveal as="p" delay={120} className="sub">Pick the skill you need for work, college or your first job.</Reveal>
          <div className="grid3">{courses.map((c, i) => <CourseCard key={c.id} c={c} delay={(i % 3) * 140} />)}</div>
          <Reveal className="center"><Link to="/courses" className="btn dark">View all courses</Link></Reveal>
        </div>
      </section>

      <section className="sec dark">
        <div className="wrap">
          <Reveal as="h2" className="sh light">Why choose BM Institute</Reveal>
          <Reveal as="p" delay={120} className="sub light">Four reasons students stay with us from the first class to the last.</Reveal>
          <div className="grid4">
            {why.map(([I, t, d], i) => (
              <Reveal key={t} delay={i * 140} className="wcard"><I className="ico" /><h3>{t}</h3><p>{d}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal as="h2" className="sh">How you get started</Reveal>
          <Reveal as="p" delay={120} className="sub">Five simple steps from your first message to your certificate.</Reveal>
          <div className="steps">
            {path.map(([t, d], i) => (
              <Reveal key={t} delay={i * 150} className="step"><span>{i + 1}</span><h3>{t}</h3><p>{d}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <Reveal as="h2" className="sh">Choose your batch</Reveal>
          <Reveal as="p" delay={120} className="sub">Timings that work around school, college and your job.</Reveal>
          <div className="grid3">
            {batches.map(([t, time, days, note], i) => (
              <Reveal key={t} delay={i * 150} className="bcard">
                <FaCalendarAlt className="ico" /><h3>{t}</h3>
                <b>{time}</b><span>{days}</span><p>{note}</p>
                <button className="btn dark sm" onClick={() => open()}>Book a seat</button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Staff />

      <section className="sec alt">
        <div className="wrap">
          <Reveal as="h2" className="sh">What our students say</Reveal>
          <div className="grid3">
            {reviews.map(([n, c, t], i) => (
              <Reveal key={n} delay={i * 150} className="rcard"><FaQuoteLeft className="ico" /><p>{t}</p><b>{n}</b><small>{c}</small></Reveal>
            ))}
          </div>
        </div>
      </section>

      <Faq />

      <section className="cta">
        <div className="wrap">
          <Reveal as="h2">Your next batch starts soon</Reveal>
          <Reveal as="p" delay={150}>Seats are limited. Join now or ask us anything on WhatsApp.</Reveal>
          <Reveal delay={300} className="row center-row">
            <button className="btn gold" onClick={() => open()}>Join now</button>
            <a className="btn wa" href={waLink(['Hi BM Institute, I want to book a free demo class.'])} target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp us</a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
