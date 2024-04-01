import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const ModalPortal = ({ children }: { children: React.ReactNode[] }) => {
  const modal = document.getElementById('modal');
  const element = document.getElementById('div');

  useEffect(() => {
    modal?.appendChild(element);
    return () => {
      modal?.removeChild(element);
    };
  }, [element, modal]);

  return !element ? null : ReactDOM.createPortal(children, element);
};

export default ModalPortal;
