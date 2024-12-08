// app/layout.tsx
import { inter, jetbrain_mono } from "@/app/fonts";
import "./globals.css";
import { ThemeProvider } from "@/app/ThemeProvider";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaUser, FaBriefcase, FaCode, FaUserGraduate } from "react-icons/fa";
import StickyIcons from "@/components/sections/StickyIcons";
import Footer from "@/components/sections/Footer";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Jayantha Nanduri",
  description: "Portfolio page of Jayantha Nanduri",
};

const navItems = [
  {
    name: "About",
    link: "#about",
    icon: <FaUser />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <FaCode />,
  },
  {
    name: "Work",
    link: "#work",
    icon: <FaBriefcase />,
  },
  {
    name: "Education",
    link: "#education",
    icon: <FaUserGraduate />,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Jayantha's Portfolio" />
        <meta
          property="og:description"
          content="Machine Learning Engineer with 3+ years of experience in the FinTech industry. Skilled in implementing AI-based microservices using Python, SQL, Javascript, Docker, and AWS."
          />
        <meta property="og:url" content="https://www.jayantha-nanduri.py" />
        <script dangerouslySetInnerHTML={{
          __html: `
            if (window.location.href === "https://jaynanduri.github.io/portfolio-website/") {
              window.location.replace("https://www.jayantha-nanduri.py");
            }
          `
        }} />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${jetbrain_mono.variable} ${inter.variable} font-mono antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />
          <StickyIcons />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
