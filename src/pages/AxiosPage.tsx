import React from 'react';

// import axiosGlobal from 'axios';

import { Content } from '@/components/Content';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import axiosGlobal from '@/lib/axiosGlobal';
import axiosInstance from '@/lib/axiosInstance';

export default function AxiosPage() {
  // 전역 axios
  const fetchData = async () => {
    try {
      const response = await axiosGlobal.get('/posts', {
        params: {
          _limit: 5,
        },
      });

      console.log('response.data', response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 인스턴스 axios
  const fetchInstanceData = async () => {
    try {
      const response = await axiosInstance.get('/posts/1/comments', {
        params: {
          _limit: 5,
        },
      });

      console.log('response.data', response.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    // 로그인 API 호출하고 Access Token 받은 후
    axiosGlobal.defaults.headers.common['Authorization'] = 'Bearer TOKEN';
    //
    fetchData();
    fetchInstanceData();
  }, []);

  return (
    <div>
      <Header />
      <Content>Axios Page</Content>
      <Footer />
    </div>
  );
}
