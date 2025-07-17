
FROM node:20.12.0

WORKDIR /app

RUN npm install -g pnpm

RUN node -v && pnpm -v

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

ENV NODE_ENV=production
ENV NEXT_PUBLIC_APP_NAME="DeAgent AI"
ENV NEXT_PUBLIC_APP_URL="https://deagent.ai"
ENV NEXT_PUBLIC_APP_LOGO="/favicon/favicon.ico"
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=1234

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
