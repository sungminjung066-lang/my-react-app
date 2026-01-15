// export function MyAge({ age }: { age: number }) {
//   return <div className="text-2xl">My Age: {age}</div>;
// }
import React from 'react';

import { MyContext } from './context';

export function MyAge() {
  const { age } = React.useContext(MyContext);

  console.log('rendering MyAge');
  return <div className="text-2xl">My Age: {age}</div>;
}
