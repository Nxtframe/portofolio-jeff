import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {


    return ( 
        <>
        
        <nav className={styles.navbar}>
            <div className={styles.navbaritems}>
            <a href='#'>Test</a>
            <a href='#'>Test</a>
            <a href='#'>Test</a>
            <a href='#'>Test</a>
            <a href='#'>Test</a>
            </div>
            
        </nav>
        </>
     );
}
 
export default Navbar;