import "./globals.css";
import NavBar from "../components/NavBar";
import { UserProvider } from "../components/context/UserProvider";

export const metadata = {
  title: "ATILS Academy | Newton Solutions",
  description: "Newton Solutions Training Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0f1e] text-slate-200 min-h-screen">
        <UserProvider>
          <NavBar />
          <main className="pt-24 px-6 max-w-6xl mx-auto">{children}</main>
        </UserProvider>
      </body>
    </html>
  );
}