import { useContext, useEffect, useState } from "react";
import { AppContext } from "./Provider";

const ListCategory = () => {
  const context = useContext(AppContext);
  // console.log(context);
  const onHandleChange = () => {
    context?.addCount(context.count + 1);
  };

  useEffect(() => {
    context?.fetchDataAdmin();
  }, []);
  console.log(context?.categories);
  const [name, setName] = useState("");
  const [id, setId] = useState<number | undefined>(undefined);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (id) {
      context?.updateCategory?.({
        id: id,
        name: name,
      });
      return;
    }

    context?.saveCategory?.({
      name: name,
    });
  };

  const findCategoryById = (id: number) => {
    const findCategory = context?.categories.find(
      (category) => category.id === id
    );
    return findCategory;
  };

  const handleEdit = (id: number) => {
    const findCategory = findCategoryById(id);
    // console.log(findCategory);
    if (findCategory) {
      setName(findCategory.name);
      setId(findCategory.id);
    }
  };

  const handleDelete = (id: number) => {
    const findCategory = findCategoryById(id);

    if (findCategory) {
      context?.deleteCategory?.({ id: findCategory.id });
    }
  };

  return (
    <>
      <p>{context?.exampleValue}</p>
      <p>Jumlah: {context?.count}</p>
      <button onClick={onHandleChange}>Tambah 1</button>
      <form onSubmit={handleSubmit}>
        <h4>List of Categories</h4>
        <h2>Input Name</h2>
        <p>test input: {name}</p>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button type="submit">Save Name</button>
      </form>
      <table border={1} width={"100%"}>
        <thead>
          <tr>
            <td>No</td>
            <td>Nama</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {context?.categories?.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>{category.isActive ? "Active" : "Deactive"}</td>
              <td>
                <button type="button" onClick={() => handleEdit(category.id)}>
                  Edit
                </button>
                <button type="button" onClick={() => handleDelete(category.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListCategory;
