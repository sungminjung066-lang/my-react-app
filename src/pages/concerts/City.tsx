import { useParams } from 'react-router';

import { ConcertNav } from '@/components/ConcertNav';
import { Content } from '@/components/Content';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function City() {
  const params = useParams();
  return (
    <div>
      <Header />
      <ConcertNav />
      <Content>City Page 공연 도시: {params.city}</Content>
      <Footer />
    </div>
  );
}
