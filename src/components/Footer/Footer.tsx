import facebook from './images/akar-icons_facebook-fill.svg';
import twitter from './images/akar-icons_twitter-fill.svg';
import youtube from './images/akar-icons_youtube-fill.svg';
import instagram from './images/ant-design_instagram-filled.svg';
import styles from './Footer.module.css';
import Link from 'next/link';

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
        <img src={facebook} alt="페이스북 로고" />
        <img src={twitter} alt="트위터 로고" />
        <img src={youtube} alt="유튜브 로고" />
        <img src={instagram} alt="인스타그램 로고" />
      </div>
    </footer>
  );
}
