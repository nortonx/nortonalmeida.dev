"use client";

import React from "react";
import Link from "next/link";
import ModeToggle from "@/components/mode-toggle"
import NavMenubar from "@/components/nav-menubar"

export default function Header() {

  return (
    <header className="flex justify-between items-center mt-10" data-testid="header-component">
      <Link href="/" className="text-xl font-bold">
        www.nortonalmeida.dev
      </Link>
      <div className="flex justify-between items-center gap-4">
        <div>
          <NavMenubar />
        </div>
        <ModeToggle />
      </div>
    </header>
  )
}