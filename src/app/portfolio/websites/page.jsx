import React from "react";
import styles from "./page.module.css"
import Button from "@/components/Button/Button";
import Image from "next/image";


export const metadata = {
    title: 'Websites',
    description: 'Websites page',
  };

const Category = ({params})=>{
    console.log(params)
    return(
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}> gafagag</p>
                    <Button text="See More" url="#"/>
                </div>
                <div className={styles.imgContainer}>
                    <Image 
                    className={styles.img}
                    fill={true} 
                    alt=""
                    src="https://images.pexels.com/photos/16741654/pexels-photo-16741654/free-photo-of-sea-landscape-man-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
                </div>

            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}> gafagag</p>
                    <Button text="See More" url="#"/>
                </div>
                <div className={styles.imgContainer}>
                    <Image 
                    className={styles.img}
                    fill={true} 
                    alt=""
                    src="https://images.pexels.com/photos/14583275/pexels-photo-14583275.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                    </div>

            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}> gafagag</p>
                    <Button text="See More" url="#"/>
                </div>
                <div className={styles.imgContainer}>
                    <Image 
                    className={styles.img}
                    fill={true} 
                    alt=""
                    src="https://images.pexels.com/photos/11871404/pexels-photo-11871404.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
                    </div>

            </div>
            

        </div>
    )
}

export default Category