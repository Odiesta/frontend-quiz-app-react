export default function Question() {
  return (
    <div className="md:flex md:flex-col md:justify-between">
      <div>
        <p className="italic">Question 1 of 10</p>
        <p className="mt-4 text-2xl font-semibold">
          Which of these color contrast ratios defines the minimum WCAG 2.1
          Level AA requirement for normal text?
        </p>
      </div>
      <div className="mt-8 flex h-4 w-full items-center rounded-md bg-white">
        <div className="mx-1 h-2 w-full rounded-md bg-violet-600"></div>
      </div>
    </div>
  );
}
