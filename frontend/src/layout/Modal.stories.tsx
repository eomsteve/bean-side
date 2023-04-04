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
  title : "닉네임 입력",
  closeFn : ()=>{},
  children : <div>{"hello world!"}</div>,
  label : "삭제"
}
