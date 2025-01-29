export default function Welcome() {
  return (
    <div className="heading">
      <h1 className="text-4xl font-light text-slate-700 dark:text-slate-200 md:text-5xl">
        Welcome to the{" "}
        <b className="block font-semibold text-slate-700 dark:text-slate-200">
          Frontend Quiz!
        </b>
      </h1>

      <p className="dark:text-custom-light-blue mt-4 font-light italic md:mt-8">
        Pick a subject to get started.
      </p>
    </div>
  );
}
