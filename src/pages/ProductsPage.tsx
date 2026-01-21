import React from 'react';

import { Content } from '@/components/Content';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { CartButton } from '@/components/products/CartButton';
import { GridLayout } from '@/components/products/GridLayout';
import { type Product, ProductCard } from '@/components/products/ProductCard';

// import data from '@/components/products/data.json';

// mock 데이터
// const { products } = data;

export default function ProductsPage() {
  const [products, setProducts] = React.useState<Product[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch('./data/product.json');
      if (!response.ok) {
        throw new Error('데이터를 가져오지 못했습니다.');
      }
      const data = await response.json();
      const { products } = data;
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Content className="p-5!">
        <CartButton />
        <GridLayout>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </GridLayout>
      </Content>
      <Footer />
    </div>
  );
}
