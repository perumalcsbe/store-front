'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import ThemeToggle from './theme-toggle';
import ThemeBlock from './theme-block';
import { themes } from '@/registry/themes';
import { useTheme } from '@/components/theme-provider';
import { useConfig } from '@/stores/use-config';
import { cn } from '@/lib/utils';

export default function ThemeSelector() {
  const { theme: mode } = useTheme();
  const { theme, setTheme } = useConfig()
  return (
    <>
      <div className="flex justify-between mt-8 px-4 w-full max-w-screen-2xl mx-auto h-[30px] relative">
        <span className="inline-flex items-center gap-1">
          <ThemeToggle />
        </span>
        <span className="inline-flex items-center text-base font-medium shadow-[0px_0px_29px_10px_rgba(0,0,0,0.06)] dark:shadow-[0px_0px_29px_10px_rgba(255,255,255,.06)] rounded-md">
          <button
            className="h-[30px] flex items-center gap-2 px-4 outline-none relative
      bg-white/10
      hover:bg-white/50 
      
      disabled:text-black/40
      disabled:dark:text-white/40
      
      dark:bg-black/10
      dark:hover:bg-black/50 

      disabled:pointer-events-none

        shadow-[inset_0px_0px_0px_1px_#737373] 
        disabled:shadow-[inset_0px_0px_0px_1px_rgba(0,0,0,0.2)] 
        focus:shadow-[inset_0px_0px_0px_1px_#737373,0px_0px_0px_1px_#737373] 

        dark:shadow-[inset_0px_0px_0px_1px_#484848] 
        disabled:dark:shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.1)] 
        dark:focus:shadow-[inset_0px_0px_0px_1px_#484848,0px_0px_0px_1px_#484848] 
        rounded-tl-md rounded-bl-md"
          >
            <ArrowLeft size={16}></ArrowLeft>
          </button>
          <button
            className="h-[30px] flex items-center gap-2 px-4 outline-none relative
      bg-white/10
      hover:bg-white/50 
      
      disabled:text-black/40
      disabled:dark:text-white/40
      
      dark:bg-black/10
      dark:hover:bg-black/50 

      disabled:pointer-events-none

        shadow-[inset_0px_0px_0px_1px_#737373] 
        disabled:shadow-[inset_0px_0px_0px_1px_rgba(0,0,0,0.2)] 
        focus:shadow-[inset_0px_0px_0px_1px_#737373,0px_0px_0px_1px_#737373] 

        dark:shadow-[inset_0px_0px_0px_1px_#484848] 
        disabled:dark:shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.1)] 
        dark:focus:shadow-[inset_0px_0px_0px_1px_#484848,0px_0px_0px_1px_#484848] 
        ml-[-1px] rounded-tr-md rounded-br-md"
          >
            <ArrowRight size={16} />
          </button>
        </span>
      </div>
      <div
        className="flex items-center shrink-0 py-8 gap-8 box-content overflow-x-auto snap-x snap-mandatory h-[200px] w-full"
        suppressHydrationWarning
      >
        <div aria-hidden className="shrink-0" />
        {themes.map((currentTheme, k) => {
          const cssVars = mode === 'dark' ? currentTheme.cssVars.dark : currentTheme.cssVars.light;
          return (
            <div
              key={k}
              role="button"
              onClick={() => setTheme(currentTheme.name)}
              className={cn("snap-always snap-center flex flex-col p-4 gap-3 rounded-2xl overflow-hidden h-full aspect-[1.58/1] shrink-0 outline-none transition-shadow  shadow-[0px_0px_29px_10px_rgba(0,0,0,0.06)] dark:shadow-[0px_0px_29px_10px_rgba(255,255,255,.06)]", currentTheme.name === theme ? 'border': '')}
              style={
                {
                  '--background': cssVars['background'],
                  '--foreground': cssVars['foreground'],
                  '--card': cssVars['card'],
                  '--card-foreground': cssVars['card-foreground'],
                  '--popover': cssVars['popover'],
                  '--popover-foreground': cssVars['popover-foreground'],
                  '--primary': cssVars['primary'],
                  '--primary-foreground': cssVars['primary-foreground'],
                  '--secondary': cssVars['secondary'],
                  '--secondary-foreground': cssVars['secondary-foreground'],
                  '--muted': cssVars['muted'],
                  '--muted-foreground': cssVars['muted-foreground'],
                  '--accent': cssVars['accent'],
                  '--accent-foreground': cssVars['accent-foreground'],
                  '--destructive': cssVars['destructive'],
                  '--destructive-foreground': cssVars['destructive-foreground'],
                  '--border': cssVars['border'],
                  '--input': cssVars['input'],
                  '--ring': cssVars['ring'],
                } as React.CSSProperties
              }
            >
              <div className="overflow-hidden rounded-md flex-1 w-full">
                <div className="rounded-lg h-full w-full bg-primary/10 relative">
                  <div className="absolute left-3 top-3">
                    <ThemeBlock />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full gap-2">
                <div className="text-sm text-left truncate flex gap-1">
                  <div className="font-semibold">{currentTheme.label}</div>
                </div>
                <div className="flex gap-[4px]">
                  <span
                    className="shadow-[0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1)] w-[12px] h-[12px] rounded-[6px] bg-primary"
                    
                  ></span>
                  <span
                    className="shadow-[0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1)] w-[12px] h-[12px] rounded-[6px] bg-secondary"
                  ></span>
                  <span
                    className="shadow-[0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1)] w-[12px] h-[12px] rounded-[6px] bg-accent"
                  ></span>
                </div>
              </div>
            </div>
          );
        })}
        {/*
        <div
          role="button"
          className="snap-always snap-center flex flex-col ring-1 ring-inset p-4 gap-3 rounded-2xl overflow-hidden h-full aspect-[1.58/1] shrink-0 outline-none transition-shadow ring-[rgba(0,0,0,0.2)] dark:ring-[rgba(255,255,255,0.2)] focus:ring-[rgba(0,0,0,0.4)] focus:dark:ring-[rgba(255,255,255,0.4)]"
        >
          <div className="overflow-hidden rounded-md flex-1 w-full">
            <div className="rounded-lg h-full w-full bg-black/10 dark:bg-white/10 relative">
              <div className="absolute left-3 top-3">
                <ThemeBlock />
              </div>
            </div>
          </div>
        </div>
        <div
          role="button"
          className="snap-always snap-center flex flex-col ring-1 ring-inset p-4 gap-3 rounded-2xl overflow-hidden h-full aspect-[1.58/1] shrink-0 outline-none transition-shadow ring-primary dark:ring-primary shadow-[0px_0px_29px_10px_rgba(0,0,0,0.06)] dark:shadow-[0px_0px_29px_10px_rgba(255,255,255,.06)]"
        >
          <div className="overflow-hidden rounded-md flex-1 w-full">
            <div className="rounded-lg h-full w-full bg-black/10 dark:bg-white/10 relative">
              <div className="absolute left-3 top-3">
                <ThemeBlock />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between w-full gap-2">
            <div className="text-sm text-left truncate flex gap-1">
              <div className="font-semibold">Theme 2</div>
            </div>
            <div className="flex gap-[4px]">
              <span
                className="shadow-[0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1)] w-[12px] h-[12px] rounded-[6px]"
                style={{ backgroundColor: 'rgb(40, 44, 52)', backgroundImage: 'linear-gradient(rgb(40, 44, 52), rgb(40, 44, 52))' }}
              ></span>
              <span
                className="shadow-[0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1)] w-[12px] h-[12px] rounded-[6px]"
                style={{ backgroundColor: 'rgb(192, 199, 214)', backgroundImage: 'linear-gradient(rgb(192, 199, 214), rgb(192, 199, 214))' }}
              ></span>
              <span
                className="shadow-[0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1)] w-[12px] h-[12px] rounded-[6px]"
                style={{ backgroundColor: 'rgb(82, 139, 255)', backgroundImage: 'linear-gradient(rgb(82, 139, 255), rgb(82, 139, 255))' }}
              ></span>
            </div>
          </div>
        </div>*/}
      </div>
    </>
  );
}
