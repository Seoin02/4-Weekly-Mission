import { useState, useEffect } from 'react';
import Card, { CardProps, LinkData, formatDataForCard } from '../Card/Card';
import styles from './CardList.module.css';
import fetchCardData from '../apis/fetchCardData';
import { axiosInstance } from '@/src/utils/axiosInstance';

export default function CardList({ isShared }: { isShared: boolean }) {
  const [cardData, setCardData] = useState<CardProps[]>([]);
  const [folderData, setFolderData] = useState<CardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCardData();
        const newCardData: CardProps[] = data.folder.links.map((link: LinkData) => formatDataForCard(link));
        setCardData(newCardData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axiosInstance.get('users/4/folders/links');
        setFolderData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className={styles.mainSharedCard}>
      <div className={styles.cardList}>{cardData.length > 0 && <Card data={isShared ? cardData : folderData} />}</div>
    </main>
  );
}
