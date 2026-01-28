import React from 'react';

import { useQuery } from '@tanstack/react-query';

import axiosInstance from '@/lib/axiosInstance';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserParams {
  searchWord?: string;
}

async function getUsers(params: UserParams) {
  const response = await axiosInstance.get('/users', {
    params,
  });
  const { data } = response;
  return data;
}

export default function QueryKey() {
  const [searchWord, setsearchWord] = React.useState('');

  const { data: users, isLoading } = useQuery<User[]>({
    queryKey: ['users', { searchWord }],
    queryFn: () => getUsers({ searchWord }),
  });

  return (
    <div className="flex flex-col gap-2">
      <h2>QueryKey</h2>

      <div className="flex flex-row">
        <input
          type="text"
          className="border p-2"
          value={searchWord}
          onChange={(event) => setsearchWord(event.target.value)}
        />
        <button type="button" className="w-20">
          검색
        </button>
      </div>

      {isLoading && <div>Loading...</div>}

      {users?.map((user) => (
        <div key={user.id} className="mb-2 border p-2">
          <h2>이름: {user.name}</h2>
          <h3>이메일: {user.email}</h3>
        </div>
      ))}
    </div>
  );
}
