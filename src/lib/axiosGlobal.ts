import axiosGlobal, { AxiosError } from 'axios';

axiosGlobal.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axiosGlobal.defaults.headers.common['Authorization'] = 'Bearer TOKEN';
axiosGlobal.defaults.headers.post['Content-Type'] = 'application/json';
axiosGlobal.defaults.timeout = 5000; // 5초 제한 [2, 9]

axiosGlobal.interceptors.request.use(
  (config) => {
    config.headers['X-Custom-Header'] = 'InterceptorExample';

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export interface ApiError {
  message: string;
  statusCode: number;
  details?: string;
}

axiosGlobal.interceptors.response.use(
  (response) => {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    return response;
  },
  (error) => {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행

    let errorObj: ApiError = {
      message: '알 수 없는 에러',
      statusCode: -1,
      details: error instanceof Error ? error.message : String(error),
    };

    if (axiosGlobal.isAxiosError(error)) {
      const axiosError = error as AxiosError;

      if (axiosError.response) {
        errorObj = {
          statusCode: axiosError.response.status,
          message: axiosError.response.statusText,
          details: JSON.stringify(axiosError.response.data),
        };
        console.log('axiosError.response', axiosError.response);
      } else if (axiosError.request) {
        errorObj = {
          message: '네트워크 에러: 서버에 연결할 수 없습니다',
          statusCode: 0,
          details: '인터넷 연결을 확인하세요',
        };
      } else {
        errorObj = {
          message: '요청 설정 에러',
          statusCode: -1,
          details: axiosError.message,
        };
      }
    }

    return Promise.reject(errorObj);
  },
);

export default axiosGlobal;
