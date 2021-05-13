import * as React from "react"
import Layout from "../components/layout";
import * as styles from "./index.module.css"
import icon from '../images/icon.png'

const Index = () => {
    return (
        <Layout title="Home">
            <p>Welcome to gatsby-duino, a prototype project, nothing interesting here.</p>
            <img src={icon} alt="gatsby logo" className={styles.logo} />
        </Layout>
    )
};

export default Index;