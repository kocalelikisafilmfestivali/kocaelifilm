import { FC, useState } from "react";
import InputBox from "../components/InputBox";
import SelectBox from "../components/SelectBox";
import TextAreaBox from "../components/TextAreaBox";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import ReCAPTCHA from "react-google-recaptcha";
interface RequestFormProps {
  name: string;
  about: string;
  city: string;
  email: string;
  phone: string;
  address: string;
  link: string;
  title: string;
  description: string;
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .min(2, "İsminiz en az iki karakter içermek zorunda.")
      .required("İsim zorunludur."),
    about: yup.string().required("Bu alan zorunludur."),
    city: yup.string().required("Bu alan zorunludur."),
    email: yup.string().email("Geçersiz email.").required("Email zorunludur."),
    phone: yup
      .string()
      .matches(phoneRegExp, "Geçersiz numara.")
      .required("Telefon numarası zorunludur"),
    address: yup.string().required("Bu alan zorunludur."),
    link: yup.string().required("Bu alan zorunludur."),
    title: yup.string().required("Bu alan zorunludur."),
    description: yup.string().required("Bu alan zorunludur."),
  })
  .required();

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestFormProps>({
    resolver: yupResolver(schema),
  });
  const QQLREQ = gql`
    mutation CreateApplication($data: ApplicationCreateInput!) {
      createApplication(data: $data) {
        id
      }
    }
  `;
  const router = useRouter();
  const [validUser, setValidUser] = useState(false);
  const [mutateFunction, { loading }] = useMutation(QQLREQ);
  const onSubmit = (formdata: RequestFormProps) => {
    mutateFunction({ variables: { data: formdata } })
      .then(
        ({
          data: {
            createApplication: { id },
          },
          errors,
        }) => {
          if (id) {
            toast.success("Başvurunuz gönderildi.", { duration: 4000 });
            router.push("/");
          }
          if (errors) {
            toast.error("Başvurunuz gönderilemedi.", { duration: 4000 });
          }
        }
      )
      .catch((_) => {
        toast.error("Başvurunuz gönderilemedi.", { duration: 4000 });
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-10 sm:py-20 box">
      <h2 className="mb-10 text-3xl font-bold tracking-tight text-black sm:text-4xl">
        Başvuru Formu
      </h2>
      <div className="max-w-3xl p-5 mx-auto space-y-6 bg-white rounded-md sm:p-8 shadow-selectShadow sm:space-y-5">
        <InputBox
          props={{ ...register("name") }}
          borderless
          label="İsim & Soyisim"
          id="name"
        />
        {errors.name && (
          <div className="text-sm text-right text-red-500">
            {errors.name.message}
          </div>
        )}
        <InputBox
          props={{ ...register("phone") }}
          label="Telefon Numarası"
          id="phone"
        />
        {errors.phone && (
          <div className="text-sm text-right text-red-500">
            {errors.phone.message}
          </div>
        )}
        <InputBox props={{ ...register("email") }} label="Email" id="email" />
        {errors.email && (
          <div className="text-sm text-right text-red-500">
            {errors.email.message}
          </div>
        )}
        <TextAreaBox
          label="Hakkınızda"
          id="about"
          props={{ ...register("about") }}
        />
        {errors.about && (
          <div className="text-sm text-right text-red-500">
            {errors.about.message}
          </div>
        )}
        <SelectBox props={{ ...register("city") }} label="Şehir" id="city" />
        {errors.city && (
          <div className="text-sm text-right text-red-500">
            {errors.city.message}
          </div>
        )}
        <TextAreaBox
          props={{ ...register("address") }}
          label="Adres"
          id="address"
        />
        {errors.address && (
          <div className="text-sm text-right text-red-500">
            {errors.address.message}
          </div>
        )}
        <InputBox
          props={{ ...register("title") }}
          label="Video Başlığı"
          id="title"
        />
        {errors.title && (
          <div className="text-sm text-right text-red-500">
            {errors.title.message}
          </div>
        )}
        <InputBox
          props={{ ...register("link") }}
          label="Video Linki"
          id="link"
        />
        {errors.link && (
          <div className="text-sm text-right text-red-500">
            {errors.link.message}
          </div>
        )}
        <TextAreaBox
          props={{ ...register("description") }}
          label="Video Açıklaması"
          id="description"
        />
        {errors.description && (
          <div className="text-sm text-right text-red-500">
            {errors.description.message}
          </div>
        )}
        <div className="flex justify-end">
          <ReCAPTCHA
            sitekey="6Le2qYEfAAAAAO5zoMXjH4zdnE0bm6RGNKqBrK1L"
            onChange={(e) => {
              if (e) {
                setValidUser(true);
              } else {
                router.push("/");
                toast.error("Geçersiz kullanıcı.", { duration: 4000 });
              }
            }}
          />
        </div>

        <div className="flex justify-end mt-6">
          <button
            disabled={loading || !validUser}
            type="submit"
            className="flex disabled:opacity-60 disabled:cursor-not-allowed justify-center w-[200px] px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md"
          >
            Başvur
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
