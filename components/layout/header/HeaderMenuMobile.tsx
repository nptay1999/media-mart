/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  faChevronRight,
  faDotCircle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import useHeader from '../../../hooks/useHeader';

const HeaderMenuMobile = () => {
  const { menuList, menuShow, toggleMenuShow } = useHeader();
  const drop = menuList
    .filter((menu) => !!menu.items)
    .map((menu) => ({ menu: menu.name, drop: false }));
  const [dropdownMenu, setDropdownMenu] = useState<
    {
      menu: string;
      drop: boolean;
    }[]
  >(drop);
  const toggleMenuDropdown = (menu: string) => {
    return () =>
      setDropdownMenu((dropdowns) => {
        return dropdowns.map((dropdown) => {
          if (dropdown.menu === menu)
            return {
              ...dropdown,
              drop: !dropdown.drop,
            };
          return dropdown;
        });
      });
  };
  const getDropdown = (menu: string) => {
    return dropdownMenu.find((dropdown) => dropdown.menu === menu);
  };

  return (
    <>
      <div
        className={`w-screen h-screen absolute top-0 left-0 bg-gray-700 opacity-50 transition ${
          menuShow ? 'block' : 'hidden'
        }`}
      ></div>
      <div
        className={`min-w-[40vw] bg-white h-screen absolute top-0 right-0 ${
          menuShow ? 'block' : 'hidden'
        }`}
      >
        <div className="w-full px-3 py-4 bg-orange-500 text-white flex items-center">
          <span className="flex-1">Main Menu</span>
          <FontAwesomeIcon
            icon={faTimes}
            className="text-white text-lg cursor-pointer"
            onClick={toggleMenuShow}
          />
        </div>
        <ul className="list-none">
          {menuList.map((menu) => (
            <li key={menu.name}>
              <div className="w-full px-3 py-3 bg-white text-gray-600 text-xs font-light border-b border-dashed border-gray-300 flex items-center cursor-pointer">
                {!menu.items ? (
                  <a href="#" className="flex-1">
                    {menu.name}
                  </a>
                ) : (
                  <>
                    <span
                      className="flex-1"
                      onClick={toggleMenuDropdown(menu.name)}
                    >
                      {menu.name}
                    </span>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-xs font-light"
                      onClick={toggleMenuDropdown(menu.name)}
                    />
                  </>
                )}
              </div>
              {menu.items ? (
                <ul
                  className={`overflow-hidden transition ${
                    getDropdown(menu.name) && getDropdown(menu.name)?.drop
                      ? 'h-fit'
                      : 'h-0'
                  }`}
                >
                  {menu.items.map((item) => (
                    <li key={item}>
                      <div className="w-full px-3 pl-4 py-3 bg-gray-100 text-gray-600 text-xs font-light border-b border-dashed border-gray-300 flex items-center gap-3">
                        <FontAwesomeIcon
                          icon={faDotCircle}
                          className="text-xs"
                        />
                        <a href="#" className="flex-1">
                          {item}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HeaderMenuMobile;
