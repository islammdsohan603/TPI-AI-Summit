import "./globals.css";

export const metadata = {
  title: "AI Summit 2026 | Tangail Polytechnic Institute",
  description: "An interactive event website for the AI Summit at Tangail Polytechnic Institute.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
