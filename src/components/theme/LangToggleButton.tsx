import { useLang } from './LangContext';
import { useTheme } from './ThemeContext';

export default function LangToggleButton() {
  const { theme } = useTheme();
  const { lang, toggleLang } = useLang();

  return (
    <button
      onClick={toggleLang}
      className={`rounded-lg px-4 py-2 font-semibold transition-all text-white ${
        theme === 'dark' ? 'bg-yellow-400  hover:bg-yellow-300' : 'bg-gray-700  hover:bg-gray-600'
      }`}
    >
      {lang === 'ko' ? '영어' : '한국어'}
    </button>
  );
}
