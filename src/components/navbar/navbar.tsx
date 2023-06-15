import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars,  faTimes } from '@fortawesome/free-solid-svg-icons';
import HamburgerMenu from './hamburgermenu';

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
                    <a href='#' className={styles.navbaritem} onClick={() => handleToggle()}><FontAwesomeIcon icon={isSwitchOn ? 'times' : 'bars'} size='2x' />
                   </a>

                    {isSwitchOn && <HamburgerMenu isOpen={isSwitchOn} />}
                   

                </div>

            </nav>
        </>
    );
}

export default Navbar;