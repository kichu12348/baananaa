// Home.jsx
import React, { useState } from 'react';
import { Sparkles, ScrollText, Cat, Loader2, MousePointer, Eye, Cloud, Binary } from 'lucide-react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const pages = [
  {
    name: "The Endless Scroll",
    path: "/endless-scroll",
    icon: <ScrollText className={styles.icon} />,
    description: "Keep scrolling. Forever. And ever. And ever...",
    color: "purple"
  },
  {
    name: "Philosophical Cat",
    path: "/philosophical-cat",
    icon: <Cat className={styles.icon} />,
    description: "Deep thoughts from a cat who thinks too much.",
    color: "blue"
  },
  {
    name: "Pointless Progress Bars",
    path: "/progress-bars",
    icon: <Loader2 className={`${styles.icon} ${styles.spin}`} />,
    description: "Watch things load... but not really.",
    color: "green"
  },
  {
    name: "Secret Click",
    path: "/secret-click",
    icon: <MousePointer className={styles.icon} />,
    description: "Click where? Why? Nobody knows!",
    color: "yellow"
  },
  {
    name: "History of Invisible Things",
    path: "/invisible-history",
    icon: <Eye className={styles.icon} />,
    description: "An extensive guide to things you can't see.",
    color: "red"
  },
  {
    name: "The Fortune Teller Potato",
    path: "/fortune-potato",
    icon: <Binary className={styles.icon} />,  // Changed to Binary icon for mystical effect
    description: "Let the all-knowing potato guide your destiny.",
    color: "orange"
  },
  {
    name: "Rate My Air",
    path: "/rate-air",
    icon: <Cloud className={styles.icon} />,  // Changed to Cloud icon
    description: "Because air quality ratings weren't subjective enough.",
    color: "teal"
  }
];

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          USELESS
          <Sparkles className={styles.sparkle} />
        </h1>
        <p className={styles.subtitle}>
          Welcome to the most purposefully pointless collection of digital experiences. 
          Prepare to waste time in the most delightful ways possible!
        </p>
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          {pages.map((page, index) => (
            <Link
              key={page.name}
              className={`${styles.card} ${styles[page.color]} ${hoveredCard === index ? styles.cardHovered : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              to={page.path}
            >
              <div className={styles.cardHeader}>
                {page.icon}
                <h2 className={styles.cardTitle}>{page.name}</h2>
              </div>
              <p className={styles.cardDescription}>{page.description}</p>
              
              <div className={`${styles.cardHint} ${hoveredCard === index ? styles.cardHintVisible : ''}`}>
                Click to enter this rabbit hole →
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Warning: These experiences may cause excessive eye-rolling and uncontrollable giggles.</p>
      </footer>
    </div>
  );
};

export default Home;

