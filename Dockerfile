FROM node:18

RUN npm i -g pnpm @nestjs/cli pkg

WORKDIR /app

COPY package.json ./

RUN pnpm install

EXPOSE 24689

CMD ["pnpm", "start:debug"]

# when using docker compose to build container 
# some value here can be replace like EXPOSE CMD
# here just to clam default value