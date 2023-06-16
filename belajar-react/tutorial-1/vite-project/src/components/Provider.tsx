import axios from "axios";
import { ReactNode, createContext, useState } from "react";

type ContextType = {
  exampleValue: string;
  count: number;
  categories: Categories[];
  fetchDataAdmin: () => void;
  saveCategory: (data: SaveCategory) => void;
  updateCategory: (data: UpdateCategory) => void;
  deleteCategory: (data: DeleteCategory) => void;
  addCount: React.Dispatch<React.SetStateAction<number>>;
} | null;

type ProviderProps = {
  children: ReactNode;
};

type Categories = {
  id: number;
  name: string;
  avatar?: string;
  isActive?: boolean;
};

type SaveCategory = {
  id?: number;
  name: string;
  avatar?: string;
  isActive?: boolean;
};

type UpdateCategory = {
  id: number;
  name: string;
  avatar?: string;
  isActive?: boolean;
};

type DeleteCategory = {
  id: number;
};

export const AppContext = createContext<ContextType>(null);

export const Provider = ({ children }: ProviderProps) => {
  const exampleValue = "this is example from context";
  const [count, setCount] = useState(1);
  const addCount = () => {
    setCount((prevState) => prevState + 1);
  };
  const fetchDataAdmin = async () => {
    const response = await axios.get(
      "https://6423f83a47401740432fbc9e.mockapi.io/admins"
    );

    setCategories(response.data);
  };
  const saveCategory = async (data: SaveCategory) => {
    const response = await axios.post(
      "https://6423f83a47401740432fbc9e.mockapi.io/admins",
      {
        name: data.name,
      }
    );

    setCategories([...categories, response.data]);
  };
  const updateCategory = async (data: UpdateCategory) => {
    await axios.put(
      `https://6423f83a47401740432fbc9e.mockapi.io/admins/${data.id}`,
      {
        name: data.name,
      }
    );

    fetchDataAdmin();
  };

  const deleteCategory = async (data: DeleteCategory) => {
    await axios.delete(
      `https://6423f83a47401740432fbc9e.mockapi.io/admins/${data.id}`
    );
    fetchDataAdmin();
  };

  const [categories, setCategories] = useState<Categories[]>([]);
  return (
    <AppContext.Provider
      value={{
        exampleValue,
        count,
        addCount,
        categories,
        fetchDataAdmin,
        saveCategory,
        updateCategory,
        deleteCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
