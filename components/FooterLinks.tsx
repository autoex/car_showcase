import { footerLinks } from '@/constants';
import React from 'react';
import { FooterLinkSection } from '.';

const FooterLinks = () => {
  return footerLinks.map((item) => (
    <FooterLinkSection
      key={item.title}
      {...item}
    />
  ));
};

export default FooterLinks;
