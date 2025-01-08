import iconSunDark from "./../assets/images/icon-sun-dark.svg";
import iconMoonDark from "./../assets/images/icon-moon-dark.svg";

export default function ViewMode() {
  return (
    <div className="self-end flex">
      <img src={iconSunDark} alt="Icon Sun" className="light" />

      <label className="relative inline-flex items-center cursor-pointer ml-2">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="group peer ring-0 bg-purple-600  rounded-full outline-none duration-300 after:duration-300 w-12 h-7 shadow-md peer-checked:bg-purple-600  peer-focus:outline-none  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-5 after:w-5 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-5  peer-hover:after:scale-95 peer-checked:after:rotate-0"></div>
      </label>
      <img src={iconMoonDark} alt="Icon Moon" className="dark ml-2" />
    </div>
  );
}
