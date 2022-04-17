import { FC } from "react";
import InputBox from "../components/InputBox";
import SelectBox from "../components/SelectBox";
import TextAreaBox from "../components/TextAreaBox";

interface FormProps {}

const Form: FC<FormProps> = () => {
  return (
    <form className="py-10 sm:py-20 box">
      <h2 className="mb-10 text-3xl font-bold tracking-tight text-black sm:text-4xl">
        Başvuru Formu
      </h2>
      <div className="max-w-3xl p-5 mx-auto space-y-6 bg-white rounded-md sm:p-8 shadow-selectShadow sm:space-y-5">
        <InputBox borderless label="İsim" id="name" />
        <InputBox label="Soy İsim" id="lastname" />
        <TextAreaBox label="Hakkınızda" id="about" />
        <SelectBox label="Ülke" id="country" />
        <TextAreaBox label="Adres" id="address" />
        <InputBox label="Video Linki" id="link" />
        <TextAreaBox label="Video Açıklaması" id="videodescription" />
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="flex justify-center w-[200px] px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md"
          >
            Başvur
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
