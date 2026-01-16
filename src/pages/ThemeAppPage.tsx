import { ThemeLayout } from '@/components/theme/ThemeLayout';
import ThemeProvider from '@/components/theme/ThemeProvider';

export default function ThemeAppPage() {
  return (
    <ThemeProvider>
      <ThemeLayout />
    </ThemeProvider>
  );
}
