import ModalBase from './ModalBase';
import ModalInput from './ModalInput';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import { useState } from 'react';
import type { ModalBaseProps } from './ModalBase';

function EditNameModal({ onClose }: ModalBaseProps) {
  const [name, setName] = useState('');

  function editName() {
    setName('');
  }

  return (
    <ModalBase title="폴더 이름 변경" onClose={onClose}>
      <ModalBody>
        <ModalInput />
      </ModalBody>
      <ModalFooter children="변경하기" onClick={editName} />
    </ModalBase>
  );
}

export default EditNameModal;
