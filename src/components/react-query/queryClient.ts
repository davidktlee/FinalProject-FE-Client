export {}
// import React from 'react';
// import { QueryClient } from 'react-query';
// import useToast from '../common/toast/hooks/useToast';
// import { getRandomId } from '../common/util/randomId';



// todo : 테일윈드 toast 컴포넌트 만들기
// type={type} message={message} position={position} timer={timer}
// const queryErrorHandler = (error: unknown) => {
//   const {fireToast} = useToast()
//   const id = 'react-query-error';
//   const title = error instanceof Error ? error.toString().replace(/^Error:\s*/,'') : '서버와의 연결에 문제가 발생하였습니다.'
//  fireToast({
//   id,
//   message:title,
//   position: 'bottom',
//   timer:2000,
//   type:'failed'
//  })
// }


// export const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       onError: queryErrorHandler,
//       staleTime: 600000, // 10 minutes
//       cacheTime: 900000, // 15 minutes
//       // refetchOnMount: false,
//       // refetchOnReconnect: false,
//       // refetchOnWindowFocus: false, 
//     },
//     mutations: {
//       onError: queryErrorHandler
//     }
//   }
// })