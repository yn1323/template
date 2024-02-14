import { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Providers } from "@/components/config/ChakraProviders";

const font = Noto_Sans_JP({
  subsets: ["latin"],
  display: "auto",
});

export const metadata: Metadata = {
  title: "title",
  robots: {
    // TODO: need to change
    googleBot: "false",
    index: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <html lang="ja">
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
