import React from 'react';
import './styles.scss'


const Page = ({children, className, changed, style, onClick}) => {
    return (
        <section 
        style={style}
        onClick={onClick}
        className={`page ${className} ${changed ? 'fadeout' : ''}`}>
            {children}
        </section>
    )
}

export default Page