import React from "react";
import styles from './page.module.css'
import Image from "next/image";
import {notFound} from "next/navigation";
import { Metadata } from "next";

async function getData(id){
    const res = await fetch(`http:localhost:3000/api/posts/${id}`, {
        next: {revalidate: 10},
    });
  
    if(!res.ok) {
        return notFound();
    }
  
    return res.json();
}


export async function generateMetadata({params}){
    const post = await getData(params.id)
    return{
        title: post.title,
        desc: post.desc,
    }
}


const BlogPost = async ({params})=>{
    const data = await getData(params.id);
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>
                        {data.title}
                    </h1>
                    <div className={styles.author}>
                        <Image
                            src='https://images.pexels.com/photos/13087560/pexels-photo-13087560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            alt=''
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>{data.author}</span>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <Image 
                        src= {data.img}
                        alt=''
                        fill={true}
                        className={styles.img}
                        />
                </div>
            </div>
                <div className={styles.content}>
                    <p className={styles.text}>
                        {data.content}
                    </p>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
    )
}

export default BlogPost