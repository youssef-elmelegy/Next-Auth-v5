import { Button } from "@/components/ui/button";

import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main
      className="flex h-full flex-col items-center justify-center 
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-500 to-gray-950"
    >
      <div className="space-y-6 text-center items-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md ",
            font.className
          )}
        >
          Auth
        </h1>
        <p className="text-white mt-1 text-lg">
          here we will handle the auth system
        </p>
        <LoginButton>
          <Button className="" variant="secondary" size="lg">
            Sing in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
