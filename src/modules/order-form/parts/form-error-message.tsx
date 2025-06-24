import { FieldErrors, FieldValues } from "react-hook-form";
import cn from "classnames";
import styles from "./parts.module.scss";

type Props<T extends FieldValues> = {
  errors: FieldErrors<T>;
};

export function FormErrorMessage<T extends FieldValues>({ errors }: Props<T>) {
  if (!Object.keys(errors).length) {
    return null;
  }

  return (
    <div className={styles.messageContainer}>
      {Object.keys(errors).map((errorKey) => {
        if (errors[errorKey]) {
          const key = `${errorKey} message`;
          const message = errors[errorKey].message;
          return (
            <p key={key} className={cn(styles.message, styles.errorMessage)}>
              {message?.toString()}
            </p>
          );
        }
      })}
    </div>
  );
}
