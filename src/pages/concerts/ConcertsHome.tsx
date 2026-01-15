import { Content } from '@/components/Content';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ConcertNav } from '@/components/ConcertNav';

export default function ConcertsHome() {
  return (
    <div>
      <Header />
      <ConcertNav />
      <Content>ConcertsHome Page</Content>
      <Footer />
    </div>
  );
}
