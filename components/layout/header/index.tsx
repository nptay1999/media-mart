import React from 'react';

import { HeaderProvider } from '../../../hooks/useHeader';

import HeaderMenu from './HeaderMenu';
import HeaderMenuMobile from './HeaderMenuMobile';
import HeaderTop from './HeaderTop';

const Header = () => {
  return (
    <div className="bg-orange-600 md:bg-white">
      <HeaderProvider>
        <HeaderTop />
        <hr className="border-t-0 border-b" />
        <HeaderMenu />
        <HeaderMenuMobile />
      </HeaderProvider>
    </div>
  );
};

export default Header;
