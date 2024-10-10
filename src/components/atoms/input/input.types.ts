export type InputProps = {
  value?: string;
  onChange?: (e: string) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  size?: number;
  autoFocus?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  name?: string;
  id?: string;
  className?: string;
};