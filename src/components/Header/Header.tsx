import SharedProfile from './SharedProfile';
import FolderProfile from './FolderProfile';
import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header({ isShared }: { isShared: boolean }) {
  return (
    <header className={isShared ? styles.headerShared : styles.headerFolder}>
      <div className={styles.headerLogo}>
        <Link href="/">
          <Image className={styles.logo} src="/images/logo.png" width={132} height={24} alt="Linkbrary로고" />
        </Link>
      </div>
      {isShared ? <SharedProfile /> : <FolderProfile />}
    </header>
  );
}
