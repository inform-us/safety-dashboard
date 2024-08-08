FROM node:20-bookworm-slim

# these args are necessary for enabling outside network communications on the GAE
# they are set from environment variables that exist on the GAE and may not be set on your local environment, so please ignore any docker warnings
# they are optional to include as ARG's here, but have been included for documentation purposes. 
# however, the ARGS are necessary to include in the docker-compose.yml files
ARG HTTP_PROXY
ARG HTTPS_PROXY
ARG http_proxy
ARG https_proxy

# OS packages
RUN export DEBIAN_FRONTEND=noninteractive && \
    apt-get update && \
    apt-get install --yes --no-install-recommends procps ca-certificates curl && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# although this is optional, it is recommended for avoiding errors
# see here for more info: https://stackoverflow.com/questions/59275686/dockerizing-node-js-app-what-does-env-path-app-node-modules-binpath
ENV PATH /app/node_modules/.bin:$PATH

# copy app
COPY . .

# install dependencies
RUN npm ci --silent

# we use the serve package to expose the frontend as it offers a simpler and cleaner approach than setting up a more complex nginx configuration
RUN npm install serve@14.2.3 -g --silent

ARG RUNNING_ENV

# build
RUN if [ "$RUNNING_ENV" = "staging" ] ; then npm run build:staging; else npm run build; fi

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s \
    CMD ["curl", "--fail", "-L", "http://localhost:5000"]

# the -s flag serves the frontend as a single-page-application (SPA)
# the port can be set to anything as long as it is the same as the proxy_pass port set in `/nginx/conf.d/ui.conf`
ENTRYPOINT ["serve", "-p", "5000", "-s", "dist"]
