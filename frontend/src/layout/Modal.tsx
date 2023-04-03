{/* <Modal>
  <Modal.Header>
    <Modal.Title Title></ModalTitle>
    <Modal.Close></Modal.Close>
  </Modal.Header>
  <Modal.Container>
    {children}
  </Modal.Container>
  <Modal.Button type ></Modal.Button>
</Modal> */}

import { FC } from "react";
import styled from "@emotion/styled";
import { css }from "@emotion/react";
interface ModalBasic {
  closeFn : () => void;
  children : React.ReactNode;
}


const Modal : FC = ()=>{
  return <></>
}