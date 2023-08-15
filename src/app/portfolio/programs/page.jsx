import React from "react";
import styles from "./page.module.css"
import Button from "@/components/Button/Button";
import Image from "next/image";


export const metadata = {
    title: 'Programs',
    description: 'Programs page',
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
                    src="https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
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
                    src="https://images.pexels.com/photos/117729/pexels-photo-117729.jpeg?auto=compress&cs=tinysrgb&w=1600" />
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
                    src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
                    </div>

            </div>
            

        </div>
    )
}

export default Category