import styles from "./Navbar.module.css";

interface HamburgerMenuProps {
  isOpen: boolean;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen }) => {
  const hamburgerClassName = isOpen ? `${styles.hamburger} ${styles.open} ${styles.fadeIn}` : styles.hamburger;
  return ( 
    <div className={hamburgerClassName}>
         
      <ul className={styles.menuList}>
        <li>
          <a href="/">
            <span role="img" aria-label="about me">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
            About me
          </a>
        </li>
        <li>
          <a href="/">
            <span role="img" aria-label="projects">&#x1f4b8;</span>
            Projects
          </a>
        </li>
        <li>
          <a href="/">
            <span role="img" aria-label="hire me">&#x1f4e9;</span>
            Hire me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
