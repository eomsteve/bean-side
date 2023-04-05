import { ComponentStory, ComponentMeta } from "@storybook/react";

import ModalButton from './Modal.Button';


export default {
  title: 'Modal/Button',
  component: ModalButton,
  argTypes : {

  }
} as ComponentMeta<typeof ModalButton>;


const Template :ComponentStory<typeof ModalButton> = (args) => <ModalButton {...args}/>

export const Delete = Template.bind({});
Delete.args = {
  label : "삭제"
}

export const Confirm = Template.bind({});
Confirm.args = {
  label : "확인"
}

export const Close = Template.bind({});
Close.args = {
  label : "닫기"
}

export const Start = Template.bind({});
Start.args = {
  label : "시작"
}

