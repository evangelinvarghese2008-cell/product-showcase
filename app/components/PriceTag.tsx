type Props = {
  amount: number;
};

export default function PriceTag({ amount }: Props) {
  return <p>${amount}</p>;
}
