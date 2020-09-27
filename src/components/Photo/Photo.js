import React from 'react'
import classes from './Photo.module.css'

const photo = (props) => {
    return <img className={classes.PostPhoto} src={props.src} alt=""/>
}

export default photo;