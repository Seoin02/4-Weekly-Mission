import React, { useState } from 'react';
import dayjs from 'dayjs';
import { getElapsedTime } from '../../utils/getElapsedTime';
import styles from './Card.module.css';
import Link from 'next/link';
import { StringOrNumber } from '../Input/InputType';

export interface FolderButtonData {
  created_at: string;
  favorite: boolean;
  id: number;
  link: {
    count: number;
  };
  name: string;
  user_id: number;
}
export interface FolderData {
  id: StringOrNumber;
  url: string;
  title: string;
  description: string;
  created_at: string;
  updated_at: null;
  image_source: string;
  folder_id: number;
}

export interface LinkData {
  id: StringOrNumber;
  url: string;
  title: string;
  description: string;
  createdAt: string;
  imageSource: string;
  name?: string;
}

export interface CardProps {
  id: StringOrNumber;
  url: string;
  imageSource: string;
  title: string;
  createAt: string;
  description: string;
}

export const formatDataForCard = (props: FolderData | LinkData): CardProps => {
  const imageSource = 'image_source' in props ? props.image_source : props.imageSource;
  const createAt = 'created_at' in props ? props.created_at : props.createdAt;

  return {
    id: props.id,
    url: props.url,
    imageSource,
    title: props.title,
    createAt,
    description: props.description,
  };
};

const PopoverMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className={styles.popoverMenu}>
      <div className={styles.popoverDelete}>삭제하기</div>
      <div className={styles.popoverAddToFolder}>폴더에 추가</div>
    </div>
  );
};

const Card = ({ data }: { data: CardProps[] }) => {
  const [popoverMenuOpen, setPopoverMenuOpen] = useState(false);

  const handleOpenPopoverMenu = () => {
    setPopoverMenuOpen(true);
  };

  const handleClosePopoverMenu = () => {
    setPopoverMenuOpen(false);
  };

  return (
    <>
      {!data || data.length === 0 ? (
        <div className={styles.mainDefaultText}>저장된 링크가 없습니다.</div>
      ) : (
        data.map(data => (
          <div key={data.id} className={styles.card}>
            <Link href={data.url || ''}>
              <img className={styles.cardImage} src={data.imageSource ?? '/images/noImage.png'} alt={data.title} />
            </Link>
            <div className={styles.cardTextArea}>
              <div className={styles.uploadTime}>
                <div>{getElapsedTime(data.createAt)} </div>
                <button type="button" key={data.id} onClick={handleOpenPopoverMenu}>
                  <img src="/images/kebab.png" width={21} height={17} alt="팝오버 아이콘" />
                </button>
                {popoverMenuOpen && <PopoverMenu onClose={handleClosePopoverMenu} />}
              </div>
              <Link className={styles.link} href={data?.url || ''}>
                <div className={styles.cardText}>{data.description}</div>
                <div className={styles.uploadDate}>{dayjs(data.createAt).format('YYYY.MM.DD')}</div>
              </Link>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Card;
