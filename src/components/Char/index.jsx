import React from 'react';
import  './styles.scss'
import charBackground from '../../assets/images/abstract2.png'

const Char = ({children, changed}) => {
    return (
        <h1
        key={children}
        className={`char${changed ? ' exit' : ''}`}
        style={{backgroundImage: `url(${charBackground})`}}>
            { children }
        </h1>
    )
}

export default Char