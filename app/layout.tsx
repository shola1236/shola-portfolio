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
    var dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) { document.documentElement.classList.add('dark'); }
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
