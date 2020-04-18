import React from 'react';
import styles from './styles.module.scss';
import { FaLinkedin, FaGithubSquare, FaGoogle } from 'react-icons/fa';


const contactWays = [
    { name: 'linkdein', icon: FaLinkedin, color: '#0077b5', link: 'https://www.linkedin.com/in/ishay-maya-395a45184/' },
    { name: 'github', icon: FaGithubSquare, color: '#eeeeee', link: 'https://github.com/IshayMaya' },
    { name: 'gmail', icon: FaGoogle, color: '#dc4d41', link: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ssaymama@gmail.com'},
]


const Nav = ({onTabClick, currentTab, tabs}) => {

    const tabsToShow = tabs.map((tab, i) => {
        const active = (currentTab === i)
        return (
            <a
            className={active ? styles.active : ''}
            href="#" 
            key={tab.name + '-' + i} 
            onClick={() => onTabClick(i)}>{tab.name}</a>
        )
    })

    const contactWaysToShow = contactWays.map(({name, icon: Icon, link, color}, i) => {
        return (
            <a 
            key={'cWay-' + i}
            href={link}>
                <Icon style={{ fill: color }}/>
            </a>
        )
    })
    
    return (
        <nav className={styles.nav}>
            <section>{tabsToShow}</section>
            <section>{contactWaysToShow}</section>
        </nav>
    )
}

export default Nav