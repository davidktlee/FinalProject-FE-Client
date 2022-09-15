import React from 'react';
import { QueryClient } from 'react-query';



// todo : 테일윈드 toast 컴포넌트 만들기




const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: () => {},
      staleTime: 600000, // 10 minutes
      cacheTime: 900000, // 15 minutes
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false, 
    },
    mutations: {
      onError: () => {}
    }
  }
})