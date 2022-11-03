import React from 'react';

import FooterCardList from './FooterCardList';

const content = {
  title: 'Information',
  items: [
    { link: '#', name: 'How We Are?' },
    { link: '#', name: 'Corporate Responsibility' },
    { link: '#', name: 'California Laws' },
    { link: '#', name: 'Careers' },
    { link: '#', name: 'Privacy Policy' },
  ],
};

const FooterRightMid = () => {
  return <FooterCardList items={content.items} title={content.title} />;
};

export default FooterRightMid;
