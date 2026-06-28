FROM node:22-bookworm-slim

RUN apt-get update -y \
    && apt-get install -y python3 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

RUN node build.js

EXPOSE 4000

CMD ["sh", "-c", "node build.js && python3 -m http.server 4000 -d dist"]
