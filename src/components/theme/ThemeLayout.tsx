import ThemeAppContent from './ThemeAppContent';
import ThemeAppHeader from './ThemeAppHeader';
import ThemeAppSidebar from './ThemeAppSidebar';
import { useTheme } from './ThemeContext';

export function ThemeLayout() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors w-[90vw] ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
      }`}
    >
      <ThemeAppHeader />
      <div className="flex gap-5">
        <ThemeAppSidebar />
        <ThemeAppContent />
      </div>
    </div>
  );
}
