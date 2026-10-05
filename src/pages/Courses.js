import React, { useState } from 'react';
import { FaCertificate, FaLaptopCode, FaBookOpen, FaUserFriends, FaHeadset, FaRedo } from 'react-icons/fa';
import PageHead from '../components/PageHead';
import CourseCard from '../components/CourseCard';
import Faq from '../components/Faq';
import Reveal from '../components/Reveal';
import { courses } from '../data';
import '../styles/Courses.css';

const incl = [
  [FaLaptopCode, 'Daily lab practice'], [FaBookOpen, 'Notes & practice sheets'], [FaUserFriends, 'Small batch size'],
  [FaCertificate, 'Completion certificate'], [FaHeadset, 'Doubt clearing support'], [FaRedo, 'Free revision classes'],
];

export default function Courses() {
  const [f, setF] = useState('All');
  const list = f === 'All' ? courses : courses.filter((c) => c.tag === f);
  return (
    <>
      <PageHead title="Our courses" text="Office skills and programming languages, from first lesson to final project." />
      <section className="sec">
        <div className="wrap">
          <Reveal className="filters">
            {['All', 'Office', 'Coding'].map((t) => <button key={t} className={f === t ? 'on' : ''} onClick={() => setF(t)}>{t}</button>)}
          </Reveal>
          <div className="grid3" key={f}>{list.map((c, i) => <CourseCard key={c.id} c={c} delay={(i % 3) * 140} />)}</div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <Reveal as="h2" className="sh">Every course includes</Reveal>
          <div className="grid3 incl">
            {incl.map(([I, t], i) => <Reveal key={t} delay={(i % 3) * 140} className="icard"><I /><span>{t}</span></Reveal>)}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal as="h2" className="sh">Fees and duration</Reveal>
          <Reveal className="tablewrap">
            <table>
              <thead><tr><th>Course</th><th>Duration</th><th>Level</th><th>Fees</th></tr></thead>
              <tbody>{courses.map((c) => <tr key={c.id}><td>{c.title}</td><td>{c.dur}</td><td>{c.level}</td><td><b>{c.price}</b></td></tr>)}</tbody>
            </table>
          </Reveal>
        </div>
      </section>
      <Faq />
    </>
  );
}
