import styles from "./FormSeoin.module.css";

interface InputProps {
  id: string;
  type: string;
  label?: string;
  value?: string | number;
  style?: string;
  isError: boolean;
  errorText?: string;
  labelStyle?: string;
  placeholder: string;
}

export default function InputSeoin({
  id,
  type,
  label,
  value,
  style,
  isError,
  errorText,
  labelStyle,
  placeholder,
}: InputProps) {
  return (
    <div>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        className={`${style} ${isError && styles["Error"]}`}
        placeholder={placeholder}
      />
      {isError && <p className={styles.ErrorText}>{errorText}</p>}
    </div>
  );
}
