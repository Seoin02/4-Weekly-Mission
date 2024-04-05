import ModalBase from './ModalBase';
import ModalInput from './ModalInput';
import { useState } from 'react';
import type { ModalBaseProps } from './ModalBase';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

function AddFolderModal({ onClose }: ModalBaseProps) {
  const [folder, setFolder] = useState('');

  function addFolder() {
    setFolder('');
  }

  return (
    <ModalBase title="폴더 추가" onClose={onClose}>
      <ModalBody>
        <ModalInput />
      </ModalBody>
      <ModalFooter children="추가하기" onClick={addFolder} />
    </ModalBase>
  );
}

export default AddFolderModal;
