import { Link } from "react-router-dom";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect } from "react";

const navObjects = [
  { name: "Profile", href: "/profile", current: false },
  { name: "Order 1", href: "/orders/1", current: false },
  { name: "Orders", href: "/orders", current: false },
  { name: "Auth", href: "/auth", current: false },
];

function toggleCurrentPage() {
  const currentPage = navObjects.find(
    (page) => page.href === window.location.pathname
  );
  const prevPage = navObjects.find((page) => page.current);

  console.log(prevPage)
  if (prevPage >= 0) prevPage.current = false;

  currentPage.current = true;

  // console.log(navObjects);
}

export default function Header() {
  const avatarLink =
    // "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80";
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

  useEffect(() => {
    toggleCurrentPage();
  }, [window.location.pathname]);

  return (
    <header className="">
      {/* nav (left) */}
      <NavButtons />

      {/* avatar/profile (right) */}
      <AvatarComponent link={avatarLink} />
    </header>
  );
}

function NavButtons() {
  return (
    <div className="flex flex-row dark  space-x-5">
      {navObjects.map((page) => (
        <Link
          key={page.name}
          className={
            navObjects.current
              ? buttonVariants({
                  variant: "secondary",
                })
              : buttonVariants({
                  variant: "outline",
                })
          }
          to={page.href}
          onClick={() => {
            toggleCurrentPage()
          }}
        >
          {page.name}
        </Link>
      ))}
    </div>
  );
}

function AvatarComponent({ link }) {
  return (
    <Avatar className="bg-blackA1 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <AvatarImage
        className="h-full w-full rounded-[inherit] object-cover"
        src={link}
        alt="Colm Tuite"
      />
      <AvatarFallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      />
    </Avatar>
  );
}
