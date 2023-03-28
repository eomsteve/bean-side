// ./src/stories/button.js
import { FC } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  color?: string;
  label?: string;
  onClick?: () => void;
}

const getVariantStyles = ({ primary = false }) =>
  primary
    ? css`
        color: white;
        background-color: #1ea7fd;
      `
    : css`
        color: #333;
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      `;

const getSizeStyles = ({ size = 'medium' }) => {
  if (size === 'small') {
    return css`
      font-size: 12px;
      padding: 10px 16px;
    `;
  }
  if (size === 'large') {
    return css`
      font-size: 16px;
      padding: 12px 24px;
    `;
  }
  if (size === 'medium') {
    return css`
      font-size: 14px;
      padding: 11px 20px;
    `;
  }
};

/**
 * Primary UI component for user interaction
 */
const StyledButton = styled.button<ButtonProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${(props) => getVariantStyles(props)}
  ${(props) => getSizeStyles(props)}
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
    ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

const Button: FC<ButtonProps> = ({ label, ...rest }) => (
  <StyledButton {...rest}>{label}</StyledButton>
);

export default Button;
