import SharedProfile from './SharedProfile';
import FolderProfile from './FolderProfile';
import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';

export interface ProfileData {
  profileImageSource: string;
  image_source: string;
  email: string;
  data: any[];
}

export interface HeaderProps {
  isShared?: boolean;
  user?: ProfileData;
}

export default function Header({ isShared, user }: HeaderProps) {
  return (
    <header className={isShared ? styles.headerShared : styles.headerFolder}>
      <div className={styles.headerLogo}>
        <Link href="/">
          <Image className={styles.logo} src="/images/logo.png" width={132} height={24} alt="Linkbrary로고" />
        </Link>
      </div>
      {<SharedProfile isShared={true} userData={user} /> || <FolderProfile isShared={false} userData={user} />}
    </header>
  );
}
