import ModalBase from './ModalBase';
import { useState } from 'react';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

function DeleteLinkModal({ onClose }: { onClose: () => void }) {
  const [link, setLink] = useState(false);

  function deleteLink() {
    setLink(true);
  }

  return (
    <ModalBase title="링크 삭제" onClose={onClose}>
      <ModalBody>
        <span>http://www.abc.com</span>
      </ModalBody>
      <ModalFooter children="삭제하기" onClick={deleteLink} />
    </ModalBase>
  );
}

export default DeleteLinkModal;
