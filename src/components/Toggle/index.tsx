interface ToggleProps {
  isActivedLanguage: boolean;
  setIsActivedLanguage: (isActivedLanguage: boolean) => void;
}

export function Toggle({
  isActivedLanguage,
  setIsActivedLanguage,
}: ToggleProps) {
  return (
    <button
      className={`w-full rounded-full py-[.45rem] relative px-4 cursor-pointer shadow-md ${
        isActivedLanguage
          ? "text-left bg-primary-500"
          : " text-right bg-secondary-500"
      }`}
      onClick={() => setIsActivedLanguage(!isActivedLanguage)}
    >
      <span className="text-neutral-full font-bold text-xs">
        {isActivedLanguage ? "ENG" : "PT-BR"}
      </span>

      <span
        className={`absolute top-0 bottom-0 right-2 m-auto size-6 rounded-full bg-neutral-full transition-all duration-400 ${
          !isActivedLanguage ? "-translate-x-14" : ""
        }`}
      ></span>
    </button>
  );
}
