import React from 'react';
import Page from '../../../components/Page'
import styles from './styles.module.scss'
import { FaReact } from 'react-icons/fa';
import profileImage from '../../../assets/images/profile3.jpg'

const About = ({changed}) => {
    return (
        <Page className={styles.about} changed={changed}>
            <section className={styles.person}>
                <img src={profileImage} alt="Ishay"/>
                <div className={styles.content}>
                    <h2>Full Stack Developer</h2>
                    <h3>B.A - economics & Data Analist</h3>
                </div>
            </section>
                <ul>
                    <li><FaReact />Javascript. </li>
                    <li><FaReact />Single Page Application (SPA) using Advanced Frameworks: React.js, Vue.js. </li>
                    <li><FaReact />State Management using Redux, Vuex. </li>
                    <li><FaReact />HTML5, CSS3, SASS, ElementUI. </li>
                    <li><FaReact />Server side with Node.js, Express.js, MongoDB, SQL.</li>
                    <li><FaReact />Using REST API, AJAX, Asynchronous programming. </li>
                </ul>
        </Page>
    )
}

export default About