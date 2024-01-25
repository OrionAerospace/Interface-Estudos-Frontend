'use client'

import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import styled, { css } from 'styled-components'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  field: string
}

export function Input(props: IInputProps) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext()

  const input = watch(props.name)?.toString()

  return (
    <InputBx length={input && input?.length > 0}>
      <input
        {...register(props.name)}
        {...props}
        className="outline-none h-14 2xl:h-16 relative tracking-wide w-full bg-bgTertiary border-none px-4 pt-6 pb-2 rounded font-medium text-base lg:text-lg 2xl:text-xl"
        data-testid="input"
      />
      <i className="field font-medium tracking-wide absolute left-0 px-4 top-1/2 -translate-y-1/2 not-italic text-gray-300 duration-500 pointer-events-none">
        {props.field}
      </i>
      {Boolean(errors[props.name]?.message) && (
        <i className="w-4/5 text-right text-xs 2xl:text-sm font-normal tracking-wide absolute right-0 -top-[14px] px-4 py-5 not-italic text-gray-300 duration-500 pointer-events-none">
          {errors[props.name]?.message?.toString()}
        </i>
      )}
    </InputBx>
  )
}
const style = css`
  top: 0.875rem;
  font-size: 0.875rem;

  @media screen and (max-width: 1536px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`

const InputBx = styled.div<{ length: boolean }>`
  position: relative;
  width: 100%;

  input:focus ~ .field {
    top: 0.875rem;
    font-size: 0.875rem;

    @media screen and (max-width: 1536px) {
      font-size: 0.8rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 0.75rem;
    }
  }

  input:valid ~ .field {
    ${({ length }) => (length ? style : '')}
  }

  input[type='text']:focus,
  input[type='password']:focus {
    outline: none;
    border-bottom: 0.2rem solid var(--primary);
    box-sizing: border-box;
    padding-bottom: 0.28rem;
  }
`
