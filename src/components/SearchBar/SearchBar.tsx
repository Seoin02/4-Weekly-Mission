import search from './images/search.svg';
import styles from './SearchBar.module.css';

function SearchBar() {
  return (
    <main className={styles.mainShared}>
      <div className={styles.searchBar}>
        <img src={search} alt="돋보기 아이콘" />
        <input type="text" placeholder="링크를 검색해 보세요"></input>
      </div>
    </main>
  );
}

export default SearchBar;
