'use client'

import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

export const CheckBox = ({ children, field }: { children: React.ReactNode; field: string }) => {
  const { register } = useFormContext()

  return (
    <LabelContainer htmlFor="remember">
      {children}
      <input
        {...register(field)}
        className="absolute opacity-0 cursor-pointer h-0 w-0"
        type="checkbox"
        id="remember"
      />
      <span className="absolute top-0 left-0 h-6 w-6 bg-white duration-300 rounded-sm"></span>
    </LabelContainer>
  )
}

const LabelContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 2rem;
  cursor: pointer;
  font-size: 0.875rem;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover input ~ span {
    background-color: hsla(204, 97%, 50%, 0.89);
  }

  input:checked ~ span {
    background-color: hsla(204, 97%, 50%, 0.89);

    &:after {
      display: block;
    }
  }

  span:after {
    content: '';
    display: none;
    position: absolute;
    left: 0.5rem;
    top: 0.25rem;
    width: 0.5rem;
    height: 0.75rem;
    border: 2px solid #e8f3fa;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`
