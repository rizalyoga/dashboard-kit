import { useState, useEffect } from "react";

const ToggleDarkMode = () => {
  const [themes, setThemes] = useState<string | null>(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    if (themes === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [themes]);

  // Darkmod Handler
  const handleToogle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setThemes("dark");
    } else {
      setThemes("light");
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer ml-3">
      <input
        type="checkbox"
        onChange={handleToogle}
        checked={themes == "light" ? false : true}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
        Dark Mode
      </span>
    </label>
  );
};

export default ToggleDarkMode;
