import Header from "@/Components/Header";
import "../Styles/globals.css";
import Footer from "@/Components/Footer";

export const metadata = {
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Seb" }, { name: "Josh", url: "https://nextjs.org" }],
  colorScheme: "dark",
  creator: "Jiachi Liu",
  publisher: "Sebastian Markbåge",
  title: "Selamlar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "./favicon.ico",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <div className="">{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
