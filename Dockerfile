ARG NODE_VERSION

FROM node:${NODE_VERSION}

RUN npm i -g pnpm@8.11.0 @nestjs/cli pkg

WORKDIR /app

COPY package.json ./

RUN pnpm install

COPY . ./

CMD ["pnpm", "start:debug"]

# when using docker compose to build container 
# some value here can be replace like EXPOSE CMD
# here just to clam default value