/* eslint-disable react/prop-types */
export default function Button({ value, onClick }) {
  return (
    <div className="md:col-start-2">
      <button
        className="bg-custom-purple hover:bg-custom-purple text-md col-span-2 mt-4 w-full justify-self-end rounded-lg px-4 py-4 font-medium text-white hover:opacity-50 md:text-xl"
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
}
