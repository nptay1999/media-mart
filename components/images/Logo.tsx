import Image from 'next/image';
import React from 'react';

type LoaderProps = {
  src: string;
};

const loader = ({ src }: LoaderProps) => {
  return src;
};

const Logo = () => {
  return (
    <Image
      loader={loader}
      src="https://cdn.shopify.com/s/files/1/0106/2721/9522/files/logo_150x50.png?v=1614331006"
      alt="logo.png"
      width={130}
      height={26}
    />
  );
};

export default Logo;
