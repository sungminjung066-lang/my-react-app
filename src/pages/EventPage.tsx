import React from 'react';

import { Content } from '@/components/Content';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function EventPage() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('event.target', event.target);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('event.target', event.target);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('event.target', event.target);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log('event.target', event.target);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log('event.target', event.target);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // event.stopPropagation();
    console.log('event.target', event.target);
  };

  const handleAClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    console.log('event.target', event.target);
  };

  const [isWarning, setIsWarning] = React.useState(false);
  const [num, setNum] = React.useState<number>();

  const handleWarnClick = (newNum: number) => {
    setIsWarning(!isWarning);
    setNum(newNum);
  };

  return (
    <div>
      <Header />
      <Content className="flex flex-col gap-2">
        Event Page
        <button type="button" onClick={handleClick}>
          버튼 클릭
        </button>
        <button type="button" onMouseDown={handleMouseDown}>
          버튼 마우스다운
        </button>
        <input type="text" className="border p-1" onChange={handleChange} />
        <input type="text" className="border p-1" onFocus={handleFocus} />
        <input type="text" className="border p-1" onBlur={handleBlur} />
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
        <a href="#" onClick={handleAClick}>
          a 태그 클릭
        </a>
        <div className="flex flex-row gap-0.5">
          <button type="button" onClick={() => handleWarnClick(1)}>
            {isWarning ? 'normal' : 'warning'} 1번
          </button>
          <button type="button" onClick={() => handleWarnClick(2)}>
            {isWarning ? 'normal' : 'warning'} 2번
          </button>
        </div>
        <Status isWarning={isWarning} num={num} />
      </Content>
      <Footer />
    </div>
  );
}

function Status({ isWarning, num }: { isWarning: boolean; num?: number }) {
  return (
    <div>
      {isWarning ? '경고' : '정상'} {num}번 버튼 클릭
    </div>
  );
}
