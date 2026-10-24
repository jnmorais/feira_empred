import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import Topo from "@/components/Topo";
import { equipe } from "@/lib/config";
import { scriptTema } from "@/lib/tema";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Feira de Empreendedorismo",
    template: "%s · Feira de Empreendedorismo",
  },
  description:
    "Portal da Feira de Empreendedorismo (03/11): expositores, mapa das bancas, votação e painel ao vivo.",
};

export const viewport: Viewport = {
  themeColor: "#3049d8",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={geistSans.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptTema }} />
      </head>
      <body>
        <a className="pular" href="#conteudo">
          Pular para o conteúdo
        </a>
        <Topo />
        <main id="conteudo">{children}</main>
        <footer className="rodape">
          <div className="container rodape-inner">
            <div>
              <strong style={{ color: "var(--texto)" }}>Feira de Empreendedorismo</strong>
              <div>
                Projeto acadêmico — {equipe.curso}. Suporte: {equipe.contatoNome}
                {equipe.contatoEmail && <> · {equipe.contatoEmail}</>}
              </div>
            </div>
            <nav aria-label="Rodapé">
              <Link href="/mapa">Mapa</Link>
              <Link href="/votar">Votação</Link>
              <Link href="/qrcodes">Material impresso</Link>
              <Link href="/proposta">Proposta</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
