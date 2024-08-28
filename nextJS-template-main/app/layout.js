import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/sections/Header";
import Footer from "./component/sections/Footer";
// import ScrollToContent from "./component/ScrollToContent";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJS + Builder.io",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
          {children}
        <Footer/>
        </body>
    </html>
  );
}


