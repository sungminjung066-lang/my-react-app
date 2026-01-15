// interface MyNameProps {
//   name: string;
//   id?: string;
//   password?: string;
// }
import React from 'react';

import { MyContext } from './context';

// export function MyName({ name, id = 'id123', password }: MyNameProps) {
//   return (
//     <>
//       <div className="text-3xl font-bold underline">My Name: {name}</div>
//       <div>ID: {id}</div>
//       {password && <div>Password: {password}</div>}
//     </>
//   );
// }

export function MyName() {
  const { name } = React.useContext(MyContext);

  console.log('rendering MyName');
  return (
    <>
      <div className="text-3xl font-bold underline">My Name: {name}</div>
    </>
  );
}
