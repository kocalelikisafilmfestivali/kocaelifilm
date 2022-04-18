import { FC } from "react";

interface InputBoxProps {
  label: string;
  id: string;
  borderless?: boolean;
  props: any;
}

const InputBox: FC<InputBoxProps> = ({ label, id, borderless, props }) => {
  return (
    <div
      className={`sm:grid text-left sm:grid-cols-[200px,1fr,1fr] sm:gap-4 sm:items-start ${
        borderless ? "" : "sm:border-t sm:border-gray-200"
      } sm:pt-5`}
    >
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
      >
        {label}
      </label>
      <div className="mt-1 sm:mt-0 sm:col-span-2">
        <input
          type="text"
          id={id}
          className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
          {...props}
        />
      </div>
    </div>
  );
};

export default InputBox;
