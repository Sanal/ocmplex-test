import { InputMask } from "@react-input/mask";
import styles from "./phone-input.module.scss";

type Props = {
  name: string;
  value: string;
  onChange: (value: string) => void;
};

export function PhoneInput({ value, name, onChange }: Props) {
  return (
    <InputMask
      type="tel"
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      autoComplete="off"
      inputMode="numeric"
      mask="+7 (___) ___-__-__"
      replacement={{ _: /\d/ }}
      showMask
      className={styles.input}
    />
  );
}
