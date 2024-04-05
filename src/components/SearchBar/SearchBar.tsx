import search from './images/search.svg';
import styles from './SearchBar.module.css';
import Image from 'next/image';

function SearchBar() {
  return (
    <section className={styles.mainShared}>
      <div className={styles.searchBar}>
        <Image src="/images/search.svg" width={16} height={16} alt="돋보기 아이콘" />
        <input type="text" placeholder="링크를 검색해 보세요" />
      </div>
    </section>
  );
}

export default SearchBar;
