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

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
