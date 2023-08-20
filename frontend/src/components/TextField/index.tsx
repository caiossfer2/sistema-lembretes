import React from 'react'
import { Input, Label, LabelBox, Wrapper } from './styles';

interface TextFieldProps{
  label: string;
  placeholder: string;
  value?: string;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>
}

function TextField({label, placeholder, setValue, value}: TextFieldProps) {
  return (
    <Wrapper>
      <LabelBox>
        <Label>{label}</Label>
      </LabelBox> 
      <Input type='text' placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)} />
    </Wrapper>
  )
}

export default TextField