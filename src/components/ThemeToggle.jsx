import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <span onClick={() => setIsDark(!isDark)} className="cursor-pointer">
      {isDark ? (
        <i className="fa-solid fa-sun text-[#0C0C0D] dark:text-[#F2F2F2] hover:text-red-700"></i>
      ) : (
        <i className="fa-solid fa-moon text-[#0C0C0D] dark:text-[#F2F2F2] hover:text-red-700"></i>
      )}
    </span>
  );
};

export default ThemeToggle;
