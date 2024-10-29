import { useContext } from "react";
import { AuthContext } from "./utils/AuthContext";

import Calculator from "./components/Calculator";

function App() {
  const { theme, toggleTheme } = useContext(AuthContext);

  return (
    <main
      className={`h-screen py-8 px-6 lg:pt-14 ${
        theme === "theme1"
          ? "bg-Very-Dark-Desaturated-Blue-Main-Background"
          : theme === "theme2"
          ? "bg-Light-Gray-Main-Background"
          : "bg-Very-Dark-Violet-Main-Background"
      } `}
    >
      <div className="max-w-[30rem] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1
            className={`${
              theme === "theme1"
                ? "text-white"
                : theme === "theme2"
                ? "text-Very-Dark-Grayish-Yellow"
                : "text-Light-Yellow"
            } text-[1.7rem]`}
          >
            calc
          </h1>
          <div className="flex items-center gap-8">
            <h2
              className={` self-end text-sm ${
                theme === "theme1"
                  ? "text-white"
                  : theme === "theme2"
                  ? "text-Very-Dark-Grayish-Yellow"
                  : "text-Light-Yellow"
              }`}
            >
              THEME
            </h2>
            <div className="flex flex-col">
              <div
                className={`flex justify-between items-center ${
                  theme === "theme1"
                    ? "text-white"
                    : theme === "theme2"
                    ? "text-Very-Dark-Grayish-Yellow"
                    : "text-Light-Yellow"
                }`}
              >
                <h3>1</h3>
                <h3>2</h3>
                <h3>3</h3>
              </div>
              <div
                onClick={toggleTheme}
                className={`${
                  theme === "theme1"
                    ? "bg-Very-Dark-Desaturated-Blue-Toggle-Background-Keypad-Background"
                    : theme === "theme2"
                    ? "bg-Grayish-Red-Toggle-Background-Keypad-Background"
                    : "bg-Very-Dark-Violet-Toggle-Background-Keypad-Background-Screen-Background"
                } flex cursor-pointer items-center h-5 relative w-14 rounded-full select-none`}
              >
                <input
                  type="checkbox"
                  name="toggle"
                  id="toggle"
                  className={`absolute block w-[14px] h-[14px] ml-1 rounded-full ${
                    theme === "theme1"
                      ? "bg-Red-Key-Background-Toggle"
                      : theme === "theme2"
                      ? "bg-Orange-Key-Background-Toggle"
                      : "bg-Pure-Cyan-Key-Background-Toggle"
                  } top-[3px] border appearance-none cursor-pointer transition-transform duration-300 ease-in-out ${
                    theme === "theme1"
                      ? "translate-x-0"
                      : theme === "theme2"
                      ? "translate-x-4"
                      : "translate-x-8"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        <Calculator />
      </div>
    </main>
  );
}

export default App;
