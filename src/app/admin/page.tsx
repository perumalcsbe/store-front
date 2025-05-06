/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import {
  HomeIcon,
  LineChartIcon,
  Package2Icon,
  PackageIcon,
  SearchIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
 
export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-background lg:block">
        <div className="flex flex-col gap-2">
          <div className="flex h-[60px] items-center px-6">
            <a className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span>GreenTech Co.</span>
            </a>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-4 text-sm font-medium">
              {navigationLinks.map((link) => (
                <a
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-foreground ${link.badge ? "bg-secondary" : ""}`}
                  href={link.href}
                  key={link.label}
                >
                  {link.icon}
                  {link.label}
                  {link.badge && (
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      {link.badge}
                    </Badge>
                  )}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b px-6">
          <a className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </a>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4" />
                <Input
                  className="w-full bg-secondary shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3"
                  placeholder="Search product..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>UI</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Products</h1>
            <Button className="ml-auto" size="sm">
              Add product
            </Button>
          </div>
          <div className="border shadow-sm rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">Image</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Availability</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map(
                  ({
                    id,
                    imgSrc,
                    productName,
                    category,
                    price,
                    availability,
                  }) => (
                    <TableRow key={id}>
                      <TableCell>
                        <img
                          alt="Product image"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src={imgSrc}
                          width="64"
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        {productName}
                      </TableCell>
                      <TableCell>{category}</TableCell>
                      <TableCell>{price}</TableCell>
                      <TableCell>{availability}</TableCell>
                    </TableRow>
                  ),
                )}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  );
}
 
const navigationLinks = [
  { href: "#", label: "Home", icon: <HomeIcon className="h-4 w-4" /> },
  {
    href: "#",
    label: "Orders",
    icon: <ShoppingCartIcon className="h-4 w-4" />,
    badge: 4,
  },
  { href: "#", label: "Products", icon: <PackageIcon className="h-4 w-4" /> },
  { href: "#", label: "Customers", icon: <UsersIcon className="h-4 w-4" /> },
  {
    href: "#",
    label: "Analytics",
    icon: <LineChartIcon className="h-4 w-4" />,
  },
];
 
const tableData = [
  {
    id: 1,
    imgSrc: "https://via.placeholder.com/64",
    productName: "Yoga Mat",
    category: "Fitness",
    price: "$19",
    availability: "In stock",
  },
  {
    id: 2,
    imgSrc: "https://via.placeholder.com/64",
    productName: "Bluetooth Headphones",
    category: "Electronics",
    price: "$89",
    availability: "In stock",
  },
  {
    id: 3,
    imgSrc: "https://via.placeholder.com/64",
    productName: "Smart Watch",
    category: "Electronics",
    price: "$199",
    availability: "Pre-order",
  },
  {
    id: 4,
    imgSrc: "https://via.placeholder.com/64",
    productName: "Coffee Maker",
    category: "Kitchen",
    price: "$99",
    availability: "Out of stock",
  },
  {
    id: 5,
    imgSrc: "https://via.placeholder.com/64",
    productName: "Water Bottle",
    category: "Fitness",
    price: "$15",
    availability: "In stock",
  },
  {
    id: 6,
    imgSrc: "https://via.placeholder.com/64",
    productName: "Wireless Mouse",
    category: "Electronics",
    price: "$25",
    availability: "In stock",
  },
  {
    id: 7,
    imgSrc: "https://via.placeholder.com/64",
    productName: "Desk Lamp",
    category: "Furniture",
    price: "$45",
    availability: "Pre-order",
  },
  {
    id: 8,
    imgSrc: "https://via.placeholder.com/64",
    productName: "Bookshelf",
    category: "Furniture",
    price: "$120",
    availability: "In stock",
  },
  {
    id: 9,
    imgSrc: "https://via.placeholder.com/64",
    productName: "Wall Art",
    category: "Home Decor",
    price: "$75",
    availability: "In stock",
  },
  {
    id: 10,
    imgSrc: "https://via.placeholder.com/64",
    productName: "Throw Blanket",
    category: "Home Decor",
    price: "$30",
    availability: "Pre-order",
  },
  {
    id: 11,
    imgSrc: "https://via.placeholder.com/64",
    productName: "Ceramic Vase",
    category: "Home Decor",
    price: "$22",
    availability: "In stock",
  },
  {
    id: 12,
    imgSrc: "https://via.placeholder.com/64",
    productName: "Gaming Chair",
    category: "Gaming",
    price: "$170",
    availability: "Out of stock",
  },
];