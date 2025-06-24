import cn from "classnames";
import styles from "./parts.module.scss";

type Props = {
  response?: OrderResponse | null;
};

export function ResponseMessage({ response }: Props) {
  if (!response) {
    return null;
  }

  return (
    <div className={styles.messageContainer}>
      {response.error && (
        <p className={cn(styles.message, styles.errorMessage)}>
          {response.error}
        </p>
      )}
      {!!response.success && (
        <p className={cn(styles.message, styles.successMessage)}>
          Заказ успешно отправлен!
        </p>
      )}
    </div>
  );
}
