/* eslint-disable react/prop-types */
export default function Button({ value, onPlayAgain }) {
  return (
    <div className="md:col-start-2">
      <button
        className="col-span-2 mt-4 w-full justify-self-end rounded-lg bg-violet-500 px-4 py-4 text-xl font-bold text-white"
        onClick={onPlayAgain}
      >
        {value}
      </button>
    </div>
  );
}
