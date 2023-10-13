import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CardContainer = ({ children }) => {
  const containerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const isHidden = rect.bottom < 0 || rect.top > window.innerHeight;
      container.style.opacity = isHidden ? 0 : 1;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call it initially to set the correct opacity

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div ref={containerRef} className="card-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 1, ease: 'easeOut' }}>
      {children}
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div id="experience">
      <CardContainer>
        <p className="about-title">Experience</p>
        <div className="experience-card">
        <h4 className="job-title">Associate Software Engineer (ASE)</h4>
        <p>Accenture India Pvt.Ltd., | Aug 2020 - June 2022</p>
        <ul className='bullet-list'>
        
          <li>During my tenure as a Spring Boot developer at Sydbank through Accenture, I made a substantial impact by delivering 9 CR’s. These contributions led to a remarkable 20% enhancement in the application's performance, a significant achievement that earned me recognition as the top performer of the month.</li>
<li>I developed a Java-based automation tool with Spring Boot for Sydbank's loan application, enabling the differentiation of 61 unique reports.</li>
<li>My contributions included the design and implementation of 491 automation test cases for DM and CRM web applications, resulting in a 50% reduction in testing time and a 60% increase in test coverage.</li>        
    <li>These accomplishments highlight my ability to thrive in a consulting environment, delivering high-quality solutions and remarkable results for clients.</li>
        </ul>
      </div>

      </CardContainer>

      <CardContainer>
      <div className="experience-card">
        <h4 className="job-title">Intern</h4>
       <p>DRDL | May 2019</p>
        <ul className='bullet-list'>
        <li>Led development of a Microservices-based Health Monitoring System using web technologies, ensuring reliable system health monitoring.</li>
<li>Implemented WebSocket protocol for real-time communication, boosting system response time by 30% and data transfer speed by 40%.</li>
<li>Conducted end-to-end tests, reducing downtime by 60% and enhancing system reliability.</li>
<li>Collaborated across teams to integrate the system, achieving 50% better data accuracy and 20% improved performance.</li>

</ul>
      
</div>
      </CardContainer>
    </div>
  );
};

export default Experience;










