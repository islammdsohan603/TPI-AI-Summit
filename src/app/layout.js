import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "AI Summit Tangail Polytechnic Institute",
  description: "Programming Conference Event Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        {children}</body>
    </html>
  );
}