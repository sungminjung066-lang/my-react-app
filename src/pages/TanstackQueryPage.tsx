// import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Content } from '@/components/Content';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
// import Basic from '@/components/tanstack/Basic';

// import Mutation from '@/components/tanstack/Mutation';
import QueryKey from '@/components/tanstack/QueryKey';

// import BasicAxios from '@/components/tanstack/BasicAxios';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1분간 데이터를 fresh 상태로 유지
      refetchOnWindowFocus: false, // 윈도우 포커스 시 자동 refetch 비활성화
      refetchOnMount: false,
    },
  },
});

export default function TanstackQueryPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <Content>
          TanstackQuery Page
          {/* <Basic /> */}
          {/* <BasicAxios /> */}
          {/* <Mutation /> */}
          <QueryKey />
        </Content>
        <Footer />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
