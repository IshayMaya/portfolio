import React from 'react';
import styles from './styles.module.scss'

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
    
    return (
        <nav className={styles.nav}>
            {tabsToShow}
        </nav>
    )
}

export default Nav