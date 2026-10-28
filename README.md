# BHZ Óptica — site

Protótipo do site da BHZ Óptica (Street Shopping Planalto, BH). Astro, multipágina (Início e O espaço).

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # gera dist/

Na Vercel: importar o repositório; o preset Astro é detectado sozinho.

- Telefone/WhatsApp e endereço: `src/data.ts`
- Tipografia: Inter Tight (primária, próxima do letreiro) + Newsreader (secundária). Fontes self-hosted via @fontsource.
- Fotos em `public/img` foram ampliadas 4x (ESRGAN) e tratadas; cada uma tem versões -800 e -1600.
- Marcações amarelas tracejadas (`.todo`) são textos a confirmar com o dono.
