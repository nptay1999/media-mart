import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartPlus,
  faLock,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import Logo from '../../images/Logo';

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

const menuList = [
  {
    name: 'Women',
    items: [
      'Dresses',
      'Tops & Tees',
      'Skirts',
      'Jackets & Coats',
      'Sweaters',
      'Swimwear',
      'Boots',
      'T-shirt',
      'Shoes',
    ],
  },
  { name: 'Men' },
  { name: 'Youth & Baby' },
  { name: 'Home & Living' },
  { name: 'Phone Case' },
  { name: 'Accessories' },
  { name: 'Mugs' },
  { name: 'Jewelry' },
  { name: 'Contact Us' },
];

const Header = () => {
  return (
    <>
      <div className="md:container md:mx-auto">
        <div className="flex items-center gap-7 py-7">
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
          <div className="flex items-center gap-2">
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
        </div>
      </div>
      <hr className="border-t-0 border-b" />
      <div className="md:container md:mx-auto">
        <ul className="list-none flex items-center justify-start gap-6">
          {menuList.map((menu) => {
            return (
              <li key={menu.name} className="group relative py-4">
                <a
                  href="#"
                  className="text-gray-800 transition font-bold text-sm hover:text-orange-500"
                >
                  {menu.name}
                </a>
                {menu.items ? (
                  <div className="hidden absolute left-0 top-14 transition group-hover:!block bg-white shadow-t-sm">
                    <ul className="list-none py-2 px-5">
                      {menu.items.map((item) => {
                        return (
                          <li key={item} className="border-b last:border-0">
                            <a
                              href="#"
                              className="text-gray-600 font-normal inline-block w-52 transition text-sm hover:text-orange-500 py-3"
                            >
                              {item}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Header;
