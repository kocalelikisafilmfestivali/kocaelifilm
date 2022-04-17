import { FC } from "react";

interface TextAreaBoxProps {
  label: string;
  id: string;
}

const TextAreaBox: FC<TextAreaBoxProps> = ({ label, id }) => {
  return (
    <div className="sm:grid text-left sm:grid-cols-[200px,1fr,1fr] sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
      >
        {label}
      </label>
      <div className="mt-1 sm:mt-0 sm:col-span-2">
        <textarea
          id={id}
          rows={6}
          className="block w-full border border-gray-300 rounded-md shadow-sm resize-none sm:text-sm"
          defaultValue={""}
        />
      </div>
    </div>
  );
};

export default TextAreaBox;
