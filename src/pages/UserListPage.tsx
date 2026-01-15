import React from 'react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

function LoadingSpinner() {
  return (
    <div className="flex min-h-screen pt-40 justify-center">
      <div className="text-center">
        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        <p className="mt-4 text-lg text-gray-600">사용자 정보를 불러오는 중...</p>
      </div>
    </div>
  );
}

function ErrorMessage({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div className="flex min-h-screen pt-40 justify-center">
      <div className="max-w-md rounded-lg bg-red-50 p-6 text-center">
        <div className="mb-4 text-5xl">❌</div>
        <h2 className="mb-2 text-xl font-bold text-red-700">오류가 발생했습니다</h2>
        <p className="mb-4 text-red-600">{message}</p>
        <button
          onClick={onRetry}
          className="rounded-lg bg-red-500 px-6 py-2 font-semibold text-white hover:bg-red-600"
        >
          다시 시도
        </button>
      </div>
    </div>
  );
}

interface UserCardProps {
  user: User;
}
function UserCard({ user }: UserCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg">
      <h2 className="mb-2 text-xl font-bold text-gray-800">{user.name}</h2>
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-start">
          <span className="mr-2">📧</span>
          <span className="break-all">{user.email}</span>
        </div>
        <div className="flex items-start">
          <span className="mr-2">📞</span>
          <span>{user.phone}</span>
        </div>
        <div className="flex items-start">
          <span className="mr-2">🌐</span>
          <span className="break-all">{user.website}</span>
        </div>
        <div className="flex items-start">
          <span className="mr-2">🏙️</span>
          <span>{user.address.city}</span>
        </div>
        <div className="flex items-start">
          <span className="mr-2">🏢</span>
          <span>{user.company.name}</span>
        </div>
      </div>
    </div>
  );
}

function UserCardContainer({ users }: { users: User[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

// function GridContainer({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//       {children}
//     </div>
//   );
// }

interface UserHeaderProps {
  users: User[];
  isLoading: boolean;
  fetchUsers: () => Promise<void>;
}

function UserHeader({ users, isLoading, fetchUsers }: UserHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <div className="text-4xl font-bold text-gray-800">👥 User Directory</div>
        <div className="mt-2 text-gray-600">총 {users.length}명의 사용자</div>
      </div>

      <button
        className="flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-blue-600 hover:shadow-xl hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isLoading}
        onClick={fetchUsers}
      >
        새로고침
      </button>
    </div>
  );
}

export default function UserListPage() {
  const [users, setUsers] = React.useState<User[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      setError('');

      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : '네트워크 에러가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  let content = null;

  if (error) {
    content = <ErrorMessage message={error} onRetry={fetchUsers} />;
  } else if (isLoading) {
    content = <LoadingSpinner />;
  } else {
    // content = (
    //   <GridContainer>
    //     {users.map((user) => (
    //       <UserCard key={user.id} user={user} />
    //     ))}
    //   </GridContainer>
    // );
    content = <UserCardContainer users={users} />;
  }

  // console.log('======================UserListPage Rendered======================');
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 p-8 w-[80vw]">
      <div className="mx-auto max-w-7xl">
        <UserHeader users={users} isLoading={isLoading} fetchUsers={fetchUsers} />
        {content}
      </div>
    </div>
  );
}
