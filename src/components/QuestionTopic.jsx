import iconAccessibility from "../assets/images/icon-accessibility.svg";

export default function QuestionTopic() {
  return (
    <div className="flex items-center">
      <img
        src={iconAccessibility}
        alt=""
        className="h-10 w-10 rounded bg-violet-100 p-1"
      />
      <p className="ml-4 text-xl font-semibold">Accessibility</p>
    </div>
  );
}
