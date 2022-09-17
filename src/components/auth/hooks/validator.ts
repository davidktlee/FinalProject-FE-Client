const VALIDATOR_TYPE_REQUIRE = 'REQUIRE'
const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH'
const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH'
const VALIDATOR_TYPE_MIN = 'MIN'
const VALIDATOR_TYPE_MAX = 'MAX'
const VALIDATOR_TYPE_EMAIL = 'EMAIL'


export const VALIDATOR_REQUIRE = () => ({type: VALIDATOR_TYPE_REQUIRE})
export const VALIDATOR_MINLENGTH = (value:number) => ({type: VALIDATOR_TYPE_MINLENGTH,value:value})
export const VALIDATOR_MAXLENGTH = (value:number) => ({type: VALIDATOR_TYPE_MAXLENGTH,value:value})
export const VALIDATOR_MIN = (value:number) => ({type: VALIDATOR_TYPE_MIN,value:value})
export const VALIDATOR_MAX = (value:number) => ({type: VALIDATOR_TYPE_MAX,value:value})
export const VALIDATOR_EMAIL = () => ({type: VALIDATOR_TYPE_EMAIL})

export interface ValidatorType {
  type: string;
  value?: number
}

export const validate = (value:string | undefined,validators:ValidatorType[]) => {
  let isValid = true;
  for(let validator of validators){
    if(validator.type === VALIDATOR_TYPE_REQUIRE && value){
      isValid = isValid && value.trim().length >= 1;
    }
    if(validator.type === VALIDATOR_TYPE_EMAIL && value){
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
    if(validator.type === VALIDATOR_TYPE_MAX && validator.value && value){
      isValid = isValid && +value <= validator.value;
    }
    if(validator.type === VALIDATOR_TYPE_MIN && validator.value && value){
      isValid = isValid && +value >= validator.value
    }
    if(validator.type === VALIDATOR_TYPE_MAXLENGTH && validator.value){ 
      if(!value) {
        isValid = false;
        return isValid
      }
      isValid = isValid && value.trim().length < validator.value
    }
    if(validator.type === VALIDATOR_TYPE_MINLENGTH && validator.value){
      if(!value) {
        isValid = false;
        return isValid
      }
      isValid = isValid && value.trim().length > validator.value
    }
  }
  return isValid
}

