{
  /* <Modal>
  <Modal.Header>
    <Modal.Title Title></ModalTitle>
    <Modal.Close></Modal.Close>
  </Modal.Header>
  <Modal.Container>
    {children}
  </Modal.Container>
  <Modal.Button type ></Modal.Button>
</Modal> */
}

import { Children, FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import ModalButton from '../components/Atom/button/Modal.Button';
import ModalClose from '../components/Atom/button/Modal.Close';
import ModalTitle from '../components/Atom/Text/Modal.Title';
import type {ModalButtonTypes} from '../components/Atom/button/Modal.Button';
interface ModalBasic {
  closeFn: () => void;
  children: React.ReactNode;
  title?: string;
  label: '시작' | '확인' | '닫기' | '삭제';
}

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(20rem - 15px);
  height: auto;
  background: #ffffff;
  box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;


const ModalHeader = styled.div`
  width: 100%;
`;

const Modal: FC<ModalBasic> = ({ children, closeFn, title, label }) => {
  return (
    <ModalContents>
      <ModalHeader>
        <ModalClose closeFn={closeFn} />
        {title ? <ModalTitle title={title}/> : ''}
      </ModalHeader>
      {children}
      <ModalButton label={label} />
    </ModalContents>
  );
};

export default Modal;
