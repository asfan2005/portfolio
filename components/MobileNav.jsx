"use client";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Close button */}
        <div className="flex justify-end p-4">
          <SheetClose className="text-2xl">
            <IoMdClose />
          </SheetClose>
        </div>
        {/* logo */}
        <div className="mt-12 mb-20 text-center text-2xl">
          <Link href="/">
            <h1 className="text-3xl font-semibold">
              Asfan<span className="text-accent">.</span>{" "}
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <SheetClose key={index} asChild>
              <Link
                href={link.path}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition`}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
