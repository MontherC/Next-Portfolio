import React from "react";
import styles from './page.module.css'
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
    title: 'About',
    description: 'About page',
  };

const About = ()=>{
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/16646219/pexels-photo-16646219/free-photo-of-view-of-traditional-residential-buildings-and-hotels-in-paris-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                fill={true} 
                alt =""
                className={styles.img}
                />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>
                        A talented mogul
                    </h1>
                    <h2 className={styles.imgDesc}>Powering innovation</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title} >Who am I?</h1>
                    <p className={styles.desc}>A man with a passion to create the best websites on the planet.</p>
                </div>
                <div className={styles.item}>
                <h1 className={styles.title} >What do I do?</h1>
                <p className={styles.desc}>Learn and implement new technologies to create interesting and new ways to explore the world.   <br />
                <br /></p>
              
                <Button url="contact" text="Contact"/>
                </div>
            </div>
        </div>
    )
}

export default About 