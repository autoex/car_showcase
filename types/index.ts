import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  disabled?: boolean;
  type?: string;
  title: string;
  containerStyles?: string;
  btnType?: 'button' | 'submit';
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

interface FooterLinks {
  title: string;
  url: string;
}
export interface FooterLinkSectionProps {
  title: string;
  links: FooterLinks[];
}
