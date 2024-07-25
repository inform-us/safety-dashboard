# build stage
FROM python:3.10-slim-bookworm AS build-stage

# these args are necessary for enabling outside network communications on the GAE
# they are set from environment variables that exist on the GAE and may not be set on your local environment, so please ignore any docker warnings
# they are optional to include as ARG's here, but have been included for documentation purposes. 
# however, the ARGS are necessary to include in the docker-compose.yml files
ARG HTTP_PROXY
ARG HTTPS_PROXY
ARG http_proxy
ARG https_proxy

# setup venv and update pip
ENV VIRTUAL_ENV=/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"
RUN pip install -U wheel pip

# run stage
FROM python:3.10-slim-bookworm AS run-stage

# some basic tools
RUN export DEBIAN_FRONTEND=noninteractive && \
    apt-get update && \
    apt-get install --yes --no-install-recommends procps ca-certificates curl && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN useradd --create-home apiuser
USER apiuser
WORKDIR /home/apiuser
COPY --chown=apiuser:apiuser ./pyproject.toml .

EXPOSE 8000

ENV VIRTUAL_ENV=/venv
COPY --from=build-stage --chown=apiuser:apiuser $VIRTUAL_ENV $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

COPY --chown=apiuser:apiuser ./backend ./backend
RUN pip install .

FROM run-stage AS debug
RUN pip install debugpy
# the port can be set to anything as long as it is the same as the proxy_pass port set in `/nginx/conf.d/api.conf`
ENTRYPOINT ["python",  "-m",  "debugpy",  "--wait-for-client", "--listen",  "0.0.0.0:5678", "-m", "uvicorn", "backend.main:app", "--host=0.0.0.0", "--port=8000", "--no-access-log"]

FROM run-stage AS run
# the port can be set to anything as long as it is the same as the proxy_pass port set in `/nginx/conf.d/api.conf`
ENTRYPOINT ["uvicorn", "backend.main:app", "--host=0.0.0.0", "--port=8000", "--no-access-log"]
