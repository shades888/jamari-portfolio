import React, {useState} from 'react';
import { HiMenuAlt4, HiX} from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';


//import MusicPlayer from './MusicPlayer.jsx';

/*the ul is going to loop through all the elements I 
need to have in my navigation bar, 
1st dynamic block of code = {[]}
2nd create an array
*/
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
        {/* <div className="app__navbar-music-player">
    <MusicPlayer />
  </div> */}
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        
        
      </ul>




      <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          { toggle && (
              <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
              >
                <HiX onClick={() => setToggle(false)} />
                <ul>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                  <li key={item}>
                   
                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}
                    </a>
                  </li>
        ))}
        </ul>
              </motion.div>
            )}
      </div>
    </nav>
  );
};

export default Navbar;