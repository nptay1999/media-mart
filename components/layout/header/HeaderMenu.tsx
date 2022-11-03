import React from 'react';

import useHeader from '../../../hooks/useHeader';

const HeaderMenu = () => {
  const { menuList } = useHeader();
  return (
    <div className="hidden md:!block md:container mx-3 md:mx-auto">
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
  );
};

export default HeaderMenu;
