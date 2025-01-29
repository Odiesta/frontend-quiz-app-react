/* eslint-disable react/prop-types */
export default function Button({ value, onClick }) {
  return (
    <div className="md:col-start-2">
      <button
        className="bg-custom-purple hover:bg-custom-purple col-span-2 mt-4 w-full justify-self-end rounded-lg px-4 py-4 text-xl font-medium text-white hover:opacity-50"
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
}
