FROM node:18
WORKDIR /app
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
COPY ./src /app
RUN pnpm i
RUN pnpm build
ENTRYPOINT ["/app/entrypoint.sh"]
