import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velocity Advisory — 30-Day Playbooks | Fast-Track Your Business Growth",
  description: "Get actionable business growth strategies in 30 days. Choose from Essentials (£149), Complete (£297), or Accelerator VIP (£549) playbooks. Expert consulting for rapid results.",
  keywords: "business consulting, growth strategy, marketing playbook, business acceleration, startup consulting",
  authors: [{ name: "Velocity Advisory" }],
  openGraph: {
    title: "Velocity Advisory — 30-Day Playbooks",
    description: "Fast-track your business growth with expert consulting playbooks delivered in 30 days.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velocity Advisory — 30-Day Playbooks",
    description: "Fast-track your business growth with expert consulting playbooks delivered in 30 days.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
