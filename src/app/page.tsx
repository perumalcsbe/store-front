import CheckoutBasic from '@/components/checkout-basic';
import Navbar from '@/components/nav-bar';
import ThemeSelector from '@/components/theme-selector';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-col h-[calc(100dvh-50px)] items-center 2xl:pt-3 themes-body">
        <div className="flex flex-col flex-1 overflow-hidden shadow-[0px_0px_29px_10px_rgba(0,0,0,0.06)] dark:shadow-[0px_0px_29px_10px_rgba(255,255,255,.06)] max-w-screen-2xl w-full 2xl:rounded-xl">
          <div className="flex flex-1 h-full w-full rounded-inherit bg-white dark:bg-black border-t border-b 2xl:border border-black/20 dark:border-white/20 relative overflow-hidden">
            <div className="flex flex-col h-full md:items-center tall:justify-center desktop:justify-center flex-1 p-5 rounded-inherit overflow-y-auto">
              <div className="relative z-1">
                <CheckoutBasic />
              </div>
            </div>
          </div>
        </div>
        <ThemeSelector />
      </div>
    </main>
  );
}
