import React from "react";
import styles from "./page.module.css"
import Button from "@/components/Button/Button";
import Image from "next/image";


export const metadata = {
    title: 'Photos',
    description: 'Photos page',
  };

const Photos = ({params})=>{
    console.log(params)
    return(
        <div className={styles.container}>
            <h1 className={styles.catTitle}>Photos</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}> This is an example.</p>
                    <Button text="See More" url="#"/>
                </div>
                <div className={styles.imgContainer}>
                    <Image 
                    className={styles.img}
                    fill={true} 
                    alt=""
                    src="https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                </div>

            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}> This is an example.</p>
                    <Button text="See More" url="#"/>
                </div>
                <div className={styles.imgContainer}>
                    <Image 
                    className={styles.img}
                    fill={true} 
                    alt=""
                    src="https://images.pexels.com/photos/1714202/pexels-photo-1714202.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>

            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}> This is an example.</p>
                    <Button text="See More" url="#"/>
                </div>
                <div className={styles.imgContainer}>
                    <Image 
                    className={styles.img}
                    fill={true} 
                    alt=""
                    src="https://images.pexels.com/photos/1714341/pexels-photo-1714341.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                    </div>

            </div>
            

        </div>
    )
}

export default Photos