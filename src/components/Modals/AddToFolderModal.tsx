import ModalBase from './ModalBase';
import { useState } from 'react';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

function AddToFolderModal({ onClose }: { onClose: () => void }) {
  const [folder, setFolder] = useState('');
  function addToFolder() {
    setFolder('');
  }

  function AddToFolderModalText() {
    return (
      <>
        <span>링크 주소</span>
        <div>
          코딩팁 <span>7개 링크</span>
        </div>
      </>
    );
  }

  return (
    <ModalBase title="폴더에 추가" onClose={onClose}>
      <ModalBody>
        <AddToFolderModalText />
      </ModalBody>
      <ModalFooter children="추가하기" onClick={addToFolder} />
    </ModalBase>
  );
}

export default AddToFolderModal;
