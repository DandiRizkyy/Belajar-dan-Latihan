import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useEffect } from "react";
import { AppContext } from "../../provider/Provider";
import { useNavigate } from "react-router-dom";

export const New = () => {
  interface FormProps {
    name: string;
  }

  const schema = yup
    .object({
      name: yup.string().required("Name is required"),
    })
    .required();

  const context = useContext(AppContext);
  useEffect(() => {
    context?.fetchDataAdmin();
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const onSubmit = (data: FormProps) => {
    context?.saveCategory({ name: data.name });
    navigate("/category");
  };

  return (
    <div>
      <label
        htmlFor="helper-text"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Add New List
      </label>
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
              placeholder="input here..."
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
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
    </div>
  );
};
