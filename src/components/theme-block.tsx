export default function ThemeBlock() {
  return (
    <div className="flex-col w-full h-full">
      <div className="rounded-md bg-foreground h-2 w-12"></div>
      <div className="flex items-center space-x-4 border rounded-md mt-2 p-2">
        <div className="rounded-md bg-black/10 h-8 w-8" />
        <div className="space-y-2">
          <div className=" rounded-md bg-foreground h-2 w-20" />
          <div className=" rounded-md bg-muted-foreground h-2 w-12" />
        </div>
        <div className="bg-primary rounded-md h-4 w-12 flex items-center justify-center">
           <div className="bg-primary-foreground rounded-md h-2 w-8"></div>
        </div>
      </div>
      <div className="flex items-center space-x-4 border-t rounded-md mt-2 p-2">
        <div className="rounded-md bg-black/10 h-8 w-8" />
        <div className="space-y-2">
          <div className=" rounded-md bg-foreground h-2 w-20" />
          <div className=" rounded-md bg-muted-foreground h-2 w-12" />
        </div>
      </div>
    </div>
  );
}
