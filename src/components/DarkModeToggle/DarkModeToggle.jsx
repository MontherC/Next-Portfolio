"use client"

import React, { useContext } from "react";
import styles from "./DarkModeToggle.module.css";
import Image from "next/image";
import moon from 'public/moon.png';
import sun from 'public/sun.png';
import { ThemeContext } from "@/context/ThemeContext";

const DarkModeToggle = () =>{
    
    const {toggle, mode} = useContext(ThemeContext);

    return(
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>
                <Image src={moon} alt="" height={15} width={15}/>
            </div>
            <div className={styles.icon}>
                <Image src={sun} alt="" height={15} width={15} />
            </div>
            <div className={styles.ball} style={mode === "light" ? {left:"2px"} : {right:"2px"} }/>

        </div>
    )
}

export default DarkModeToggle;