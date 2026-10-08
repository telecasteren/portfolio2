import { Outlet, ScrollRestoration } from "react-router";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
