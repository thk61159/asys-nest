FROM node:18

RUN npm i -g pnpm@8.11.0 @nestjs/cli pkg

WORKDIR /app

COPY package.json ./

COPY pnpm-lock.yaml ./

RUN pnpm install

RUN pnpm config set store-dir /root/.local/share/pnpm/store/v3 --global

COPY . ./

EXPOSE 24689

CMD ["pnpm", "start:debug"]

# when using docker compose to build container 
# some value here can be replace like EXPOSE CMD
# here just to clam default value