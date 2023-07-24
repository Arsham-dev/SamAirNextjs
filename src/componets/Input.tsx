import Image from 'next/image'
import { FC } from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
  padding: 0 19px;
  background: #ffffff;
  border: 1px solid rgba(79, 79, 79, 0.3);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  column-gap: 20px;
  width: calc(100% - 38px);
`
const InputBase = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 33px;
  margin: 19px 0;
  font-weight: 400;
  font-size: 20px;
  font-family: 'Shabnam';
`
const TextAreaBase = styled.textarea`
  border: none;
  outline: none;
  width: 100%;
  height: 170px;
  margin: 19px 0;
  font-weight: 400;
  font-size: 20px;
  font-family: 'Shabnam';
  resize: none;
`
interface InputProps {
  icon?: string
  placeholder?: string
  isTextArea?: boolean
  value: string
  onChange: (value: string) => void
  type?: string
}
const Input: FC<InputProps> = ({
  icon,
  placeholder,
  isTextArea,
  value,
  onChange,
  type
}) => {
  return (
    <InputContainer>
      {isTextArea ? (
        <TextAreaBase
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <InputBase
          type={type || 'text'}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {icon && <Image src={icon} alt="icon" />}
    </InputContainer>
  )
}
export default Input
