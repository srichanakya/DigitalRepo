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
        <p>Accenture India Pvt.Ltd., | August 2020 - June 2022</p>
        <ul className='bullet-list'>
        
          <li>Worked as a back-end Java Developer for the Demant Team at William Demant, developing high-performance and reliable web applications, including a CRM application, using Spring Web Flux.</li>
<li>Developed an automation tool tailored for automated testing of report management processes. This tool streamlined the testing of various report functionalities, ensuring accuracy and reliability in managing and validating report data.</li>
<li>Designed and implemented multiple microservices to process large datasets from Excel files, consisting of hundreds of thousands of rows, and efficiently storing them in a database.</li>        
    <li>Utilized MongoDB to store and retrieve data with sub-millisecond response times, optimizing code for enhanced performance.</li>
          <li>Established communication protocols between microservices to exchange reliable information and facilitate seamless data flow.</li>
          <li>Used SonarQube to ensure coding standards, actively engaged in peer reviews, and ensured alignment with team standards.</li>
          <li>Implemented Continuous Integration/Continuous Deployment (CI/CD) pipelines using Jenkins and GitLab CI, automating the build, test, and deployment processes to ensure rapid and reliable delivery of software updates.</li>
        <li>Utilized agile methodologies for development, ensuring efficient and iterative progress towards project goals.</li>
        </ul>
      </div>

      </CardContainer>

      <CardContainer>
      <div className="experience-card">
        <h4 className="job-title">Intern</h4>
       <p>DRDL | May 2019</p>
        <ul className='bullet-list'>
        <li>Spearheaded the development of Message Level Simulator using web technologies, incorporating React.js for front-end and Node.js for back-end development, which resulted in a reliable and scalable solution for monitoring the health of systems in use.</li>
<li>Successfully implemented WebSocket’s as the protocol for Message Level Simulator, which led to 30% increase in system response time and 40% improvement in data transfer speed, ensuring real time communication between systems.</li>
<li>Executed end-to-end tests for Message Level Simulator, reducing downtime by 60%.</li>
<li>Integrated Message Level Simulator with existing systems, increasing data accuracy by 50% and system performance by 20%.</li>

</ul>
      
</div>
      </CardContainer>
    </div>
  );
};

export default Experience;










