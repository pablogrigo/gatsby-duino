import React from "react"

import * as styles from "./layout.module.css"
import Navigation from "./navigation";
import Footer from "./footer";

const Layout = ({title, children}) => {
    return (
        <main className={styles.page}>
            <title>{title}</title>
            <Navigation />
            <div className={styles.container}>
                <h1>{title}</h1>
                {children}
            </div>
            <Footer />
        </main>
    )
};

export default Layout;
