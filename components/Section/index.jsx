import React from 'react';
import ArrowRightIcon from '@public/icons/arrow_right.svg';
import Link from 'next/link';

const Section = ({ title, linkText, ...rest }) => {
  return (
    <div className="flex justify-between items-center">
      <h3 className="font-bold text-2xl">{title}</h3>
      <Link {...rest}>
        <a className="flex items-center">
          <p className="p-2">{linkText}</p>
          <ArrowRightIcon height={24} width={24} />
        </a>
      </Link>
    </div>
  );
};

export default Section;
