import React from 'react';

import axiosInstance from '@/lib/axiosInstance';

interface User {
  id?: number;
  username: string;
  email: string;
}

export default function MutationAxios() {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user: User = {
      username,
      email,
    };

    const response = await axiosInstance.post('/posts', user);
    const { data } = response;
    console.log('data', data);
  };

  return (
    <div>
      Mutation Axios
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
    </div>
  );
}
