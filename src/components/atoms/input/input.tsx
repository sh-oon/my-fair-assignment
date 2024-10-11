'use client'

import { forwardRef, useState } from "react"
import { InputProps } from "./input.types"
import { vars } from "@ui-tokens"
import styled from "@emotion/styled"

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  value,
  onChange,
  onSubmit,
  placeholder = "",
  type = "text",
  disabled,
  required,
  maxLength,
  minLength,
  pattern,
  size,
  autoFocus,
  readOnly,
  autoComplete,
  name,
  id,
  className,
}, ref) => {
  const [isComposing, setIsComposing] = useState(false)

  return <StyledInput
    ref={ref}
    value={value}
    onChange={(e) => onChange && onChange(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter" && !isComposing) {
        onSubmit && onSubmit(value)
      }
    }}
    onCompositionStart={() => setIsComposing(true)}
    onCompositionEnd={() => setIsComposing(false)}
    placeholder={placeholder}
    type={type}
    disabled={disabled}
    required={required}
    maxLength={maxLength}
    minLength={minLength}
    pattern={pattern}
    size={size}
    autoFocus={autoFocus}
    readOnly={readOnly}
    autoComplete={autoComplete}
    name={name}
    id={id}
    className={className}
    data-testid="input-element"
  />
})

Input.displayName = "Input"

const StyledInput = styled.input`
  border-radius: var(--border-radius-xlarge);
  padding: 32px;
  display: inline-block;
  width: 100%;

  background-color: ${vars.$semantic.color.fill.secondary};
  color: ${vars.$semantic.color.text.primary};
  ${vars.$semantic.typography["text-m"]}

  outline: none;

  &::placeholder {
    color: ${vars.$semantic.color.text.tertiary};
  }
`