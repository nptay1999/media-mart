import React, { createContext, ReactNode, useContext, useState } from 'react';

type ContentType = {
  menuShow: boolean;
  toggleMenuShow: () => void;
  menuList: { name: string; items?: string[] }[];
};

const initValues: ContentType = {
  menuShow: false,
  toggleMenuShow: () => {},
  menuList: [],
};
export const HeaderContext = createContext<ContentType>(initValues);

type Props = {
  children: ReactNode;
};
export const HeaderProvider = (props: Props) => {
  const { children } = props;
  const [menuShow, setMenuShow] = useState<boolean>(false);
  const toggleMenuShow = () => setMenuShow((show) => !show);

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

  const values: ContentType = {
    menuShow,
    toggleMenuShow,
    menuList,
  };
  return (
    <HeaderContext.Provider value={values}>{children}</HeaderContext.Provider>
  );
};

const useHeader = () => {
  const context = useContext(HeaderContext);
  return context;
};

export default useHeader;
