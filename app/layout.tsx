import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/bricolage-grotesque";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shola Akinosi | Portfolio",
  description: "Web developer, QA specialist and founder building in crypto and AI.",
};

// Runs before paint so the saved theme applies without a flash.
const themeScript = `
(function () {
  try {
    var saved = localStorage.getItem('theme');
    var light = saved ? saved === 'light' : window.matchMedia('(prefers-color-scheme: light)').matches;
    document.documentElement.classList.toggle('light', light);
  } catch (e) { document.documentElement.classList.add('light'); }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
