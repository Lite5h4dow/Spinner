FROM debian:stable-slim
WORKDIR /app
RUN apt-get update && apt-get upgrade
RUN apt-get -y install curl unzip
RUN curl https://bun.sh/install | bash
COPY . /app
ENTRYPOINT /app/entrypoint.sh

