import { FC } from 'react';
import styled from "@emotion/styled";

interface ModalTitle{
  title : string;
}

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-weight: 600;
  font-size: 16px;
`;

const ModalTitle: FC<ModalTitle> = ({title})=>{
  return <Title>
    {title}
  </Title>
}

export default ModalTitle;