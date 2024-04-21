import React from 'react'
import styles from './style.module.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div>

            <div className={styles.containerNavSide}>
                <div >
                    <ul className={styles.containerUl}>
                        <li><NavLink to={"/main"}>home</NavLink></li>
                        <li><NavLink to={"/main/music"}>music</NavLink></li>
                        {/* <li><NavLink to={"/premium"}>premium</NavLink></li> */}
                        <li><NavLink to={"/main/contact"}>contact us</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
