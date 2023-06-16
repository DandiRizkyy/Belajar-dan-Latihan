import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../provider/Provider";

export const List = () => {
  // bagian provider
  const context = useContext(AppContext);
  useEffect(() => {
    context?.fetchDataAdmin();
  }, []);
  // bagian provider

  console.log(context?.categories);

  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/category/new");
  };
  const handleEdit = (id: number) => {
    navigate(`/category/edit/${id}`);
  };

  const handleDelete = (id: number) => {
    context?.deleteCategory({ id });
  };

  const [filterValue, setFilterValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value.toLowerCase());
  };

  const filteredCategories = context?.categories?.filter((category) =>
    filterValue === ""
      ? true
      : category.isActive
      ? filterValue === "active"
      : filterValue === "inactive"
  );

  return (
    <>
      <h4>List of Category</h4>
      <div className="flex justify-center items-center py-2 ">
        <input
          className="py-1 px-12 border border-black rounded-xl text-center shadow-2xl shadow-black"
          type="text"
          placeholder="Filter Status.."
          onChange={handleInputChange}
        />
      </div>
      <button
        type="button"
        onClick={handleRedirect}
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Add New Category
      </button>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories?.map((category) => (
              <tr
                key={category.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {category.id}
                </th>
                <td className="px-6 py-4">{category.name}</td>
                <td className="px-6 py-4">
                  {category.isActive ? "Active" : "Inactive"}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEdit(category.id)}
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
