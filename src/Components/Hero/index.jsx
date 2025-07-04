import React, { useState, useEffect } from 'react';
import "./Hero.css";
import { Link } from 'react-scroll';
import Achievement from '../../Commons/Achievement';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {
  const [text, setText] = useState('Software Engineer.');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(300);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [startTyping, setStartTyping] = useState(false); // New state for initial delay

  const titles = ['Website engineering.', 'Growth marketing.', 'SEO strategies.'];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(40); // Faster deletion
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(80); // Normal typing speed
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2500); // Delay before starting to delete
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
        setTimeout(() => setStartTyping(true), 1500); // Delay before starting to type the next title
      }
    };

    if (startTyping) {
      const timer = setTimeout(handleTyping, typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [text, isDeleting, loopNum, typingSpeed, titles, startTyping]);

  useEffect(() => {
      const i = loopNum % titles.length;
      const fullText = titles[i];
      if (fullText === 'Cybersecurity Engineer.') {
        if (viewportWidth > 1150) {
          document.documentElement.style.setProperty('--typing-font-size', '0.7em');
        } else if (viewportWidth <= 1150 && viewportWidth >= 1075) {
          document.documentElement.style.setProperty('--typing-font-size', '0.7em');
        } else if (viewportWidth <= 1074 && viewportWidth >= 1051) {
          document.documentElement.style.setProperty('--typing-font-size', '0.6em');
        } else {
          document.documentElement.style.setProperty('--typing-font-size', '0.8em');
        }
      } else {
        document.documentElement.style.setProperty('--typing-font-size', '0.8em');
      }
    }, [viewportWidth, loopNum, titles]);

  useEffect(() => {
    const delayTimer = setTimeout(() => setStartTyping(true), 1200); // Initial delay of 1200ms
    return () => clearTimeout(delayTimer);
  }, []);

const getClassNames = () => {
  let classNames = 'typing-text';
  if (text === 'Cybersecurity Engineer.') {
    classNames += ' cybersecurity-engineer';
  }
  if (text !== 'Web Developer.') {
    classNames += ' smaller-text';
  }
  return classNames;
};

  return (
    <section id='hero'>
      <div className="wrapper info-container">
        <div className="column">
          <h3 className='sub-title' data-aos='fade-right'>
            Let's build future  <span className='primary'>together ;</span>
          </h3>
          <h1 className="heading-1" data-aos='fade-up'>
            We're <span className="gradient-text">Brook Bytes</span>
          </h1>
          <h1 className="heading-1 typing-container" data-aos='fade-down'>
            <span className={getClassNames()} style={{ fontSize: 'var(--typing-font-size)' }}>{text}</span>
            <span className="cursor"></span>
          </h1>
          <p className="muted" data-aos='fade-up' data-aos-delay='300'>
            Brook Bytes is your digital partner for modern web development, SEO services, and online marketing solutions.
We design fast, mobile-friendly websites and help brands grow with smart search engine strategies and creative campaigns.
Building digital success — one click at a time.
          </p>
          <div className="flex-center buttons-wrapper">
          <Link to='contact' smooth={true} className='btn secondary' data-aos='fade-up' data-aos-delay='400'>Contact Us</Link>
            <Link to='services' smooth={true} className='btn primary' data-aos='fade-up' data-aos-delay='300'>Get started</Link>
            
          </div>
        </div>
       
      </div>
      <div className="achievement-cluster">
        <div className="wrapper">
          <Achievement/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
