import React from 'react';

import axiosInstance from '@/lib/axiosInstance';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function BasicAxios() {
  const [users, setUsers] = React.useState<User[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const getUsers = async () => {
    setIsLoading(true);

    const response = await axiosInstance.get('/users');
    const { data } = response;
    setUsers(data);
    setIsLoading(false);
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      Axios
      {users?.map((user) => (
        <div key={user.id} className="mb-2 border p-2">
          <h2>이름: {user.name}</h2>
          <h3>이메일: {user.email}</h3>
        </div>
      ))}
    </div>
  );
}
