import React from "react";
import styles from './page.module.css'
import Link from "next/link";

export const metadata = {
    title: 'Portfolio',
    description: 'Portfolio page',
  };

const Portfolio = ()=>{
    return (
        <div className={styles.container}>
            <h1 className={styles.selectTitle}>Choose a project</h1>
            <div className={styles.items}>
                <Link href="/portfolio/photos" className={styles.item}>
                    <span className={styles.title}>Photos</span>
                </Link>
                <Link href="/portfolio/websites" className={styles.item}>
                    <span className={styles.title}>Websites</span>
                </Link>
                <Link href="/portfolio/programs" className={styles.item}>
                    <span className={styles.title}>Programs</span>
                </Link>
            </div>
        </div>
    )
}

export default Portfolio 