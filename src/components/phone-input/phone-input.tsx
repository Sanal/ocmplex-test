type Props = {
  name: string;
  value: string;
  onChange: (value: string) => void;
};

export function PhoneInput({ value, name, onChange }: Props) {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      autoComplete="tel"
    />
  );
}
