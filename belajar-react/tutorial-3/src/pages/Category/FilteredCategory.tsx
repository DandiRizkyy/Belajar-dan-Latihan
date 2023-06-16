type CategoryFilterSearchProps = {
  setFilterValue: (value: string) => void;
};

export const CategoryFilterSearch = (props: CategoryFilterSearchProps) => {
  const { setFilterValue } = props;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilterValue(value);
  };
  return (
    <div className="flex justify-center items-center py-2 ">
      <input
        className="py-1 px-12 border border-black rounded-xl text-center shadow-2xl shadow-black"
        type="text"
        placeholder="search categories"
        onChange={handleInputChange}
      />
    </div>
  );
};
