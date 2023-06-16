import { useMemo } from "react";

interface ListUserProps {
  nama?: string;
  users: User[];
}

interface User {
  id: number;
  url: string;
  name: string;
  isActive?: boolean;
}

export const ListUser = ({ users }: ListUserProps) => {
  const data = useMemo(() => {
    return users;
  }, [users]);

  const handleChangeStatus = (id: number) => {
    const findIndex = data.find((value) => value.id === id);
    console.log(findIndex);

    data.map((user) => {
      if (user.id === findIndex?.id) {
        return {
          ...user,
          isActive: "Active",
        };
      }
      return user;
    });
  };

  return (
    <div>
      <h1>Daftar User</h1>
      {data.map((user: User, idx: number) => {
        return (
          <ul key={idx}>
            <li>
              Nama User: {user.name} - {user.isActive ? "active" : "not active"}{" "}
              <button onClick={() => handleChangeStatus(user.id)}>
                Change Status
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
