import React from "react";
import { Poppins } from "next/font/google";
import "./globals.css";

import { MyContextProvider } from "./context/Context";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "100", "200", "300", "500", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MyContextProvider>
      <html lang='en'>
        <body className={poppins.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </MyContextProvider>
  );
}
