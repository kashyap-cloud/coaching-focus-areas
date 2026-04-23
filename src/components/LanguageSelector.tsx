import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES, addResourceBundle } from "../i18n";
import { Globe, Check, ChevronDown } from "lucide-react";

const LanguageSelector: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const currentLanguage = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  const handleLanguageChange = async (lng: string) => {
    if (lng === i18n.language) {
      setIsOpen(false);
      return;
    }

    setLoading(true);
    try {
      // Dynamic import of the locale file
      // Note: We use a relative path from this file to src/i18n/locales
      const translation = await import(`../i18n/locales/${lng}.json`);
      addResourceBundle(lng, translation.default);
      await i18n.changeLanguage(lng);
      localStorage.setItem("i18nextLng", lng);
    } catch (error) {
      console.error(`Failed to load language: ${lng}`, error);
    } finally {
      setLoading(false);
      setIsOpen(false);
    }
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest("#language-selector")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div id="language-selector" className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full hover:bg-white hover:shadow-sm transition-all duration-200"
        title={t("common.selectLanguage")}
      >
        <Globe size={16} className="text-indigo-600" />
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute inset-inline-end-0 mt-2 w-56 max-h-[400px] overflow-y-auto bg-white border border-slate-200 rounded-2xl shadow-xl z-50 animate-in fade-in zoom-in duration-200 origin-top-right">
          <div className="p-2 grid gap-1">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                disabled={loading}
                className={`flex items-center justify-between w-full px-3 py-2 text-sm rounded-xl transition-colors ${
                  i18n.language === lang.code
                    ? "bg-indigo-50 text-indigo-700 font-semibold"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <span>{lang.name}</span>
                {i18n.language === lang.code && <Check size={14} />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
