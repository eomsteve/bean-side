import { ComponentStory, ComponentMeta } from "@storybook/react";

import Modal from './Modal';


export default {
  title: 'Modal/ModalBasic',
  component: Modal,
  argTypes : {

  }
} as ComponentMeta<typeof Modal>;


const Template :ComponentStory<typeof Modal> = (args) => <Modal {...args}/>

export const Delete = Template.bind({});
Delete.args = {
  closeFn : ()=>{},
  children : <div>{"hello world!"}</div>,
  label : "삭제"
}

export const InputName = Template.bind({});
InputName.args = {
  title : "닉네임 입력",
  closeFn : ()=>{},
  children : <div>{"hello world!"}</div>,
  label : "닫기"
}

export const AddBillConfirm = Template.bind({});
AddBillConfirm.args = {
  title : "정산 추가",
  closeFn : ()=>{},
  children : <div>{"hello world!"}</div>,
  label : "확인"
}

export const Photo = Template.bind({});
Photo.args = {
  title : "영수증",
  closeFn : ()=>{},
  children : <div>{"hello world!"}</div>,
  label : "닫기"
}

export const Basic = Template.bind({});
Basic.args = {
  closeFn: ()=> {},
  children : <div></div>,
  label : "닫기"
}