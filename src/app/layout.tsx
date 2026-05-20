import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "다이맥스 어드벤처 가이드 | 빠른 클리어를 위한 렌탈 포켓몬 추천",
  description:
    "포켓몬 소드/실드 The Crown Tundra의 다이맥스 어드벤처 공략 사이트. 효율적인 렌탈 포켓몬, 전설 포켓몬별 추천 파티, 타입 상성표를 제공합니다.",
};

const NAV = [
  { href: "/", label: "홈" },
  { href: "/rentals", label: "렌탈 포켓몬" },
  { href: "/legendaries", label: "전설 포켓몬" },
  { href: "/type-chart", label: "타입 상성" },
  { href: "/type-calculator", label: "상성 계산기" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-50 backdrop-blur bg-[color:var(--background)]/85 border-b border-[color:var(--border)]">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-6 flex-wrap">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
              <span className="inline-block w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-rose-700 ring-2 ring-white/20" />
              <span>다이맥스 어드벤처 가이드</span>
            </Link>
            <ul className="flex items-center gap-1 ml-auto flex-wrap text-sm">
              {NAV.slice(1).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="px-3 py-1.5 rounded-md hover:bg-[color:var(--surface-2)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-[color:var(--border)] py-6 text-center text-xs text-gray-400">
          <div className="max-w-6xl mx-auto px-4">
            본 사이트는 비공식 팬 가이드입니다. 데이터는 점진적으로 보완 중입니다.
            포켓몬 관련 모든 권리는 Nintendo / Game Freak / The Pokémon Company에 있습니다.
          </div>
        </footer>
      </body>
    </html>
  );
}
