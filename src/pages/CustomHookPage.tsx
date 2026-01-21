import { Content } from '@/components/Content';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Counter } from '@/components/custom/Counter';
import { ProductCounter } from '@/components/custom/ProductCounter';
import { Toggle } from '@/components/custom/Toggle';

export default function CustomHookPage() {
  return (
    <div>
      <Header />
      <Content className="flex flex-col gap-2">
        CustomHook Page
        <div className="flex flex-row gap-5">
          <Counter title="카운터 1" />
          <Counter title="카운터 2" initialValue={100} />
        </div>
        <ProductCounter />
        <Toggle />
      </Content>
      <Footer />
    </div>
  );
}
