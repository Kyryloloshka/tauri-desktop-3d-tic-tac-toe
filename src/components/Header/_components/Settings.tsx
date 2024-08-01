"use client";
import { useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";

const languages = [
  { label: "English", value: "en" },
  { label: "Українська", value: "uk" },
  { label: "Deutsch", value: "de" },
  { label: "Polski", value: "pl" },
  { label: "Français", value: "fr" },
  { label: "日本語", value: "ja" },
  { label: "Português", value: "pt" },
  { label: "Español", value: "es" },
];

const Settings = () => {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();
  const handleLanguageChange = (value: string) => {
    startTransition(() => {
      // router.replace(`/${value}/${pathname}`);
      router.replace(`${pathname}`);
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex gap-5 cursor-pointer">
          <div className="h-6 w-6 flex-center rounded-full transition svg-settings">
            <img src="/assets/icons/settings.svg" alt="settings" />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-dark-2 p-2 mr-3 md:mr-6 z-[501] flex flex-col gap-1">
        <DropdownMenuItem>Language</DropdownMenuItem>
        <DropdownMenuGroup>
          <Select defaultValue={"en"} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent className="bg-dark-2 z-[502]">
              <SelectGroup>
                {languages.map((language) => (
                  <SelectItem key={language.value} value={language.value}>
                    {language.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Settings;
