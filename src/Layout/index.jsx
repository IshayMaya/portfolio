import React, { useState, useEffect } from 'react';
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
    const [touchLocation, setTouchLocation] = useState({})

    useEffect(() => {
        const firstChar = tabs[currentTab].name.charAt(0)
        if ( firstChar !== charToShow) setCharToShow(firstChar)
    }, [setCharToShow, currentTab])

    useEffect(() => {
        const {start, end} = touchLocation
        if (start && end ) {
            if (Math.abs(start - end) > 30) {
                const isLeft = end > start;
                if (isLeft && currentTab > 0) setCurrectTab(i => i - 1)
                if ( !isLeft && currentTab < (tabs.length - 1)) setCurrectTab(i => i + 1)
            }
            setTouchLocation({})
        }
    }, [touchLocation, setTouchLocation])

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

    const handleTouchStart = ev => {
        const [{ pageX }] = ev.touches
        setTouchLocation(l => ({...l, start: pageX}))
    }
    const handleTouchEnd = ev => {
        const [{ pageX }] = ev.changedTouches
        setTouchLocation(l => ({...l, end: pageX}))
    }

    const disableClick = bool => {
        setIsDisabled(bool)
    }

    const CurrentPage = tabs[currentTab].cmp

    return (
        <section
        className={styles.layout} style={{pointerEvents: isDisabled ? 'none' : 'auto'}}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}>
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
        </section>
    )
}

export default Layout