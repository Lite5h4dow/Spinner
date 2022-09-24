FROM node:18
WORKDIR /app
RUN curl -fsSL "https://download.docker.com/linux/static/${DOCKER_CHANNEL}/x86_64/docker-${DOCKER_VERSION}.tgz" | tar -xzC /usr/local/bin --strip=1 docker/docker
RUN curl -L https://github.com/docker/compose/releases/download/latest/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
COPY ./src /app
RUN pnpm i
ENTRYPOINT ["/app/entrypoint.sh"]
