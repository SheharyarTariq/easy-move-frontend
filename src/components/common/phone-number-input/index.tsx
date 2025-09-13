import React from 'react';
import 'react-international-phone/style.css';
import { PhoneInput } from 'react-international-phone';

export interface PhoneNumberInputProps {
  phoneNumber?: string;
  className?: string;
  onChange?: (value: string) => void;
}


const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ phoneNumber, onChange }) => {

  return (
      <PhoneInput
        value={phoneNumber}
        onChange={onChange}
        defaultCountry="gb"
        forceDialCode={false} 
      />
  );
}

export default PhoneNumberInput;