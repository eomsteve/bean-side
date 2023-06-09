import styled from '@emotion/styled';
import { FC } from 'react';

interface ModalCloseProps {
  closeFn: () => void;
}

const CloseButton = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  border: none;
  background: #ffff;
`;

const ModalClose: FC<ModalCloseProps> = () => {
  return (
    <CloseButton>
      <svg style={{ cursor : 'pointer'}}
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.51465 0L0 2.51465L1.28408 3.79873L4.4586 7.02675L1.28408 10.2013L0 11.4318L2.51465 14L3.79873 12.7159L7.02675 9.4879L10.2013 12.7159L11.4318 14L14 11.4318L12.7159 10.2013L9.4879 7.02675L12.7159 3.79873L14 2.51465L11.4318 0L10.2013 1.28408L7.02675 4.4586L3.79873 1.28408L2.51465 0Z"
          fill="#929E9E"
        />
      </svg>
    </CloseButton>
  );
};

export default ModalClose;
