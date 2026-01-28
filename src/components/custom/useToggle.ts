import React from 'react';

export function useToggle() {
  const [isToggle, setIsToggle] = React.useState(false);

  const setToggle = () => {
    setIsToggle(!isToggle);
  };

  React.useEffect(() => {
    console.log('== mount useToggle');
  }, []);

  React.useEffect(() => {
    console.log('== Change isToggle useToggle', isToggle);
  }, [isToggle]);

  console.log('======== useToggle Rendering');
  return { isToggle, setToggle };
}
