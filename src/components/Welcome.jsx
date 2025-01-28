export default function Welcome() {
  return (
    <div className="heading">
      <h1 className="text-4xl text-slate-700 md:text-5xl dark:text-slate-200">
        Welcome to the{" "}
        <b className="block font-bold text-slate-700 dark:text-slate-200">
          Frontend Quiz!
        </b>
      </h1>

      <p className="mt-4 italic md:mt-8 dark:text-slate-200">
        Pick a subject to get started.
      </p>
    </div>
  );
}
