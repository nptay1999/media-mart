import React from 'react';

type Props = {
  title: string;
  items: { link: string; name: string }[];
};

const FooterCardList = ({ title, items }: Props) => {
  return (
    <div className="w-full">
      <div className="text-base font-bold mb-6 capitalize">{title}</div>
      <ul className="list-none">
        {items.map((item) => (
          <li
            key={item.link + item.name}
            className="border-b border-gray-300 last:border-b-0 pb-4 mb-4"
          >
            <a
              href={item.link}
              className="text-sm font-light transition text-gray-600 hover:text-gray-800"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterCardList;
