"use client";
import React, { useEffect, useState } from "react";
import MenuBody from "./_components/MenuBody";
import { usePathname } from "next/navigation";

const EscMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsMenuOpen(false);
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        setIsMenuOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pathname]);
  return isMenuOpen && <MenuBody />;
};

export default EscMenu;
