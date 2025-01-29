/* eslint-disable react/prop-types */
import iconSunDark from "./../assets/images/icon-sun-dark.svg";
import iconMoonDark from "./../assets/images/icon-moon-dark.svg";
import iconSunLight from "./../assets/images/icon-sun-light.svg";
import iconMoonLight from "./../assets/images/icon-moon-light.svg";

export default function ViewMode({ darkMode, toggleDarkMode }) {
  return (
    <div className="ml-auto flex self-end">
      <img
        src={darkMode ? iconSunLight : iconSunDark}
        alt="Icon Sun"
        className=""
      />

      <label className="relative ml-2 inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          onClick={toggleDarkMode}
        />
        <div className="bg-custom-purple peer-checked:bg-custom-purple group peer h-7 w-12 rounded-full shadow-md outline-none ring-0 duration-300 after:absolute after:left-1 after:top-1 after:flex after:h-5 after:w-5 after:-rotate-180 after:items-center after:justify-center after:rounded-full after:bg-gray-50 after:outline-none after:duration-300 peer-checked:after:translate-x-5 peer-checked:after:rotate-0 peer-hover:after:scale-95 peer-focus:outline-none"></div>
      </label>
      <img
        src={darkMode ? iconMoonLight : iconMoonDark}
        alt="Icon Moon"
        className="dark ml-2"
      />
    </div>
  );
}
