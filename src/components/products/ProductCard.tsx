import { LikeButton } from './LikeButton';
import ProductImg from './ProductImg';
import { ProductName } from './ProductName';

// 추후 백엔드 api 연결시 타입 수정 필요
export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}
export function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <ProductImg imageUrl={product.imageUrl} name={product.name} />
      <div className="flex flex-row justify-between">
        <ProductName name={product.name} price={product.price} />
        <LikeButton />
      </div>
    </div>
  );
}
