import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Modal.module.css';
import styled from 'styled-components';
import type { ModalBaseProps } from './ModalBase';
import shareKakaoLink from '../../utils/shareKakaoLink';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function ShareModal({ onClose }: ModalBaseProps) {
  const currentUrl = 'https://thunderous-chimera-786e0d.netlify.app';

  return (
    <div className={styles.modalBase} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={e => {
          e.stopPropagation();
        }}>
        <FontAwesomeIcon icon={faXmark} className="EditModalX" onClick={onClose} />
        <p className={styles.modalText}>폴더 공유</p>
        <div className={styles.centerSpace}>폴더명</div>
        <div className={styles.snsButton}>
          <button
            className={styles.kakaoShareWrapper}
            onClick={() => {
              shareKakaoLink(currentUrl, '카카오톡 공유하기');
            }}>
            <img src={`${process.env.PUBLIC_URL}/images/Kakao.png`} alt="카카오톡 공유 아이콘" />
          </button>
          <button
            className={styles.facebookShareWrapper}
            onClick={() => {
              window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`, '페이스북 공유하기');
            }}>
            <img src={`${process.env.PUBLIC_URL}/images/Facebook.png`} alt="페이스북 공유 아이콘" />
          </button>
          <CopyToClipboard text={currentUrl} onCopy={() => alert('URL이 복사됐습니다')}>
            <button className={styles.urlShareWrapper}>
              <img src={`${process.env.PUBLIC_URL}/images/link.png`} alt="URL 공유 아이콘" />
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}

export default ShareModal;
