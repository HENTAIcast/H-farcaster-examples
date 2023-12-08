import { ScreenState, useApp } from "@/Context/AppContext";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ScreenLayout = ({ children }: Props) => {
  const { screen } = useApp();

  return (
    <div className="flex flex-col min-h-screen text-white">
      <header className="flex justify-between items-center p-5">
        <div className="flex items-center">
          <Image
            src="/logos/wownar.svg"
            width={60}
            height={60}
            alt="SimpleCaster Logo"
          />
          <h1 className="text-xl font-extralight font-bold ml-3">Wownar</h1>
        </div>
        {screen !== ScreenState.Signin && (
          <div className="flex items-center">
            <span className="mr-2">
              <Image
                src="https://res.cloudinary.com/merkle-manufactory/image/fetch/c_fill,f_jpg,w_168/https%3A%2F%2Fi.imgur.com%2FLPzRlQl.jpg"
                width={40}
                height={40}
                alt="User Profile Picture"
                className="rounded-full"
              />
            </span>
            <span>UserName</span>
          </div>
        )}
      </header>
      {children}
      <footer className="flex justify-center items-center text-center p-4">
        <span>Powered by</span>
        <Image
          src="/logos/powered-by-neynar.png"
          height={150}
          width={150}
          alt="Neynar footer logo"
        />
      </footer>
    </div>
  );
};

export default ScreenLayout;
