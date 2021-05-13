import React from "react"

import * as styles from "./navigation.module.css"
import {Link} from "gatsby";

const links = [
    {url: "/", text: "Home"},
    {url: "/boards", text: "Boards"},
];

const Navigation = () => {
    return (
        <nav>
            <ul className={styles.navigationList}>
            {links.map(link => (
                <li className={styles.navigationItem}>
                    <Link className={styles.navigationItemText} to={link.url}>{link.text}</Link>
                </li>
            ))}
            </ul>
        </nav>

    )
};

export default Navigation;
