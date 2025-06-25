import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const LanguageSelector = () => {
  const [currentLang, setCurrentLang] = useState("RU");

  const languages = [
    { code: "RU", name: "Русский", flag: "🇷🇺" },
    { code: "EN", name: "English", flag: "🇺🇸" },
    { code: "TR", name: "Türkçe", flag: "🇹🇷" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          {languages.find((lang) => lang.code === currentLang)?.flag}
          {currentLang}
          <Icon name="ChevronDown" size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setCurrentLang(lang.code)}
            className="gap-2"
          >
            {lang.flag}
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
