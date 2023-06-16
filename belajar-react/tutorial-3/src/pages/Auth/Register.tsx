import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../../provider/Provider";
import axios from "axios";

interface FormProps {
  name: string;
  email: string;
  password: string;
}

export const Register = () => {
  //   const context = useContext(AppContext);
  //   useEffect(() => {
  //     context?.registerUser;
  //   }, []);

  const schema = yup
    .object({
      name: yup.string().required("Name is required"),
      email: yup.string().email().required("Email is required"),
      password: yup.string().min(5).required("Password is required"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const onSubmit = async (data: FormProps) => {
    // context?.saveCategory({ name: data.name });
    // context?.registerUser({
    //   name: data.name,
    //   email: data.email,
    //   password: data.password,
    // });
    await axios.post("https://mock-api.arikmpt.com/api/user/register", {
      name: data.name,
      email: data.email,
      password: data.password,
    });
    navigate("/login");
  };

  return (
    <>
      <h4>Hi silahkan register</h4>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <div>
            <input
              // {...field}
              value={field.value}
              onChange={field.onChange}
              type="text"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="input name here..."
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <div>
            <input
              // {...field}
              value={field.value}
              onChange={field.onChange}
              type="email"
              id="helper-email"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="input email here..."
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <div>
            <input
              // {...field}
              value={field.value}
              onChange={field.onChange}
              type="password"
              id="helper-password"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="input password here..."
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
        )}
      />

      <button
        onClick={handleSubmit(onSubmit)}
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Submit
      </button>
    </>
  );
};
