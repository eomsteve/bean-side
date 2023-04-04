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
interface ModalBasic {
  closeFn: () => void;
  children: React.ReactNode;
  title?: string;
  label: string;
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

const ModalTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-weight: 600;
  font-size: 16px;
`;

const ModalHeader = styled.div`
  width: 100%;
`;

const Modal: FC<ModalBasic> = ({ children, closeFn, title, label }) => {
  return (
    <ModalContents>
      <ModalHeader>
        <ModalClose closeFn={closeFn} />
        {title ? <ModalTitle>{title}</ModalTitle> : ''}
      </ModalHeader>
      {children}
      <ModalButton label={'삭제'} />
    </ModalContents>
  );
};

export default Modal;
