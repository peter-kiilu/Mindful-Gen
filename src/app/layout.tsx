// src/app/layout.tsx
import { AuthProvider } from "@/lib/authContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { ThemeProvider } from "@/context/ThemeContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MindfulGen 2026 | Next-Gen Wellness Ecosystem",
  description: "Advanced mental wellness and productivity platform for the 2026 generation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="flex h-screen bg-white dark:bg-slate-950 overflow-hidden">
              <Sidebar />
              <main className="flex-1 overflow-y-auto p-8 premium-gradient-bg">{children}</main>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}