import React from 'react';
import { FaBullseye, FaEye, FaHandsHelping, FaDesktop, FaBookOpen, FaWifi, FaSnowflake } from 'react-icons/fa';
import PageHead from '../components/PageHead';
import Staff from '../components/Staff';
import Faq from '../components/Faq';
import Reveal from '../components/Reveal';
import { img, stats } from '../data';
import '../styles/About.css';

const vals = [
  [FaBullseye, 'Our mission', 'Make practical computer skills easy to learn and useful at work.'],
  [FaEye, 'Our vision', 'A community where every student can find a job or start a business with confidence.'],
  [FaHandsHelping, 'Our promise', 'Clear teaching, patient trainers and support even after the course ends.'],
];
const facilities = [
  [FaDesktop, 'Modern computer lab'], [FaBookOpen, 'Notes and practice sheets'], [FaWifi, 'High-speed internet'], [FaSnowflake, 'Air-conditioned classrooms'],
];
const timeline = [
  ['2010', 'BM Institute opens with one classroom and 12 students.'],
  ['2014', 'Programming courses in C and Java are added.'],
  ['2018', 'New lab with 30 systems and weekend batches.'],
  ['2022', 'Python and advanced Excel courses launched.'],
  ['Today', 'Over 2,500 students trained and growing.'],
];

export default function About() {
  return (
    <>
      <PageHead title="About BM Institute" text="A professional training center for office and programming skills." />
      <section className="sec">
        <div className="wrap split">
          <div>
            <Reveal as="h2" className="sh left">Teaching computers for over 15 years</Reveal>
            <Reveal as="p" delay={150}>BM Institute began with a single classroom and a handful of students. Today we train school students, graduates and working professionals in MS Office, Excel, PowerPoint, C, Java and Python.</Reveal>
            <Reveal as="p" delay={300}>Our classes are small, our labs are hands-on and every course ends with a project. We believe anyone can learn with the right guidance and enough practice.</Reveal>
          </div>
          <Reveal dir="right" delay={200}><img className="round" src={img.team} alt="Our students" loading="lazy" /></Reveal>
        </div>
      </section>

      <section className="statbar">
        <div className="wrap sgrid">{stats.map(([n, l], i) => <Reveal key={l} delay={i * 130} className="stat"><b>{n}</b><span>{l}</span></Reveal>)}</div>
      </section>

      <section className="sec alt">
        <div className="wrap grid3">
          {vals.map(([I, t, d], i) => <Reveal key={t} delay={i * 160} className="vcard"><I className="ico" /><h3>{t}</h3><p>{d}</p></Reveal>)}
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal as="h2" className="sh">Our journey</Reveal>
          <div className="timeline">
            {timeline.map(([y, t], i) => <Reveal key={y} delay={i * 140} className="tl"><b>{y}</b><p>{t}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap split rev">
          <Reveal dir="left"><img className="round" src={img.lab} alt="Computer lab" loading="lazy" /></Reveal>
          <div>
            <Reveal as="h2" className="sh left">A lab built for practice</Reveal>
            <Reveal as="p" delay={150}>Every student gets a computer, a trainer nearby and time to practice after each lesson. Doubts are cleared in class, not left for later.</Reveal>
            <div className="facs">
              {facilities.map(([I, t], i) => <Reveal key={t} delay={250 + i * 120} className="fac"><I /> {t}</Reveal>)}
            </div>
          </div>
        </div>
      </section>

      <Staff />
      <Faq />
    </>
  );
}
