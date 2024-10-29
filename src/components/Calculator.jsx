import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";
import Button from "./Button";

const Calculator = () => {
  const { theme } = useContext(AuthContext);
  const [currentValue, setCurrentValue] = useState("");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isNewInput, setIsNewInput] = useState(false);

  const formatNumber = (num) => {
    const number = parseFloat(num.replace(/,/g, ""));
    return isNaN(number) ? "" : number.toLocaleString("en-US");
  };

  const handleNumberClick = (value) => {
    setCurrentValue((prev) => {
      const newValue = isNewInput ? value : prev + value;
      return newValue; // Format with commas
    });
    setIsNewInput(false);
  };

  const handleOperatorClick = (operation) => {
    if (currentValue) {
      setPreviousValue(currentValue);
      setOperator(operation);
      setIsNewInput(true);
    }
  };

  const handleDelete = () => {
    setCurrentValue((prev) => prev.slice(0, -1) || "0");
  };

  const calculateResult = () => {
    if (previousValue && currentValue && operator) {
      const prev = parseFloat(previousValue);
      const current = parseFloat(currentValue);
      const operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => (b !== 0 ? a / b : "Error"),
      };
      setCurrentValue(operations[operator](prev, current).toString());
      setPreviousValue(null);
      setOperator(null);
      setIsNewInput(true);
    }
  };

  const handleClear = () =>
    setCurrentValue("") || setPreviousValue(null) || setOperator(null);

  return (
    <div>
      <div
        className={`rounded-lg mb-4 p-6 ${
          theme === "theme1"
            ? "bg-Very-Dark-Desaturated-Blue-Screen-Background"
            : theme === "theme2"
            ? "bg-Very-Light-Gray-Screen-Background"
            : "bg-Very-Dark-Violet-Toggle-Background-Keypad-Background-Screen-Background"
        }  ${
          theme === "theme1"
            ? "text-white"
            : theme === "theme2"
            ? "text-Very-Dark-Grayish-Yellow"
            : "text-Light-Yellow"
        } text-right text-[2.7rem] font-bold`}
      >
        {formatNumber(currentValue) || "0"}
      </div>
      <div
        className={`rounded-lg gap-2 ${
          theme === "theme1"
            ? "bg-Very-Dark-Desaturated-Blue-Toggle-Background-Keypad-Background"
            : theme === "theme2"
            ? "bg-Grayish-Red-Toggle-Background-Keypad-Background"
            : "bg-Very-Dark-Violet-Toggle-Background-Keypad-Background-Screen-Background"
        }  px-6 py-6 grid grid-rows-5`}
      >
        <div className="grid grid-cols-4 gap-3 text-[1.5rem]">
          {["7", "8", "9"].map((num) => (
            <Button
              key={num}
              value={num}
              onClick={handleNumberClick}
              className={`${
                theme === "theme1"
                  ? "bg-Light-Grayish-Orange-Key-Background"
                  : theme === "theme2"
                  ? "bg-Light-Grayish-Yellow-Key-Background"
                  : "bg-Very-Dark-Violet-Key-Background border-b-Dark-Magenta-Key-Shadow text-Light-Yellow"
              } border-b-4`}
            />
          ))}
          <Button
            value="DEL"
            onClick={handleDelete}
            className={` ${
              theme === "theme1"
                ? "bg-Desaturated-Dark-Blue-Key-Background"
                : theme === "theme2"
                ? "bg-Dark-Moderate-Cyan-Key-Background"
                : "bg-Dark-Violet-Key-Background border-b-Vivid-Magenta-Key-Shadow"
            } border-b-4 border-b-Desaturated-Dark-Blue-Key-Shadow text-white`}
          />
        </div>
        <div className="grid grid-cols-4 gap-3 text-[1.5rem]">
          {["4", "5", "6"].map((num) => (
            <Button
              key={num}
              value={num}
              onClick={handleNumberClick}
              className={`${
                theme === "theme1"
                  ? "bg-Light-Grayish-Orange-Key-Background"
                  : theme === "theme2"
                  ? "bg-Light-Grayish-Yellow-Key-Background"
                  : "bg-Very-Dark-Violet-Key-Background border-b-Dark-Magenta-Key-Shadow text-Light-Yellow"
              } border-b-4`}
            />
          ))}
          <Button
            value="+"
            onClick={handleOperatorClick}
            className={`${
              theme === "theme1"
                ? "bg-Light-Grayish-Orange-Key-Background"
                : theme === "theme2"
                ? "bg-Light-Grayish-Yellow-Key-Background"
                : "bg-Very-Dark-Violet-Key-Background border-b-Dark-Magenta-Key-Shadow text-Light-Yellow"
            } border-b-4`}
          />
        </div>
        <div className="grid grid-cols-4 gap-3 text-[1.5rem]">
          {["1", "2", "3"].map((num) => (
            <Button
              key={num}
              value={num}
              onClick={handleNumberClick}
              className={`${
                theme === "theme1"
                  ? "bg-Light-Grayish-Orange-Key-Background"
                  : theme === "theme2"
                  ? "bg-Light-Grayish-Yellow-Key-Background"
                  : "bg-Very-Dark-Violet-Key-Background border-b-Dark-Magenta-Key-Shadow text-Light-Yellow"
              } border-b-4`}
            />
          ))}
          <Button
            value="-"
            onClick={handleOperatorClick}
            className={`${
              theme === "theme1"
                ? "bg-Light-Grayish-Orange-Key-Background"
                : theme === "theme2"
                ? "bg-Light-Grayish-Yellow-Key-Background"
                : "bg-Very-Dark-Violet-Key-Background border-b-Dark-Magenta-Key-Shadow text-Light-Yellow"
            } border-b-4 `}
          />
        </div>
        <div className="grid grid-cols-4 gap-3 text-[1.5rem]">
          {[".", "0", "/", "x"].map((num) => (
            <Button
              key={num}
              value={num}
              onClick={
                num === "/" || num === "x"
                  ? () => handleOperatorClick(num === "x" ? "*" : num) // Map "x" to "*"
                  : () => handleNumberClick(num)
              }
              className={`${
                theme === "theme1"
                  ? "bg-Light-Grayish-Orange-Key-Background"
                  : theme === "theme2"
                  ? "bg-Light-Grayish-Yellow-Key-Background"
                  : "bg-Very-Dark-Violet-Key-Background border-b-Dark-Magenta-Key-Shadow text-Light-Yellow"
              } border-b-4`}
            />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-3">
          <Button
            value="RESET"
            onClick={handleClear}
            className={`col-span-2  ${
              theme === "theme1"
                ? "bg-Desaturated-Dark-Blue-Key-Background border-b-Desaturated-Dark-Blue-Key-Shadow"
                : theme === "theme2"
                ? "bg-Dark-Moderate-Cyan-Key-Background border-b-Very-Dark-Cyan-Key-Shadow"
                : "bg-Dark-Violet-Key-Background border-b-Vivid-Magenta-Key-Shadow"
            } border-b-4  text-white`}
          />
          <Button
            value="="
            onClick={calculateResult}
            className={`col-span-2 ${
              theme === "theme1"
                ? "bg-Red-Key-Background-Toggle border-b-Dark-Red-Key-Shadow"
                : theme === "theme2"
                ? "bg-Orange-Key-Background-Toggle border-b-Dark-Orange-Key-Shadow"
                : "bg-Pure-Cyan-Key-Background-Toggle border-b-Soft-Cyan-Key-Shadow"
            } border-b-4  text-white`}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
