import React, { useEffect, useState } from "react";

export function useDebouncedValue(value, delay = 400) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [delay, value]);

  return debouncedValue;
}

function SearchBox({
  onChange,
  placeholder = "جستجو...",
  value,
}) {
  return (
    <div className="relative w-full md:w-80">
      <input
        className="h-11 w-full rounded border border-gray-200 bg-white px-4 pl-10 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-green-400 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-400"
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type="search"
        value={value}
      />
      {value ? (
        <button
          aria-label="پاک کردن جستجو"
          className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-700 dark:hover:text-white"
          onClick={() => onChange("")}
          type="button"
        >
          ×
        </button>
      ) : null}
    </div>
  );
}

export default SearchBox;

