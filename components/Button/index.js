import React, { forwardRef, memo } from 'react';
import LockClosedIcon from '../../public/icons/lock.svg';

const Button = forwardRef(({ title, icon: Icon, ...props }, ref) => {
  console.log('button render');
  return (
    <button
      ref={ref}
      type="button"
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-500"
      {...props}
    >
      {Icon && (
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          <Icon />
        </span>
      )}
      {title}
    </button>
  );
});

Button.displayName = 'Button';

export default memo(Button);
