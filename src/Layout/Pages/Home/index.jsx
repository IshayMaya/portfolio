import React, { useEffect, useState } from 'react';
import Page from '../../../components/Page'
import styles from './styles.module.scss'
import letterBackground from '../../../assets/images/abstract.jpg'

const Home = ({ tabs, currentTab, disableClick, changed }) => {

    return (
        <Page className={styles.home} changed={changed}>
            <h1
            style={{backgroundImage: `url(${letterBackground})`}}>
                Ishay Maya <span> Web Developer</span>
            </h1>
        </Page>
    )
}

export default Home

