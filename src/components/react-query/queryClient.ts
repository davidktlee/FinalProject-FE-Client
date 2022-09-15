import React from 'react';
import { QueryClient } from 'react-query';



// todo : 테일윈드 toast 컴포넌트 만들기

const queryErrorHandler = (error: unknown) => {

  const id = 'react-query-error';
  const title = error instanceof Error ? error.toString().replace(/^Error:\s*/,'') : '서버와의 연결에 문제가 발생하였습니다.'

  // toast 를 custom hook 으로 만들어서 사용해야함.

}


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      staleTime: 600000, // 10 minutes
      cacheTime: 900000, // 15 minutes
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false, 
    },
    mutations: {
      onError: queryErrorHandler
    }
  }
})