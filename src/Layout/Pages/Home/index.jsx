import React from 'react';
import Page from '../../../components/Page'
import styles from './styles.module.scss'
import textBackground from '../../../assets/images/abstract2.png'

const Home = ({ changed }) => {

    return (
        <Page className={styles.home} changed={changed}>
            <h1
            style={{backgroundImage: `url(${textBackground})`}}>
                Ishay Maya <span> Web Developer</span>
            </h1>
        </Page>
    )
}

export default Home

