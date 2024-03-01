import { FooterLinkSectionProps } from '@/types';
import Link from 'next/link';
import React from 'react';

const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({
  title,
  links,
}) => {
  return (
    <div className='footer__link'>
      <h3 className='font-bold'>{title}</h3>

      {links.map((link) => (
        <Link
          key={link.title}
          href={link.url}
          className='text-gray-500'>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinkSection;
