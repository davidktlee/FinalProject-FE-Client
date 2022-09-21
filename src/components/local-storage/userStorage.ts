import { UserDataType } from "../auth/types/userTypes";
import { currentDate } from "../common/util/date";

const LOCALSTORAGE_USER_KEY = 'lenssis_user';

export const getStoredUser = ():UserDataType | null => {
  const storedUser = localStorage.getItem(LOCALSTORAGE_USER_KEY);
  
  return storedUser ? JSON.parse(storedUser) : null;
}

export const setStoredUser = (user:UserDataType) => {
  const obj = {
    ...user,
    expiresIn: currentDate
  }
  localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(obj))
}

export const clearStoredUser = () => {
  localStorage.removeItem(LOCALSTORAGE_USER_KEY)
}

