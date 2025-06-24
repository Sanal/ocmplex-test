"use client";

import { Button } from "@/components/button";
import { PhoneInput } from "@/components/phone-input";
import { ResponseMessage } from "@/modules/order-form/parts/response-message";
import { FormErrorMessage } from "@/modules/order-form/parts/form-error-message";
import { OrderFormValues } from "./schema";
import useOrderForm from "./hooks/use-phone-persist";
import styles from "./order-form.module.scss";

export function OrderForm() {
  const { control, errors, orderResponse, handleSubmit } = useOrderForm();

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.cartForm}>
        <PhoneInput<OrderFormValues> name="phone" control={control} />
        <Button type="submit">Заказать</Button>
      </div>
      <FormErrorMessage errors={errors} />
      <ResponseMessage response={orderResponse} />
    </form>
  );
}
