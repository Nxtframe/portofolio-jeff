import { FunctionComponent } from "react";
import styles from "./Styledmenu.module.css"

interface StyledMenuProps {
    isOpen: boolean;
    onClick:() => void;
}

const StyledMenu: FunctionComponent<StyledMenuProps> = ({ isOpen, onClick }) => {
    const _linebutton1Classes = isOpen ? `${styles.linebutton} ${styles.linebutton1after}`: `${styles.linebutton}`;
    const _linebutton2Classes = isOpen ? `${styles.linebutton} ${styles.linebutton2after}`: `${styles.linebutton}`;
    const _linebutton3Classes = isOpen ? `${styles.linebutton} ${styles.linebutton3after}`: `${styles.linebutton}`;

    return (
        <>
            <div className={styles.buttoncontainer} onClick={onClick}>
                <div className={_linebutton1Classes }/>
                <div className={_linebutton2Classes}/>
                <div className={_linebutton3Classes}/>
            </div>
        </>
    );
}

export default StyledMenu;