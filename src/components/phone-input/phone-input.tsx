type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function PhoneInput({ value, onChange }: Props) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
