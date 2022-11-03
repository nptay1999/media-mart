import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCartPlus,
  faLock,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import Logo from '../../images/Logo';
import useHeader from '../../../hooks/useHeader';

const listControl = [
  {
    name: 'Login',
    logo: faLock,
  },
  {
    name: 'Account',
    logo: faUser,
  },
  {
    name: 'My cart',
    logo: faCartPlus,
  },
];

const HeaderTop = () => {
  const { toggleMenuShow } = useHeader();
  return (
    <div className="mx-4 md:container md:mx-auto">
      <div className="flex items-center gap-7 py-3 md:py-7">
        <Logo />
        <div className="flex-1 relative max-w-4xl mx-auto">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full px-4 py-3 pr-9 text-sm rounded-full outline-none border-gray-300 border bg-gray-100 transition focus:bg-white focus:border-orange-500 hover:bg-white hover:border-orange-500"
          />
          <div className="absolute top-1.5 right-2 bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition">
            <FontAwesomeIcon icon={faSearch} className="text-white text-xs" />
          </div>
        </div>
        <div className="hidden md:!flex items-center gap-2 ">
          {listControl.map((control) => {
            return (
              <div
                key={control.name}
                className="flex flex-col gap-1 items-center cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={control.logo}
                  className="text-gray-500"
                />
                <span className="text-sm text-gray-500 hover:text-orange-500 transition">
                  {control.name}
                </span>
              </div>
            );
          })}
        </div>
        <div className="block md:hidden">
          <FontAwesomeIcon
            icon={faBars}
            className="text-gray-700 text-xl cursor-pointer"
            onClick={toggleMenuShow}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
