import { useState, useEffect } from 'react';
import { axiosInstance } from '../../utils/axiosInstance';
import Card from '../Card/Card';
import styles from './CardList.module.css';
import { LinkData } from '../apis/useGetLink';

export default function CardList() {
  const [cardData, setCardData] = useState<LinkData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('sample/folder');
        setCardData(response.data.folder.links);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className={styles.mainSharedCard}>
      <div className={styles.cardList}>{cardData !== null && <Card data={cardData} />}</div>
    </main>
  );
}
