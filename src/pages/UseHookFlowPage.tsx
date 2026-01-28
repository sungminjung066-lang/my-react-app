import React from 'react';

import { Content } from '@/components/Content';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function UseHookFlowPage() {
  const [count, setCount] = React.useState(0);
  const [show, setShow] = React.useState(false);

  React.useLayoutEffect(() => {
    console.log('2. ========= useLayoutEffect 브라우저 페인트 전');
    // DOM 의 위치, 크기 알수가 있다.
  }, []);

  React.useLayoutEffect(() => {
    console.log('3. ========= useLayoutEffect Change Count 브라우저 페인트 전', count);
    // DOM 의 위치, 크기 알수가 있다.

    return () => {
      console.log(
        '3.5. useLayoutEffect (Cleanup): 다음 useLayoutEffect 실행 전 또는 언마운트 시 정리',
      );
    };
  }, [count]);

  React.useEffect(() => {
    console.log('4. ========= useEffect 마운트');
  }, []);

  React.useEffect(() => {
    console.log('5. ========= useEffect Change Count', count);

    return () => {
      console.log('5.5. useEffect (Cleanup): 다음 useEffect 실행 전 또는 언마운트 시 정리');
    };
  }, [count]);

  const initRef = React.useRef(true);
  React.useEffect(() => {
    if (initRef.current) {
      initRef.current = false;
      return;
    }
    console.log('5. ========= useEffect Change Count', count);
  }, [count]);

  console.log('1. ========= Rendering');
  return (
    <div>
      <Header />
      <Content>
        UseHookFlow Page
        {count}
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          클릭
        </button>
        <button type="button" onClick={() => setShow((prev) => !prev)}>
          클릭
        </button>
        {show && <HookFlowComponent />}
      </Content>
      <Footer />
    </div>
  );
}

function HookFlowComponent() {
  React.useLayoutEffect(() => {
    console.log('2. [HookFlowComponent] ========= useLayoutEffect 브라우저 페인트 전');

    return () => {
      console.log(
        '2.5. [HookFlowComponent] useLayoutEffect (Cleanup): 다음 useLayoutEffect 언마운트 시 정리',
      );
    };
  }, []);

  React.useEffect(() => {
    console.log('3. [HookFlowComponent] ========= useEffect 마운트');

    return () => {
      console.log('3.5. [HookFlowComponent] useEffect (Cleanup): 다음 useEffect 언마운트 시 정리');
    };
  }, []);

  console.log('1. [HookFlowComponent] ========= Rendering');
  return <div>Mount/Unmount 테스트</div>;
}
