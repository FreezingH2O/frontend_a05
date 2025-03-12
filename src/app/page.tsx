import Image from "next/image";
import styles from "./page.module.css";
import Banner from '@/components/Banner';
import Card from '@/components/Card';

export default function Home() {
  const data1 = {
    venueName: "The Bloom Pavilion", 
    imgSrc: "/img/bloom.jpg", 
    description: "A charming garden venue surrounded by lush floral landscapes, perfect for outdoor weddings and intimate celebrations. Experience the elegance of nature combined with modern amenities."
  }

  const data2 = {
    venueName: "Spark Space", 
    imgSrc: "/img/sparkspace.jpg", 
    description: "A vibrant and contemporary event space designed for corporate gatherings, workshops, and social events. Featuring state-of-the-art facilities and dynamic interiors, Spark Space ignites creativity and connection."
  }

  const data3 = {
    venueName: "The Grand Table", 
    imgSrc: "/img/grandtable.jpg", 
    description: "A sophisticated dining hall with luxurious décor, ideal for gala dinners, receptions, and private banquets. Indulge in an exquisite culinary experience in an atmosphere of grandeur and refinement."
  }
  
  return (
    <main className={styles.main}>
      <Banner/>
      <div className={styles.container}>

        <Card {...data1}/>
        <Card {...data2}/>
        <Card {...data3}/>
        
      </div>
    </main>
  );
}
