import React from 'react';

import FooterCardList from './FooterCardList';

const content = {
  title: 'Customer Service',
  items: [
    { link: '#', name: 'Contact us' },
    { link: '#', name: 'Help and advice' },
    { link: '#', name: 'Shipping & Returns' },
    { link: '#', name: 'Terms and conditions' },
    { link: '#', name: 'Refund Policy' },
  ],
};

const FooterLeft = () => {
  return <FooterCardList items={content.items} title={content.title} />;
};

export default FooterLeft;
