import React from 'react';

function expensiveCalculation(num: number): number {
  console.log('Performing expensive calculation...');
  for (let i = 0; i < 10000; i++) {
    num += 1;
  }
  return num;
}

export default function UseMemoPage() {
  const [count, setCount] = React.useState(0);
  const [age, setAge] = React.useState(20);

  const memoizedValue = React.useMemo(() => {
    console.log('useMemo 실행');
    return count * 2;
  }, [count]);
  // const memoizedValue = count * 2;

  // 복잡한 연산을 한 결과를 변수로 저장할때 useMemo 사용
  // const value = expensiveCalculation(0); // 복잡한 연산을 할 경우 매번 렌더링 할때 마다 실행하는 방식은 비효율적
  // const value = React.useMemo(() => expensiveCalculation(0), []);
  const value = React.useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h1>UseMemo Example Page</h1>
      <button onClick={() => setCount(count + 1)}>Count Up</button>
      <button onClick={() => setAge(age + 1)}>Age Up</button>
      <p>Count: {count}</p>
      <p>Age: {age}</p>
      <p>Memoized Value (count * 2): {memoizedValue}</p>
      <p>Expensive Calculation Result: {value}</p>
    </div>
  );
}
