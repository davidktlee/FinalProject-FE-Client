import { useState, useReducer,useCallback } from 'react'

// interface useFormProps {
//   initialInput: {
//     lastname: {
//       value: string
//       isValid: boolean
//     }
//     firstname: {
//       value: string
//       isValid: boolean
//     }
//     lastReadname: {
//       value: string
//       isValid: boolean
//     }
//     firstReadname: {
//       value: string
//       isValid: boolean
//     }
//     postCode: {
//       value: string
//       isValid: boolean
//     }
//     address: {
//       value: string
//       isValid: boolean
//     }
//     detailAddress: {
//       value: string
//       isValid: boolean
//     }
//     phone: {
//       value: string
//       isValid: boolean
//     }
//     email: {
//       value: string
//       isValid: boolean
//     }
//     password: {
//       value: string
//       isValid: boolean
//     }
//     passwordConfirm: {
//       value: string
//       isValid: boolean
//     }
//     birthYear: {
//       value: string
//       isValid: boolean
//     }
//     birthMonth: {
//       value: string
//       isValid: boolean
//     }
//     birthDay: {
//       value: string
//       isValid: boolean
//     }
//   }
//   initialFormValid: boolean
// }

interface ReducerInitialStateType {
  inputs: {
    [key: string]: {
      value: string
      isValid: boolean
    }
  },
  isFormValid: boolean
}

interface Actions {
  inputId: string;
  value:string;
  isValid:boolean;
}

const formReducer = (state: ReducerInitialStateType, action: Actions) => {
  let formValid = true
  for (const inputId in state.inputs) {
    if (!state.inputs[inputId]) {
      continue
    }
    if(inputId === action.inputId){
      formValid = formValid && action.isValid
    }else{
      formValid = formValid && state.inputs[inputId].isValid
    }
  }
  return {
    ...state,
    inputs: {
      ...state.inputs,
      [action.inputId]: {value: action.value,isValid:action.isValid}
    },
    isFormValid: formValid && action.isValid
  }
}

interface initialInputType {
  [key:string] : {
    value: string
    isValid: boolean
  }
}
  // {lastname,firstname,firstReadname,lastReadname,postCode,address,detailAddress,phone,email,password,passwordConfirm,birthDay,birthMonth,birthYear} = initialInput;
const useForm = (initialInput:initialInputType, initialFormValid:boolean) => {

  
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInput,
    isFormValid: initialFormValid
  })

  const makeFormHandler = useCallback((id:string,value:string,isValid:boolean) => {
    dispatch({
      value,
      inputId: id,
      isValid
    })
  },[])

  return {formState,makeFormHandler}
}

export default useForm
