import React from 'react';
import styles from './Section.module.css';
import FolderInfo from './FolderInfo';
import LinkBar from './LinkBar';
import FilterBar from '../FilterBar/FilterBar';
import SearchBar from '../SearchBar/SearchBar';

export default function Section({ isShared }: { isShared?: boolean }) {
  return (
    <>
      <section className={isShared ? styles.sectionShared : styles.sectionFolder}>
        <div className={styles.title}>{isShared ? <FolderInfo /> : <LinkBar />}</div>
      </section>
      {!isShared && (
        <>
          <SearchBar />
          <FilterBar />
        </>
      )}
    </>
  );
}
