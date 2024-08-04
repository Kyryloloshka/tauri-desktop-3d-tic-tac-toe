import React from "react";
import Links from "../Links";
import BgProvider from "@/components/BgProvider";
import Logo from "../Logo";
import dynamic from "next/dynamic";

const DialogQuit = dynamic(() => import("@/components/DialogQuit"), {
  ssr: false,
});

const MenuBody = () => {
  return (
    <div className="fixed w-screen h-screen top-0 left-0 z-[1000] bg-dark-2">
      <BgProvider />
      <div className="p-24 flex items-center justify-between h-full max-w-[1400px] mx-auto">
        <Logo />
        <div className="flex flex-col items-end gap-8 pt-[16%] z-[1000]">
          <Links />
          <DialogQuit />
        </div>
      </div>
    </div>
  );
};

export default MenuBody;
