import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footerShared}>
      <div className={styles.footerDate}>
        <p>©codeit - 2023</p>
      </div>
      <div className={styles.footerLink}>
        <Link href="/privacy">
          <p>Privacy Policy</p>
        </Link>
        <Link href="/faq">
          <p>FAQ</p>
        </Link>
      </div>
      <div className={styles.footerLogo}>
        <Image src="/images/facebook.svg" width={20} height={20} alt="페이스북 로고" />
        <Image src="/images/twitter.svg" width={20} height={20} alt="트위터 로고" />
        <Image src="/images/youtube.svg" width={20} height={20} alt="유튜브 로고" />
        <Image src="/images/instagram.svg" width={20} height={20} alt="인스타그램 로고" />
      </div>
    </footer>
  );
}
