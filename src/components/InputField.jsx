import React from "react";

function InputField({ placeHolder, onSubmit }) {
  const [inputWord, setInputWord] = React.useState("");

  return (
    <form className="relative w-full">
      <div className="absolute inset-y-0 left-4 flex items-center pl-3">
        <div className="flex">
          <svg
            fill="#000000"
            width="40px"
            height="40px"
            viewBox="0 0 1920.00 1920.00"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="7.68"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M1807.059 1637.706c0 31.059-25.299 56.47-56.47 56.47H169.411c-31.172 0-56.47-25.411-56.47-56.47v-903.53c0-31.058 25.298-56.47 56.47-56.47h1581.176c31.172 0 56.47 25.412 56.47 56.47v903.53Zm-56.47-1072.941h-729.262c14.908-86.965 65.958-113.506 133.384-147.163 89.336-44.611 200.583-100.291 200.583-304.602h-112.941c0 134.513-57.939 163.426-138.24 203.633-80.301 40.094-177.544 90.24-196.518 248.132H169.412C76.009 564.765 0 640.775 0 734.176v903.53c0 93.402 76.01 169.412 169.412 169.412h1581.176c93.403 0 169.412-76.01 169.412-169.412v-903.53c0-93.402-76.01-169.411-169.412-169.411Zm-564.707 677.647H734.118c-31.172 0-56.47 25.299-56.47 56.47v112.942c0 31.171 25.298 56.47 56.47 56.47h451.764c31.172 0 56.47-25.299 56.47-56.47v-112.942c0-31.171-25.298-56.47-56.47-56.47m338.824 0h-112.941c-31.172 0-56.47 25.299-56.47 56.47v112.942c0 31.171 25.298 56.47 56.47 56.47h112.94c31.173 0 56.471-25.299 56.471-56.47v-112.942c0-31.171-25.298-56.47-56.47-56.47m-1016.47 0H395.293c-31.172 0-56.47 25.299-56.47 56.47v112.942c0 31.171 25.298 56.47 56.47 56.47h112.941c31.172 0 56.47-25.299 56.47-56.47v-112.942c0-31.171-25.298-56.47-56.47-56.47m0-338.824h-112.94c-31.173 0-56.471 25.3-56.471 56.47V1073c0 31.172 25.298 56.47 56.47 56.47h112.941c31.172 0 56.47-25.298 56.47-56.47V960.059c0-31.172-25.298-56.47-56.47-56.47m225.883 225.882h112.94c31.173 0 56.471-25.3 56.471-56.471V960.059c0-31.172-25.298-56.47-56.47-56.47h-112.94c-31.172 0-56.47 25.298-56.47 56.47V1073c0 31.172 25.298 56.47 56.47 56.47m451.764-225.882h-112.94c-31.173 0-56.471 25.3-56.471 56.47V1073c0 31.172 25.298 56.47 56.47 56.47h112.941c31.172 0 56.47-25.298 56.47-56.47V960.059c0-31.172-25.298-56.47-56.47-56.47m338.824 0h-112.941c-31.172 0-56.47 25.298-56.47 56.47V1073c0 31.172 25.298 56.47 56.47 56.47h112.94c31.173 0 56.471-25.298 56.471-56.47V960.059c0-31.172-25.298-56.47-56.47-56.47"></path>{" "}
            </g>
          </svg>
          <div className="w-0.5 ml-5 bg-black" />
        </div>
      </div>

      <input
        type="text"
        className="h-20 py-3 px-32 block w-full focus:outline-none border-2 placeholder-grey border-white rounded-full text-2xl focus:border-grey  bg-light-grey"
        placeholder={placeHolder}
        onChange={(e) => setInputWord(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSubmit(inputWord);
        }}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <button
          type="submit"
          onClick={() => onSubmit(inputWord)}
          className="w-14 h-14 bg-purple rounded-full"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="0.048"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
    </form>
  );
}

export default InputField;
