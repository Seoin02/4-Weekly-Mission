import { useState, useEffect } from 'react';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Section from '../src/components/Section/Section';
import ModalPortal from '../src/components/Portal';

export default function Folder() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <ModalPortal>
          <Header />
          <Section />
          <Footer />
        </ModalPortal>
      )}
    </>
  );
}
