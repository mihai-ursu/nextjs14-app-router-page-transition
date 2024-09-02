"use client";

import { usePageTransitionStore } from "@/store/usePageTransitionStore";
import Link, { type LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  href: string;
  children: React.ReactNode;
}

const TransitionLink = ({ href, children, ...props }: TransitionLinkProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const { isAnimating, setIsAnimating } = usePageTransitionStore();

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (pathname === href) return;

    if (!isAnimating) {
      setIsAnimating(true);
      await sleep(300);
      router.push(href);
    }
  };

  return (
    <Link
      onClick={handleClick}
      href={href}
      {...props}
      className={pathname === href ? "underline" : ""}
    >
      {children}
    </Link>
  );
};

export default TransitionLink;
