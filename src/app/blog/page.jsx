import React from "react";
import styles from './page.module.css'
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(){
    const res = await fetch('http:localhost:3000/api/posts', {
        next: {revalidate: 10},
    });
  
    if(!res.ok) {
      return notFound();
    }
  
    return res.json();
  }

  export const metadata = {
    title: 'Blog',
    description: 'Blog page',
  };

const Blog = async ()=>{

    const data = await getData();
    return (
        <div className={styles.mainContainer}>
            {data.map(item=>(
            <Link href={"/blog/"+item._id} className={styles.container} key={item.id}>
                <div className={styles.imgContainer}>
                    <Image
                        src={item.img}
                        alt=""
                        width={400}
                        height={250}
                        className={styles.img}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>{item.title}</h1>
                    <h4 className={styles.author}>By: {item.author}</h4>
                    <p className={styles.desc}> {item.desc}</p>
                </div>
            </Link>
            ))}
        </div>
    )
}

export default Blog 