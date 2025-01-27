import iconSunDark from "./../assets/images/icon-sun-dark.svg";
import iconMoonDark from "./../assets/images/icon-moon-dark.svg";

export default function ViewMode() {
  return (
    <div className="ml-auto flex self-end">
      <img src={iconSunDark} alt="Icon Sun" className="light" />

      <label className="relative ml-2 inline-flex cursor-pointer items-center">
        <input type="checkbox" value="" className="peer sr-only" />
        <div className="group peer h-7 w-12 rounded-full bg-purple-600 shadow-md outline-none ring-0 duration-300 after:absolute after:left-1 after:top-1 after:flex after:h-5 after:w-5 after:-rotate-180 after:items-center after:justify-center after:rounded-full after:bg-gray-50 after:outline-none after:duration-300 peer-checked:bg-purple-600 peer-checked:after:translate-x-5 peer-checked:after:rotate-0 peer-hover:after:scale-95 peer-focus:outline-none"></div>
      </label>
      <img src={iconMoonDark} alt="Icon Moon" className="dark ml-2" />
    </div>
  );
}
