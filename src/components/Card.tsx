import styles from './card.module.css';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard'

export default function Card({venueName, imgSrc,description}: 
    {venueName:string, imgSrc:string, description:string}){
    return (
        <InteractiveCard contentName={venueName}>
        <div >
       
                <Image 
                src={imgSrc}
                alt={venueName} 
                width={350} 
                height={200}
                style={{ objectFit: "cover" }}  
                />
           

            <h3 className={styles.name}>{venueName}</h3>
            <p className={styles.description}>{description}</p>
        </div>
        </InteractiveCard>
    );
}