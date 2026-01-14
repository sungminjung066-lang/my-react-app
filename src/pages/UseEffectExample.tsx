import React from 'react';

interface FetchedData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function CleanupComponent() {
  React.useEffect(() => {
    console.log('CleanupComponent mounted');
    // 이벤트 리스너, 타이머 등 설정
    // document.addEventListener('click', () => {});
    return () => {
      console.log('CleanupComponent unmounted');
      // 이벤트 리스너, 타이머 등 설정 해제
      // document.removeEventListener('click', () => {});
    };
  }, []);

  return <div>Cleanup Component</div>;
}

export default function UseEffectExample() {
  const [count, setCount] = React.useState(0);
  const [age, setAge] = React.useState(20);

  const [showCleanup, setShowCleanup] = React.useState(true);

  const [fetchedData, setFetchedData] = React.useState<FetchedData>({
    userId: 0,
    id: 0,
    title: '',
    completed: false,
  } as FetchedData);

  React.useEffect(() => {
    // console.log('UseEffectExample component mounted');
    // api 호출 등 초기화 작업 수행
    fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then((response) => response.json())
      .then((data) => {
        // console.log('Fetched data:', data);
        setFetchedData(data);
      });
  }, []); // 빈 배열을 넣으면 마운트 될 때만 실행

  React.useEffect(() => {
    console.log('Count state has changed:', count);
  }, [count]);

  React.useEffect(() => {
    console.log('Age state has changed:', age);
  }, [age]);
  // console.log('Age state has changed:', age);

  // cleanup function 예제
  React.useEffect(() => {
    console.log('cleanup test - count change', count);

    // 컴포넌트가 언마운트되거나, 다음 effect가 실행되기 전에 정리 함수가 실행됩니다.
    return () => {
      console.log('================ cleanup test - count cleanup', count);
    };
  }, [count]);

  // console.log('====== UseEffectExample component rendered');

  return (
    <div>
      <h1>UseEffect Example Page</h1>
      <button onClick={() => setCount(count + 1)}>Count Up</button>
      <p>Count: {count}</p>
      <button onClick={() => setAge(age + 1)}>Age Up</button>
      <p>Age: {age}</p>
      <div>
        Fetched Data:
        <p>userId: {fetchedData.userId}</p>
        <p>title: {fetchedData.title}</p>
        <p>
          completed: <input type="checkbox" checked={fetchedData.completed} readOnly />
        </p>
      </div>
      <button onClick={() => setShowCleanup((prev) => !prev)}>Toggle Cleanup Component</button>
      {showCleanup && <CleanupComponent />}
    </div>
  );
}
