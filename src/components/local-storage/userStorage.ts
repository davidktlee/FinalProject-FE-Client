import { Token } from "../auth/types/userTypes";


const LOCALSTORAGE_USER_KEY = 'lenssis_user';

export const getStoredToken = ():Token => {
  const storedUser = localStorage.getItem(LOCALSTORAGE_USER_KEY);
  
  return storedUser ? JSON.parse(storedUser) : null;
}

export const setStoredToken = (user:Token) => {
  
  const obj = {
    ...user,
    expiresIn:Date.now()
  }
  // currentDate는 토큰이 발급된 시간.
  // 토큰이 발급된 시간 + 30분보다 현재 시간이 더 크다면 (date.now > currentDate + 300,000)
  // refresh토큰을 사용하여 새로운 accessToken을 받을 수 있는 http request를 useQuery를 통해 만들어야 함..
  // useEffect로 시간을 체크..
  // 근데 꼭 useQuery를 사용하지 않아도 될수도..?
  localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(obj))
}



export const clearStoredToken = () => {
  localStorage.removeItem(LOCALSTORAGE_USER_KEY)
}

