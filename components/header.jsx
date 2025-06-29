import { checkUser } from "@/lib/checkUser";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Calendar, CreditCard, Stethoscope, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";
import { Badge } from "./ui/badge";
import { checkAndAllocateCredits } from "@/actions/credits";

const Header = async () => {
  const user = await checkUser();
  await checkAndAllocateCredits(user);

  return (
    <header className="fixed top-0 z-10 w-full border-b border-gray-700 bg-black/70 backdrop-blur-md supports-[backdrop-filter]:bg-black/60">
      <nav className="container mx-auto h-16 px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo-single.png"
            alt="MediMeet Logo"
            width={200}
            height={60}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Right-side buttons */}
        <div className="flex items-center space-x-2">
          <SignedIn>
            {/* Admin Dashboard */}
            {user?.role === "ADMIN" && (
              <>
                <Link href="/admin" className="hidden md:inline-flex">
                  <Button variant="outline" className="items-center gap-2">
                    <User className="h-4 w-4" />
                    Admin Dashboard
                  </Button>
                </Link>
                <Link href="/admin" className="md:hidden">
                  <Button variant="ghost" className="w-10 h-10 p-0">
                    <User className="h-4 w-4" />
                  </Button>
                </Link>
              </>
            )}

            {/* Doctor Dashboard */}
            {user?.role === "DOCTOR" && (
              <>
                <Link href="/doctor" className="hidden md:inline-flex">
                  <Button variant="outline" className="items-center gap-2">
                    <Stethoscope className="h-4 w-4" />
                    Doctor Dashboard
                  </Button>
                </Link>
                <Link href="/doctor" className="md:hidden">
                  <Button variant="ghost" className="w-10 h-10 p-0">
                    <Stethoscope className="h-4 w-4" />
                  </Button>
                </Link>
              </>
            )}

            {/* Patient Dashboard */}
            {user?.role === "PATIENT" && (
              <>
                <Link href="/appointments" className="hidden md:inline-flex">
                  <Button variant="outline" className="items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    My Appointments
                  </Button>
                </Link>
                <Link href="/appointments" className="md:hidden">
                  <Button variant="ghost" className="w-10 h-10 p-0">
                    <Calendar className="h-4 w-4" />
                  </Button>
                </Link>
              </>
            )}
          </SignedIn>

          {(!user || user?.role !== "ADMIN") && (
            <Link href={user?.role === "PATIENT" ? "/pricing" : "/doctor"}>
              <Badge
                variant="outline"
                className="h-9 bg-emerald-900/20 border-emerald-700/30 px-3 py-1 flex items-center gap-2"
              >
                <CreditCard className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400">
                  {user && user.role !== "ADMIN" ? (
                    <>
                      {user.credits}{" "}
                      <span className="hidden md:inline">
                        {user?.role === "PATIENT"
                          ? "Credits"
                          : "Earned Credits"}
                      </span>
                    </>
                  ) : (
                    <>Pricing</>
                  )}
                </span>
              </Badge>
            </Link>
          )}

          <SignedOut>
            <SignInButton>
              <Button variant="secondary">Sign In</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}

export default Header;
