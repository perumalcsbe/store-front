"use client"

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import React from "react"

export default function Component() {
  return (
    <React.Fragment>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <GlobeIcon className="h-5 w-5" />
            <span>English</span>
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="sm:hidden">
          <div className="grid gap-4 p-4">
            <Button variant="ghost" className="justify-start">
              <span>English</span>
            </Button>
            <Button variant="ghost" className="justify-start">
              <span>Español</span>
            </Button>
            <Button variant="ghost" className="justify-start">
              <span>Français</span>
            </Button>
            <Button variant="ghost" className="justify-start">
              <span>Deutsch</span>
            </Button>
            <Button variant="ghost" className="justify-start">
              <span>日本語</span>
            </Button>
            <Button variant="ghost" className="justify-start">
              <span>中文</span>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      <Popover className="hidden sm:block">
        <PopoverTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <GlobeIcon className="h-5 w-5" />
            <span>English</span>
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-2">
          <div className="grid gap-1">
            <Button variant="ghost" className="justify-start">
              <span>English</span>
            </Button>
            <Button variant="ghost" className="justify-start">
              <span>Español</span>
            </Button>
            <Button variant="ghost" className="justify-start">
              <span>Français</span>
            </Button>
            <Button variant="ghost" className="justify-start">
              <span>Deutsch</span>
            </Button>
            <Button variant="ghost" className="justify-start">
              <span>日本語</span>
            </Button>
            <Button variant="ghost" className="justify-start">
              <span>中文</span>
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </React.Fragment>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}