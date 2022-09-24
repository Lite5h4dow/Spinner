FROM node:18
WORKDIR /app
RUN curl -fsSL https://get.docker.com | sh -
RUN curl -L https://github.com/docker/compose/releases/download/latest/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
COPY ./src /app
RUN pnpm i
RUN pnpm build
ENTRYPOINT ["/app/entrypoint.sh"]
