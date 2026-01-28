import React from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import axiosInstance from '@/lib/axiosInstance';

interface User {
  id?: number;
  username: string;
  email: string;
}

async function postUser(user: User) {
  return await axiosInstance.post('/posts', user);
}

async function updateUser(user: User) {
  return await axiosInstance.put('/posts/1', user);
}

async function deleteUser(id: number) {
  return await axiosInstance.delete('/posts/1', {
    params: { id },
  });
}

export default function Mutation() {
  const queryClient = useQueryClient();

  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');

  const [username1, setUsername1] = React.useState('홍길동');
  const [email1, setEmail1] = React.useState('abc@abc.com');

  const createMutation = useMutation({
    mutationFn: postUser,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createMutation.mutate({ username, email });
  };

  const handleUpdate = () => {
    updateMutation.mutate({ username: username1, email: email1 });
  };

  const handleDelete = () => {
    deleteMutation.mutate(101);
  };

  return (
    <div>
      Mutation
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          className="border p-2"
          value={username}
          placeholder="이름을 입력하세요."
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="text"
          className="border p-2"
          value={email}
          placeholder="이메일을 입력하세요."
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit">전송</button>
      </form>
      {/* 수정 */}
      <div className="flex flex-col gap-2">
        <input
          type="text"
          className="border p-2"
          value={username1}
          placeholder="이름을 입력하세요."
          onChange={(event) => setUsername1(event.target.value)}
        />
        <input
          type="text"
          className="border p-2"
          value={email1}
          placeholder="이메일을 입력하세요."
          onChange={(event) => setEmail1(event.target.value)}
        />
        <button type="button" onClick={handleUpdate}>
          수정
        </button>
      </div>
      <button type="button" onClick={handleDelete}>
        삭제
      </button>
    </div>
  );
}
