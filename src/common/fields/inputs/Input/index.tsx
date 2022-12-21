import React from 'react';

import styles from './input.module.css';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
  isError?: boolean;
  helperText?: string;
  label: string;
}

export const Input: React.FC<InputProps> = ({ isError = false, helperText, label, ...props }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = React.useState(!!props.value ?? false);

  return (
    <div
      className={`${styles.inputContainer} ${isError ? styles.inputContainer : ''} ${isFocus ? styles.focused : ''}`}
      onClick={() => {
        inputRef.current?.focus();
        setIsFocus(true);
      }}
    >
      <label htmlFor='' className={styles.label}>
        {label}
      </label>
      <input {...props} onBlur={() => !props.value && setIsFocus(false)} />
      {/* {isError && helperText && <div className={styles.helperText}>{helperText}</div>} */}
    </div>
  );
};
