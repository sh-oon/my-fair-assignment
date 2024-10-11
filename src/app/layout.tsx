import React from "react";
import LayoutRecoil from "./layout.recoil";
import '@/styles/reset.css'
import '@/styles/global.css'
import { ToastProvider } from "@/provider/toast/toast";

export const metadata = {
  title: "myfair front pre-course",
  description: "todolist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <LayoutRecoil>{children}</LayoutRecoil>
        </ToastProvider>
      </body>
    </html>
  );
}
