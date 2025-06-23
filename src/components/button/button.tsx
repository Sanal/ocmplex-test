import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";
import styles from "./button.module.scss";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  PropsWithChildren;

export function Button({ children, ...buttonProps }: Props) {
  return (
    <button {...buttonProps} className={styles.container}>
      {children}
    </button>
  );
}
