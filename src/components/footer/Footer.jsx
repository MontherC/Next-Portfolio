import React from "react";
import styles from './footer.module.css'
import Image from "next/image";
import Link from "next/link";


const Footer = () =>{
    return (
        <div className={styles.container}>
            <div>2023 MontherCabas. All rights reserved.</div>
            <div className={styles.social}>
                <Link 
                href="https://www.github.com/MontherC"
                target="_blank">
                    <Image src="/Github.png" width={40} height={40} className={styles.icon} alt="MontherCabas Github"/>
                </Link>
            </div>
        </div>
    )
}

export default Footer