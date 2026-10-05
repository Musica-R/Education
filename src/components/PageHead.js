import React from 'react';
import Reveal from './Reveal';
import '../styles/PageHead.css';

export default function PageHead({ title, text }) {
  return (
    <section className="phead">
      <div className="wrap">
        <Reveal as="h1">{title}</Reveal>
        <Reveal as="p" delay={150}>{text}</Reveal>
      </div>
    </section>
  );
}
