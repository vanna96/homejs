import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import { Providers } from "@/redux/provider";

const roboto = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`m-0 ${roboto?.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
