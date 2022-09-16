import {useState} from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';

const address = () => {
  const [postCode,setPostCode] = useState('');
  const [address,setAddress] = useState('');
    const handleComplete = (data:any) => {
      let fullAddress = data.address;
      let extraAddress = '';

      if(data.addressType === 'R') {
        if(data.bname !== '') {
          extraAddress += data.bname;
        }
        if(!data.buildingName) {
          extraAddress += extraAddress !== '' ? `,${data.buildingname}` : data.buildingname;
        }
        fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      }
      setPostCode(data.zonecode)
    }

  return (
    <div>
      <DaumPostcodeEmbed onComplete={handleComplete} />
    </div>
  );
};

export default address;