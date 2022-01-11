function Input(props) {
  console.log(props);
  return (
    <div className="col-span-6 sm:col-span-3">
      <label
        htmlFor="first-name"
        className="block text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <input
        type="text"
        name="first-name"
        id="first-name"
        autoComplete="given-name"
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
  );
}

export default Input;
