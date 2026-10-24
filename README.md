# Feira de Empreendedorismo — Portal

Projeto da Atividade 1, **Demanda 1B** (Sistemas de Informação / Engenharia de Software): portal digital da Feira de Empreendedorismo de 03/11, acessado por QR Code.

A Demanda 1A (Music Cookies) está em outro repositório: [jnmorais/music-cookie](https://github.com/jnmorais/music-cookie).

## Páginas

| Rota | O que é |
| --- | --- |
| `/` | Portal: informações, contagem regressiva e expositores |
| `/expositores/[slug]` | Página de cada banca |
| `/mapa` | Mapa interativo (`?banca=slug` destaca uma banca) |
| `/votar` | Votação na banca favorita + nota da feira |
| `/resultados` | Painel ao vivo (`?chave=FEIRA_ADMIN_KEY` mostra os comentários) |
| `/qrcodes` | Folha de QR Codes para imprimir |
| `/proposta` | Texto da entrega 1B |

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Publicar na Vercel

1. Em vercel.com → **Add New → Project**, importe `jnmorais/feira_empred`.
2. **Banco dos votos:** aba **Storage → Create Database → Upstash (Redis)**, plano gratuito, conectado ao projeto. A integração cria `KV_REST_API_URL` e `KV_REST_API_TOKEN`. Sem isso a votação roda em modo demonstração (memória) e os votos se perdem.
3. **`FEIRA_ADMIN_KEY`** (opcional): senha para ver os comentários em `/resultados?chave=SUA_SENHA`.
4. Faça um novo deploy depois de adicionar as variáveis.

## O que editar antes da feira

- `src/lib/config.ts` — contato do grupo e `MUSIC_COOKIES_URL` (endereço do site da Music Cookies na Vercel).
- `src/lib/expositores.ts` — descrições das bancas e posição no mapa (`mapa: { x, y }`, de 0 a 100).
