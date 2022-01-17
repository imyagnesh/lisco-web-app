import cn from 'classnames';

function Select({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  isFirst,
  isLast,
  options,
  placeholder,
  ...props
}) {
  return (
    <div>
      <label htmlFor={field.name} className="sr-only">
        {props.placeholder}
      </label>
      <select
        id={field.name}
        className={cn(
          'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
          {
            'rounded-t-md': isFirst,
            'rounded-b-md': isLast,
            'border-red-300 focus:border-red-500 rounded-b-md':
              touched[field.name] && !!errors[field.name],
          }
        )}
        {...field}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((x) => (
          <option key={x.value} value={x.value}>
            {x.text}
          </option>
        ))}
      </select>
      {touched[field.name] && !!errors[field.name] && (
        <p className="text-red-500">{errors[field.name]}</p>
      )}
    </div>
  );
}

export default Select;
