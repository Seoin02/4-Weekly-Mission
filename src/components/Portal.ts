import ReactDOM from 'react-dom';

const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  const element = document.getElementById('rootModal');
  return !element ? null : ReactDOM.createPortal(children, element);
};

export default ModalPortal;
