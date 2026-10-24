import type { Metadata } from "next";
import Link from "next/link";
import BotaoImprimir from "@/components/BotaoImprimir";
import { equipe, feira, MUSIC_COOKIES_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Proposta — Demanda 1B",
  description: "Problema, solução, implementação e nível de entrega do portal da Feira de Empreendedorismo.",
};

export default function Proposta() {
  return (
    <>
    <section className="cabecalho-pagina">
      <div className="container" style={{ maxWidth: 880 }}>
        <span className="sobretitulo">Atividade 1 · Demanda 1B — Solução para a própria feira</span>
        <h1>Proposta técnica</h1>
        <p className="lead">
          Grupo de {equipe.curso}. A solução está implementada e publicada neste site. A Demanda 1A (Music Cookies)
          está em um projeto separado: <a href={MUSIC_COOKIES_URL}>{MUSIC_COOKIES_URL.replace(/^https?:\/\//, "")}</a>.
        </p>
        <div className="botoes nao-imprimir">
          <BotaoImprimir className="botao secundario pequeno" texto="Imprimir / salvar em PDF" />
        </div>
      </div>
    </section>
    <section className="secao">
      <div className="container documento" style={{ maxWidth: 880 }}>
        <h2>Demanda 1B — Portal digital da Feira de Empreendedorismo</h2>
        <dl>
          <dt>Para quem</dt>
          <dd>
            Visitantes (alunos, familiares e público externo), grupos expositores e organização da Feira de{" "}
            {feira.dataTexto}, {feira.horario}, no {feira.local.toLowerCase()}.
          </dd>

          <dt>Problema / oportunidade</dt>
          <dd>
            A feira dura duas horas e meia, com pico no intervalo. O visitante não sabe de antemão quem está expondo,
            onde fica cada banca nem o que cada uma vende; os grupos não têm um canal único de divulgação; e a
            organização não tem um jeito rápido de medir a opinião do público.
          </dd>

          <dt>Solução proposta</dt>
          <dd>
            Um <strong>portal web acessado por QR Code</strong>, sem instalar app:
            <ul>
              <li>
                <Link href="/">Página da feira</Link> com informações e contagem regressiva;
              </li>
              <li>
                <Link href="/">Página de cada expositor</Link>, com resumo, produtos e atalhos (ex.: a banca da Music Cookies leva direto ao criador de presentes musicais);
              </li>
              <li>
                <Link href="/mapa">Mapa interativo</Link> das bancas, incluindo o ponto de Suporte TI;
              </li>
              <li>
                <Link href="/votar">Votação</Link> na banca favorita + nota da feira + sugestões (1 voto por
                aparelho);
              </li>
              <li>
                <Link href="/resultados">Painel ao vivo</Link> para TV/projetor, com ranking e QR para votar;
              </li>
              <li>
                <Link href="/qrcodes">Folha de QR Codes</Link> pronta para imprimir (entrada, mesas e uma placa
                por banca);
              </li>
              <li>Acessibilidade: texto maior, alto contraste, navegação por teclado e leitores de tela.</li>
            </ul>
          </dd>

          <dt>Como será implementado</dt>
          <dd>
            Aplicação Next.js (React + TypeScript) hospedada na Vercel. Os votos são gravados no Upstash Redis (integração gratuita da Vercel) por
            uma API própria que valida os dados e impede voto duplicado do mesmo aparelho. Os comentários ficam visíveis
            apenas para a organização (painel com chave de acesso). No dia: QR Codes impressos na entrada e nas bancas,
            painel em uma TV/notebook e alunos de SI/ES na banca de suporte.
          </dd>

          <dt>Nível de implementação</dt>
          <dd>
            <strong>Versão inicial funcional publicada.</strong> Falta apenas confirmar com a organização a disposição
            real das mesas no pátio (ajustável em um arquivo) e conectar o banco de votos na Vercel.
          </dd>
        </dl>

        <h2>Contato para suporte e continuidade</h2>
        <dl>
          <dt>Responsável</dt>
          <dd>{equipe.contatoNome}</dd>
          {equipe.contatoEmail && (
            <>
              <dt>E-mail</dt>
              <dd>{equipe.contatoEmail}</dd>
            </>
          )}
          {equipe.contatoWhatsapp && (
            <>
              <dt>WhatsApp</dt>
              <dd>
                <a href={`https://wa.me/${equipe.contatoWhatsapp}`}>+{equipe.contatoWhatsapp}</a>
              </dd>
            </>
          )}
          <dt>Integrantes</dt>
          <dd>{equipe.integrantes.join(", ")}</dd>
        </dl>
      </div>
    </section>
    </>
  );
}
