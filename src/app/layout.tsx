import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReviewGenie — AI Review Responder for Small Businesses",
  description: "Never miss a customer review again. AI drafts perfect replies in your brand voice. One-click approve and post.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
