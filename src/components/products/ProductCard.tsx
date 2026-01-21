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
  product?: Product;
  setselectProductId?: React.Dispatch<React.SetStateAction<string | undefined>>;
  selectProduct?: (productId?: string) => void;
}
export function ProductCard({ product, setselectProductId, selectProduct }: ProductCardProps) {
  const handleClick = () => {
    setselectProductId?.(product?.id);
    selectProduct?.(product?.id);
    // if(selectProduct) {
    //   selectProduct(product?.id)
    // }
  };

  return (
    <div>
      <ProductImg imageUrl={product?.imageUrl} name={product?.name} />
      <div className="flex flex-row justify-between">
        <ProductName name={product?.name} price={product?.price} />
        <div className="flex flex-col">
          <LikeButton />
          <button type="button" className="cursor-pointer p-1!" onClick={handleClick}>
            선택
          </button>
        </div>
      </div>
    </div>
  );
}
