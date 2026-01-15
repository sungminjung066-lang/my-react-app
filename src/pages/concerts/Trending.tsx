import { ConcertNav } from '@/components/ConcertNav';
import { Content } from '@/components/Content';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function Trending() {
  return (
    <div>
      <Header />
      <ConcertNav />
      <Content>Trending Page</Content>
      <Footer />
    </div>
  );
}
