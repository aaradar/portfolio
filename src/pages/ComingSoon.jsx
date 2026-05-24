import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ComingSoon.css';

const caseInfo = {
  1: { title: 'Service Site',           emoji: '🦷', tag: 'Web Design',    desc: 'A user-centred service website is on its way.' },
  2: { title: 'Memory Game',            emoji: '🃏', tag: 'Interactive UI', desc: 'An interactive memory card game — coming soon.' },
  3: { title: 'E-Commerce Site',        emoji: '🛍️', tag: 'E-Commerce',    desc: 'A full shopping experience — check back soon.' },
  4: { title: 'Analytics Dashboard',    emoji: '📊', tag: 'Data Viz',       desc: 'A data-rich analytics interface — in progress.' },
};

export default function ComingSoon() {
  const { id } = useParams();
  const info = caseInfo[id] || { title: 'Case Study', emoji: '📁', tag: 'Design', desc: 'This project is coming soon.' };

  return (
    <div className="cs-page">
      <div className="cs-card">
        <div className="cs-emoji">{info.emoji}</div>
        <span className="cs-tag">{info.tag}</span>
        <h1 className="cs-title">{info.title}</h1>
        <p className="cs-desc">{info.desc}</p>
        <div className="cs-label">Coming Soon</div>
        <Link to="/" className="cs-back">← Back to Portfolio</Link>
      </div>
      <div className="cs-orb cs-orb-1" aria-hidden="true" />
      <div className="cs-orb cs-orb-2" aria-hidden="true" />
    </div>
  );
}
