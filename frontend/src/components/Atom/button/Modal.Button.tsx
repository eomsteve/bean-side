import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FC } from 'react';

export interface ModalButtonTypes {
  label: '시작' | '확인' | '닫기' | '삭제';
}

const getButtonStyles = ({ label }: ModalButtonTypes) => {
  if (label === '삭제') {
    return css`
      background-color: #ef3b66;
      color: #ffffff;
    `;
  }
  return css`
    background-color: #caf4ff;
    color: #3481f5;
  `;
};

const Button = styled.button<ModalButtonTypes>`
  

  width: 10rem;
  hight: 2.5rem;
  padding: 0.7rem;
  border-radius: 20px;
  font-weight : bolder;
  border :none;
  margin-top :15px;
  margin-bottom: 25px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  cursor : pointer;
  ${(props) => getButtonStyles(props)}
`;

const ModalButton: FC<ModalButtonTypes> = ({ label }) => {
  return <Button label={label}>{label}</Button>;
};

export default ModalButton;