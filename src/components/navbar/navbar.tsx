import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import HamburgerMenu from './hamburgermenu';
import StyledMenu from './styledmenu';

library.add(faBars, faTimes);

const Navbar = () => {
  const [isSwitchOn, setSwitchOn] = useState(false);

  const handleToggle = () => {
    setSwitchOn(!isSwitchOn);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbaritems}>
          <a
            className={`${styles.navbaritem} ${isSwitchOn ? styles.active : ''}`}
            
          >
            {/* <FontAwesomeIcon
              icon={isSwitchOn ? faTimes : faBars}
              size="2x"
              className={`${styles.toggleIcon} ${isSwitchOn ? styles.rotate : ''}`}
            /> */}
            
          </a>
          {isSwitchOn && <HamburgerMenu isOpen={isSwitchOn} />}
          <StyledMenu isOpen={isSwitchOn } onClick={handleToggle}></StyledMenu>
        </div>
        
      </nav>
    </>
  );
};

export default Navbar;
