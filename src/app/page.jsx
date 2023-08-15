import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/Button/Button'



async function getData(){
  const res = await fetch('example.notexist');

  if(!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}



export default function Home() {
  return (
    <div  className={styles.container}>
      <div className={styles.item}>
        <h1  className={styles.title}>Welcome to my imaginarium.</h1>
        <p  className={styles.desc}>Where my ideas come to life.</p>
        <Button url="portfolio" text="See My Work"/>
      </div>
      <div className={styles.item}></div>
      <Image src={Hero} alt="" className={styles.img}/>
    </div>
  )
}
