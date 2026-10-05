import React, { createContext, useContext, useEffect, useState } from 'react';
import { FaTimes, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { courses } from '../data';
import { sendToWhatsApp, waLink } from '../utils/whatsapp';
import '../styles/JoinModal.css';

const Ctx = createContext({ open: () => {} });
export const useJoin = () => useContext(Ctx);

const build = (d) => [
  '*New admission enquiry - BM Institute*',
  `Name: ${d.name}`,
  `Phone: ${d.phone}`,
  d.email ? `Email: ${d.email}` : null,
  `Course: ${d.course}`,
  `Batch: ${d.batch}`,
  d.msg ? `Message: ${d.msg}` : null,
].filter(Boolean);

// Join form: sends all details to the institute's WhatsApp number.
export function JoinForm({ course, onDone }) {
  const [d, setD] = useState({ name: '', phone: '', email: '', course: course || courses[0].title, batch: 'Morning (8–10 AM)', msg: '' });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setD({ ...d, [k]: e.target.value });
  useEffect(() => { if (course) setD((p) => ({ ...p, course })); }, [course]);

  const submit = (e) => {
    e.preventDefault();
    sendToWhatsApp(build(d));
    setSent(true);
    if (onDone) setTimeout(onDone, 6000);
  };

  if (sent) {
    return (
      <div className="join-ok">
        <FaCheckCircle />
        <h3>Thank you, {d.name}!</h3>
        <p>WhatsApp is opening with your details for <b>{d.course}</b>. Just press send and we will reply shortly.</p>
        <a className="btn wa" href={waLink(build(d))} target="_blank" rel="noopener noreferrer"><FaWhatsapp /> Open WhatsApp again</a>
      </div>
    );
  }
  return (
    <form className="join-form" onSubmit={submit}>
      <input required placeholder="Your name" value={d.name} onChange={set('name')} />
      <input required type="tel" pattern="[0-9+ ]{10,14}" title="Enter a valid phone number" placeholder="Phone number" value={d.phone} onChange={set('phone')} />
      <input type="email" placeholder="Email (optional)" value={d.email} onChange={set('email')} />
      <div className="two">
        <select value={d.course} onChange={set('course')}>{courses.map((c) => <option key={c.id}>{c.title}</option>)}</select>
        <select value={d.batch} onChange={set('batch')}>
          <option>Morning (8–10 AM)</option><option>Evening (5–8 PM)</option><option>Weekend</option>
        </select>
      </div>
      <textarea rows="3" placeholder="Message (optional)" value={d.msg} onChange={set('msg')} />
      <button className="btn wa"><FaWhatsapp /> Send details on WhatsApp</button>
      <small>Your details open in WhatsApp, ready to send to BM Institute.</small>
    </form>
  );
}

export function JoinProvider({ children }) {
  const [s, setS] = useState({ show: false, course: '' });
  const open = (course = '') => setS({ show: true, course });
  const close = () => setS({ show: false, course: '' });
  useEffect(() => {
    document.body.style.overflow = s.show ? 'hidden' : '';
    const k = (e) => e.key === 'Escape' && close();
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [s.show]);

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      {s.show && (
        <div className="modal" onClick={close}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <button className="modal-x" onClick={close} aria-label="Close"><FaTimes /></button>
            <h2>Join BM Institute</h2>
            <p>Fill in your details and we will continue on WhatsApp.</p>
            <JoinForm course={s.course} onDone={close} />
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
