import { FC } from "react";

interface SelectBoxProps {
  label: string;
  id: string;
  borderless?: boolean;
}

const SelectBox: FC<SelectBoxProps> = ({ label, id, borderless }) => {
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
        <select
          id={id}
          className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
          defaultValue="Canada"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>
    </div>
  );
};

export default SelectBox;
