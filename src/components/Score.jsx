/* eslint-disable react/prop-types */
export default function Score({ score }) {
  return (
    <div className="mt-4 flex w-full flex-col items-center rounded-xl bg-white py-8 md:mt-0 dark:bg-slate-600">
      <h1 className="text-9xl font-bold text-slate-700 dark:text-slate-100">
        {score}
      </h1>
      <p className="mt-4 text-xl dark:text-slate-200">out of 10</p>
    </div>
  );
}
