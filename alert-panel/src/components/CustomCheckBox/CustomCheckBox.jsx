import React from "react"

export default function CustomCheckBox() {
    return (
      <React.Fragment>
        <input
          defaultChecked
          className="relative peer shrink-0
             rounded-full appearance-none 
    w-4 h-4 border-2 bg-red-600
        border-red-600 checked:bg-green-600
        checked:border-transparent
        checked:boder-green-600 p-2 
        flex justify-center items-center"
          type="checkbox"
        />
        <svg
          className="
      absolute 
      w-4 h-4 mt-1 ml-[0.1rem]
      hidden peer-checked:block pointer-events-none"
          fill="none"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <svg
          className="
        absolute
        w-4 h-4 ml-[0.1rem]
        peer-checked:hidden pointer-events-none"
          fill="none"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 18L18 6M6 6l12 12"
          >
          </path>
        </svg>
      </React.Fragment>
    )
}