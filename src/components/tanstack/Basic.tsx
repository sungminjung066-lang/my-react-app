import { useQuery } from '@tanstack/react-query';

import axiosInstance from '@/lib/axiosInstance';

interface User {
  id: number;
  name: string;
  email: string;
}

async function getUsers() {
  const response = await axiosInstance.get('/users');
  const { data } = response;
  return data;
}

export default function Basic() {
  const { data: users, isLoading } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: getUsers,
    // staleTime: 0,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {users?.map((user) => (
        <div key={user.id} className="mb-2 border p-2">
          <h2>이름: {user.name}</h2>
          <h3>이메일: {user.email}</h3>
        </div>
      ))}
    </div>
  );
}
