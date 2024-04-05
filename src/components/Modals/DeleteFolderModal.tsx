import ModalBase from './ModalBase';
import { useState } from 'react';
import type { ModalBaseProps } from './ModalBase';
import ModalFooter from './ModalFooter';
import ModalBody from './ModalBody';

function DeleteFolderModal({ onClose }: ModalBaseProps) {
  const [folder, setFolder] = useState('');

  function deleteFolder() {
    setFolder('');
  }

  return (
    <ModalBase title="폴더 삭제" onClose={onClose}>
      <ModalBody>
        <span>폴더명</span>
      </ModalBody>
      <ModalFooter children="삭제하기" onClick={deleteFolder} />
    </ModalBase>
  );
}

export default DeleteFolderModal;
