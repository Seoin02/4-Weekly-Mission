import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Section from '../src/components/Section/Section';
import ModalPortal from '../src/components/Portal';

export default function Folder() {
  return (
    <ModalPortal>
      <Header style="headerFolder" />
      <Section style="sectionFolder" />
      <Footer />
    </ModalPortal>
  );
}
