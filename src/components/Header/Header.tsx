import SharedProfile from './SharedProfile';
import FolderProfile from './FolderProfile';
import Image from 'next/image';
import logo from './images/logo.png';
import styles from './Header.module.css';
import Link from 'next/link';

export interface ProfileData {
  profileImageSource: string;
  image_source: string;
  email: string;
  data: any[];
}

export interface HeaderProps {
  style: string;
  user?: ProfileData;
}

export default function Header({ style, user }: HeaderProps) {
  return (
    <header className={styles[style]}>
      <div className={styles.headerLogo}>
        <Link href="/">
          <Image className={styles.logo} src={logo} alt="Linkbrary로고" />
        </Link>
      </div>
      {style === 'headerShared' && user ? <SharedProfile userData={user} /> : <FolderProfile userData={user} />}
    </header>
  );
}
