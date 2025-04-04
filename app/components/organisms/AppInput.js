'use client'
import React, { useState } from "react";

function AppInput({ label, icon, maxLength, checked, type, required, name, max, options, value, defaultValue, display, onChange }) {
  const [inputType, setInputType] = useState(type);
  const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  const Fid = makeid(7)

  return (
    <div className="text-[16px] relative rounded-lg">
      {type === "checkbox" || type === "radio" ? (
        <div className="flex text-sm">
          <div
            className={`space-x-2 relative bg-white -left-2 flex select-none items-center justify-center ${display === "col" && "flex-col pb-6"
              }`}
          >
            <input
              type={type}
              id={name + Fid}
              className="peer group bg-white opacity-0 appearance-none"
              name={name}
              required={required}
              maxLength={maxLength}
              value={value}
              checked={checked && checked}
              defaultValue={defaultValue}
              onChange={(e) => onChange && onChange(e)}
            />
            <div className="relative top-[1px] bg-white w-7 h-7 rounded-md dark:bg-gray-700 dark:border-gray-500 border peer-hover:hidden peer-checked:hidden " />
            <div className="relative top-[1px] bg-white dark:bg-gray-700 dark:border-gray-500 w-7 h-7 text-xl rounded-md peer-checked:bg-blue hidden peer-checked:flex peer-hover:border peer-hover:flex items-center justify-center text-gray-300 peer-checked:text-white ">
              <i className="ri-check-line"></i>
            </div>
            <label
              htmlFor={name + Fid}
              className={`cursor-pointer ${(label === undefined) && "w-1 h-6 top-0"} flex gap-1 peer-checked:text-blue-400 ${display === "col"
                ? "pt-8 px-2 -top-0 absolute"
                : "pl-9 right-9 relative"
                }`}
            >
              <span className="first-letter:capitalize text-tertiary-base2 leading-[20px]">
                {label}
              </span>
            </label>
          </div>
        </div>
      ) : type === "select" ? (
        <select
          name={name}
          onChange={(e) => onChange && onChange(e)}
          required={required}
          className="w-full border bg-white focus:border-black border-black placeholder-shown:border-gray-300 p-3 peer outline-none rounded-lg placeholder:text-transparent"
        >
          <option value="" disabled selected hidden>
            {label}
          </option>
          {options?.map((option) => (
            <option key={option.value} defaultValue={typeof (defaultValue) === "string" ? defaultValue === option.value : defaultValue === option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          name={name}
          required={required}
          value={value}
          onChange={(e) => onChange && onChange(e)}
          defaultValue={defaultValue}
          maxLength={maxLength}
          className="w-full border bg-white resize-none focus:border-black border-black placeholder-shown:border-gray-300 p-3 peer outline-none rounded-lg placeholder:text-transparent"
          placeholder={label}></textarea>
      ) : (
        <input
          name={name}
          required={required}
          type={inputType}
          value={value}
          onChange={(e) => onChange && onChange(e)}
          defaultValue={defaultValue}
          className="w-full border bg-white appearance-none focus:border-black border-black placeholder-shown:border-gray-300 p-3 peer outline-none rounded-lg placeholder:text-transparent"
          placeholder={label}
          maxLength={maxLength}
          {...(maxLength ? { maxLength } : {})}
          {...(max ? { max } : {})}
        />
      )}
      {
        type !== "checkbox" && type !== "radio" && (
          <label className="absolute text-black peer-focus:text-black pointer-events-none peer-placeholder-shown:text-gray-300 z-20 left-4 peer-placeholder-shown:left-2 peer-focus:left-4 px-1 peer-focus:text-[14px] text-[14px] -top-[9px] transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-[16px] peer-focus:-top-[9px] bg-white">
            {label}
          </label>
        )
      }

      {type === "password" && (
        <div
          className="absolute cursor-pointer text-black peer-focus:text-black peer-placeholder-shown:text-gray-300 right-3 top-3"
          onClick={() =>
            setInputType(inputType === "password" ? "text" : "password")
          }
        >
          {inputType === "password" ? (
            <i className="ri-eye-off-fill"></i>
          ) : (
            <i className="ri-eye-fill"></i>
          )}
        </div>
      )}
    </div>
  );
}

export default AppInput;