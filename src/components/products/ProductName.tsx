interface ProductNameProps {
  name?: string;
  price?: number;
}

export function ProductName({ name, price }: ProductNameProps) {
  return (
    <div className="text-left">
      <div>{name ?? '-'}</div>
      <div className="text-2xl font-bold">{price?.toLocaleString() ?? '-'}원</div>
    </div>
  );
}
