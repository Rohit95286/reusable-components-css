"use client";
import classNames from "classnames";
import "./globals.css";
import {Montserrat} from "next/font/google";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Header from "@/components/header/header";

export const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const components = [
    {
      name: "button",
      path: "button",
    },
    {
      name: "input",
      path: "input",
    },
    {
      name: "spinner",
      path: "spinner",
    },
    {
      name: "tabs",
      path: "tabs",
    },
    {
      name: "select",
      path: "select",
    },

    {
      name: "modal",
      path: "modal",
    },
  ];
  return (
    <html lang="en">
      <body>
        <div className="flex gap-5 ">
          <div className="flex flex-col gap-5 bg-primary text-white px-10 min-h-screen">
            <h1
              className="text-2xl text-center mt-10 mb-10"
              style={{fontFamily: montserrat.style.fontFamily}}
            >
              REUSE UI
            </h1>
            {components?.map(data => (
              <div
                key={data.name}
                className={classNames("p-2", {
                  "border-white  border-[1px] border-r-4": pathname.includes(
                    data.path
                  ),
                })}
              >
                <Link href={data.path}>{data.name}</Link>
              </div>
            ))}
          </div>

          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
