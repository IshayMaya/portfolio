import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.svg'
import styles from './styles.module.scss'
import Nav from './Nav'
import Home from './Pages/Home'
import About from './Pages/About'
import Works from './Pages/Works'
import Char from '../components/Char'


const tabs = [
    { name: 'Home', cmp: Home },
    { name: 'Works', cmp: Works },
    { name: 'About', cmp: About },
]


const Layout = () => {
    const [currentTab, setCurrectTab] = useState(0)
    const [isDisabled, setIsDisabled] = useState(false)
    const [charToShow, setCharToShow] = useState('')
    const [tabChanged, setTabChanged] = useState(false)

    useEffect(() => {
        const firstChar = tabs[currentTab].name.charAt(0)
        if ( firstChar !== charToShow) setCharToShow(firstChar)
    }, [setCharToShow, currentTab])

    const handleTabClick = index => {
        if ((currentTab !== index) && !isDisabled) {
            disableClick(true)
            setTabChanged(true)
            setTimeout(() => {
                setTabChanged(false)
                disableClick(false)
                setCurrectTab(index)
            }, 1000);
        }
    }

    const disableClick = bool => {
        setIsDisabled(bool)
    }

    const CurrentPage = tabs[currentTab].cmp

    return (
        <section className={styles.layout} style={{pointerEvents: isDisabled ? 'none' : 'auto'}}>
            <Nav 
            tabs={tabs}
            onTabClick={handleTabClick} 
            currentTab={currentTab}/>
            <section className={styles.bodyContainer}>
                <CurrentPage 
                tabs={tabs}
                currentTab={currentTab}
                changed={tabChanged}
                disableClick={disableClick}/>
                <Char changed={tabChanged}>{charToShow}</Char>
            </section>
           
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </section>
    )
}

export default Layout