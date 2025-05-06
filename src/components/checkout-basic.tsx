/* eslint-disable @next/next/no-img-element */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { GiftIcon, TruckIcon } from "lucide-react";
 
export default function CheckoutBasic() {
  return (
    <div className="container py-16">
      <div className="items-start space-y-4">
        <h1 className="font-bold text-3xl">Cart</h1>
      </div>
      <div className="grid md:grid-cols-12 items-start lg:gap-12 gap-6 py-6">
        <div className="space-y-4 col-span-7">
          {Array.from(Array(3)).map((i, key) => (
            <div
              key={`item_${key}`}
              className="flex gap-4 border overflow-hidden rounded-md"
            >
              
              <img
                alt="Product image"
                className="object-cover w-28 sm:w-36"
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              />
              <div className="flex-1 gap-4 py-4">
                <h2 className="text-base leading-none">Acme Circles T-Shirt</h2>
                <div className="flex items-center gap-2">
                  <span className="font-semibold pt-2">$99</span>
                </div>
                <div className="ml-auto pt-6">
                  <Input className="w-12" defaultValue="1" type="number" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid col-span-5 gap-4 pt-8 md:pt-0 md:gap-8 items-start">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label className="text-sm" htmlFor="promo">
                Enter promo code
              </Label>
              <div className="flex w-full">
                <Input id="promo" placeholder="Enter promo code" />
                <Button size="sm">Verify</Button>
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <TruckIcon className="w-4 h-4" />
                <span className="text-sm ml-2">
                  Free shipping on orders over $100
                </span>
              </div>
              <div className="flex items-center">
                <GiftIcon className="w-4 h-4" />
                <span className="text-sm ml-2">
                  You have a $20 coupon applied to your order
                </span>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="grid gap-2">
                <div className="flex items-center">
                  <span>Subtotal</span>
                  <span className="ml-auto font-semibold">$99.00</span>
                </div>
                <div className="flex items-center">
                  <span>Shipping</span>
                  <span className="ml-auto font-semibold">$0.00</span>
                </div>
                <div className="flex items-center">
                  <span>Tax</span>
                  <span className="ml-auto font-semibold">$8.91</span>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <span className="font-semibold">Total</span>
                    <span className="ml-auto font-semibold">$107.91</span>
                  </div>
                </div>
              </div>
            </div>
            <Button className="w-full" size="lg">
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}