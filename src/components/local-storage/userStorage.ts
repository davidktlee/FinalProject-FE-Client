import { UserDataType } from "../auth/hooks/useUser";

const LOCALSTORAGE_USER_KEY = 'lenssis_user';

export const getStoredUser = ():UserDataType | null => {
  const storedUser = localStorage.getItem(LOCALSTORAGE_USER_KEY);
  return storedUser ? JSON.parse(storedUser) : null;
}

export const setStoredUser = (user:UserDataType) => {
  localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(user))
}

export const clearStoredUser = () => {
  localStorage.removeItem(LOCALSTORAGE_USER_KEY)
}

