import React, { useEffect, useState } from 'react';
import Page from '../../../components/Page'
import workService from '../../../services/workService'
import styles from './styles.module.scss'
import { FaReact } from 'react-icons/fa';


const Works = ({changed}) => {
    const [works, setWorks] = useState([])
    const [openWork, setOpenWork] = useState(null)

    useEffect(() => {
        const myWorks = workService.getWorks()
        setWorks(myWorks)
    }, [])

    const toggleWork = (ev, index = null) => {
        if (typeof ev === 'object') {
            ev.preventDefault()
            ev.stopPropagation()
        }
        const nextIndex = (openWork === index || index === null) ? null : index
        setOpenWork(nextIndex)
    }

    const openLink = url => {
        window.location = url
    }

    return (
        <Page className={styles.works} changed={changed} onClick={toggleWork}>
            {
                works.map(({id, title, description, tags, link, imgUrl}, i) => {
                    const className = (openWork === i) ? styles.open : styles.closed
                    const style = (openWork === null) ? {} : (openWork === i) ? {width: '100%'} : {width: 0}
                    return (
                        <div 
                        key={id}
                        // className={styles.work}
                        style={style}
                        className={`${styles.work} ${className}`}
                        // className={`${styles.work} ${openWork === i ? styles.open : styles.closed}`}
                        onClick={ev => toggleWork(ev,i)}>
                            <div 
                            style={{backgroundImage: `url('${imgUrl}')`}}
                            className={styles.img}></div>
                            <div className={styles.details}>
                                <div className={styles.top}>
                                    <h3>{title}</h3>
                                    <h4>{description}</h4>
                                    <ul>
                                    {
                                        tags.map((t, index) => <li key={'tag-' + index}><FaReact />{t}</li>)
                                    }
                                </ul>
                                </div>
                                <footer>
                                    <button onClick={() => openLink(link)}>Open App</button>
                                    <button onClick={ev => toggleWork(ev,i)}>Close</button>
                                </footer>
                            </div>
                        </div>
                    )
                })
            }
        </Page>
    )
}

export default Works