import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import PageHead from '../components/PageHead';
import Reveal from '../components/Reveal';
import { gallery } from '../data';
import '../styles/Gallery.css';

export default function Gallery() {
  const [sel, setSel] = useState(null);
  return (
    <>
      <PageHead title="Gallery" text="Classes, labs and student moments at BM Institute." />
      <section className="sec">
        <div className="wrap grid3 gal">
          {gallery.map((g, i) => (
            <Reveal key={g} delay={(i % 3) * 140} className={`gitem ${i % 5 === 0 ? 'tall' : ''}`} onClick={() => setSel(g)}>
              <img src={g} alt={`Gallery ${i + 1}`} loading="lazy" />
            </Reveal>
          ))}
        </div>
      </section>
      {sel && (
        <div className="lightbox" onClick={() => setSel(null)}>
          <button aria-label="Close"><FaTimes /></button>
          <img src={sel.replace('w=800', 'w=1400')} alt="Preview" />
        </div>
      )}
    </>
  );
}
