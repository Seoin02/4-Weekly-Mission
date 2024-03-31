import Header from '../src/components/Header/Header';
import Section from '../src/components/Section/Section';
import CardList from '../src/components/CardList/CardList';
import Footer from '../src/components/Footer/Footer';
import SearchBar from '../src/components/SearchBar/SearchBar';

export default function Shared() {
  return (
    <>
      <Header style="headerShared" />
      <Section style="sectionShared" />
      <SearchBar />
      <CardList />
      <Footer />
    </>
  );
}
