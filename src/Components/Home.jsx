import profileImage from '../Assets/IMG_8569.jpeg';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import '../Styles/Home.css'; // Import the Profile CSS
import Typical from 'react-typical'; 

export default function Home() {
  const nameControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    nameControls.start({ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } });
    imageControls.start({ opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } });
  }, [nameControls, imageControls]);

  return (
    <div className="profile-container" id='home'>
      <div className="profile">
        <motion.img
          src={profileImage}
          alt="Profile"
          className="profile-image"
          style={{ opacity: 0, x: -50 }}
          animate={imageControls}
        />
        <motion.h1 className="name" style={{ opacity: 0, y: 50 }} animate={nameControls}>
        Hello, I am <span>Sri Chanakya Yennana</span>
        </motion.h1>
        <div className="professions bigger-profession">
          <motion.h1 style={{ opacity: 0, y: 50 }} animate={nameControls} className="profession">
            <Typical
              steps={['🧑‍💻 Full-Stack Developer', 1000,'☕️ Java Developer', 1000,'📱 iOS Developer', 1000]}
              loop={Infinity}
              wrapper="span"
            />
          </motion.h1>
          </div>
        <motion.p
          className="description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
        >
           
                With nearly two years of experience in software development and design, my current passion lies in crafting web applications. I take pleasure in creating user-friendly interfaces and implementing innovative solutions to ensure smooth and enjoyable user experiences. Keeping myself updated with the latest technologies is essential, 
                and I find joy in merging creativity with technical expertise in my projects.
                
        </motion.p>
        <div className="buttons">
          <motion.button
            className="hire-button"
            whileHover={{ scale: 1.1, boxShadow: '0 0 8px rgba(255, 0, 0, 0.6)' }}
            whileTap={{ scale: 0.9 }}
          >
            <a href='mailto:srichanakyayennana@gmail.com?subject=Celebrating Your Success: Welcome Aboard! '>Hire Me</a>
          </motion.button>
          <motion.button
            className="contact-button"
            whileHover={{ scale: 1.1, boxShadow: '0 0 8px rgba(71, 122, 255, 0.6)' }}
            whileTap={{ scale: 0.9 }}
          ><a href='#contact'>
            Contact Me</a>
          </motion.button>
          
          <motion.button
            className="Resume-button"
            whileHover={{ scale: 1.1, boxShadow: '0 0 8px rgba(11, 102, 35, 0.6)' }}
            whileTap={{ scale: 0.9 }}
          ><a href='/Sri_Chanakya_Yennana_resume.pdf' download='Sri Chanakya Yennana Resume' target='_blank' rel='noreferrer'>
            Resume</a>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
