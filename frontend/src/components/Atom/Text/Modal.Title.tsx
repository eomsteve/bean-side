import { FC } from 'react';
import styled from "@emotion/styled";
import { css } from '@emotion/react';

interface ModalTitle{
  title : "정산현황" | string;

}

const Title = styled.div<ModalTitle>`
  display: flex;
  ${(props)=> (props.title === "정산현황") ? `color : #3481F5;` : css`
    justify-content: center;
    color : black;
  `}
  align-items: center;
  padding: 1rem;
  font-weight: 600;
  font-size: 16px;
`;

const ModalTitle: FC<ModalTitle> = ({title})=>{
  return <Title title={title}>
    {title}
  </Title>
}

export default ModalTitle;