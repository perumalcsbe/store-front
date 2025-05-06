import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import ThemeToggle from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { nanoid } from 'nanoid';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <ul className="hidden md:flex items-center gap-10 text-foreground">
          <li className="text-primary font-medium">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#faqs">FAQs</a>
          </li>
         
        </ul>

        <div className="flex flex-1 items-center justify-end space-x-4 ">
          <Button variant="secondary" className="hidden md:block px-2">
            Login
          </Button>
          <Button className="hidden md:block ml-2 mr-2">Get Started</Button>

          <div className="flex md:hidden mr-2 items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5 rotate-0 scale-100" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <a href="#home">Home</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#features">Features</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#pricing">Pricing</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#faqs">FAQs</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button variant="secondary" className="w-full text-sm">
                    Login
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button className="w-full text-sm">Get Started</Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

const landings = [
  {
    id: nanoid(),
    title: 'Landing 01',
    route: '/project-management',
  },
  {
    id: nanoid(),
    title: 'Landing 02',
    route: '/crm-landing',
  },
  {
    id: nanoid(),
    title: 'Landing 03',
    route: '/ai-content-landing',
  },
  {
    id: nanoid(),
    title: 'Landing 04',
    route: '/new-intro-landing',
  },
  {
    id: nanoid(),
    title: 'Landing 05',
    route: '/about-us-landing',
  },
  {
    id: nanoid(),
    title: 'Landing 06',
    route: '/contact-us-landing',
  },
  {
    id: nanoid(),
    title: 'Landing 07',
    route: '/faqs-landing',
  },
  {
    id: nanoid(),
    title: 'Landing 08',
    route: '/pricing-landing',
  },
  {
    id: nanoid(),
    title: 'Landing 09',
    route: '/career-landing',
  },
];

export default Navbar;
