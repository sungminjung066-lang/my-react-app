import { Content } from '@/components/Content';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function GenericTypePage() {
  const value = returnValue<number>(1);
  const value1 = returnValue<string>('abc');
  const value2 = returnValue({ name: '홍길동', age: 1 });

  console.log('value', value);
  console.log('value1', value1);
  console.log('value1', value2);

  // , 로 해결한다.
  // const getValue = <T,>(arg: T): T => arg;

  return (
    <div>
      <Header />
      <Content>
        GenericType Page
        <Test<string> data={'aaa'} />
        <Test data={10} />
        <Test data={{ name: '홍길동', age: 1 }} />
      </Content>
      <Footer />
    </div>
  );
}

// Generic Type 사용하는 쪽에서 결정해라
function returnValue<T>(value: T): T {
  return value;
}

interface TestProps<T> {
  data: T;
}
function Test<T>({ data }: TestProps<T>) {
  console.log('data', data);
  return <div>{String(data)}</div>;
}

// const getValue = <T,>(arg: T): T => arg;
