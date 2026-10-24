"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Acessibilidade from "./Acessibilidade";

const links = [
  { href: "/", texto: "Início" },
  { href: "/mapa", texto: "Mapa" },
  { href: "/votar", texto: "Votação" },
  { href: "/resultados", texto: "Painel" },
  { href: "/proposta", texto: "Proposta" },
];

export default function Topo() {
  const caminho = usePathname();
  return (
    <header className="topo">
      <div className="container topo-inner">
        <Link href="/" className="marca">
          <span className="marca-simbolo">FE</span>
          <span className="marca-texto">
            <strong>Feira de Empreendedorismo</strong>
            <span>03/11 · 20h às 22h30</span>
          </span>
        </Link>
        <nav className="nav" aria-label="Principal">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={caminho === l.href ? "page" : undefined}>
              {l.texto}
            </Link>
          ))}
        </nav>
        <Acessibilidade />
      </div>
    </header>
  );
}
