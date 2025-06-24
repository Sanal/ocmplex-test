"use client";

import { useState } from "react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { IMaskInput } from "react-imask";
import styles from "./phone-input.module.scss";

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
};

export function PhoneInput<T extends FieldValues>({ control, name }: Props<T>) {
  const [maskedValue, setMaskedValue] = useState("");

  return (
    <div className={styles.container}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <IMaskInput
            {...field}
            mask="+7 (000) 000-00-00"
            placeholder="+7 (___) ___-__-__"
            unmask={false}
            onAccept={(value, maskRef) => {
              setMaskedValue(value);
              field.onChange("7" + maskRef.unmaskedValue);
            }}
            onChange={() => undefined}
            value={maskedValue}
            className={styles.input}
          />
        )}
      />
    </div>
  );
}
