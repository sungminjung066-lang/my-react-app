import React from 'react';

interface GridLayoutProps extends React.ComponentPropsWithRef<'div'> {
  children: React.ReactNode;
}

export function GridLayout({ children }: GridLayoutProps) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {children}
    </div>
  );
}
