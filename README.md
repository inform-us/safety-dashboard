# Informus Safety Dashboard

This is an experimental platform designed to bring together several data sources into one central hub.

This should be considered a proof of concept. The technical architecture is fragile and should not be expected to run smoothly.

# Deployment to GAE

## Frontend

- Ensure that `.env.production` exists in the `frontend` directory with the following information:
  - `VITE_APP_NODE_ENV` is set to `production`
  - `VITE_APP_BACKEND_URL` is set to `http://uclvlddpragae12:5802/api`. This tells the front end where the API exists to connect to the back end.

## Backend

- Rename the `.env.example` file to `.env` in the project root directory, ensure `RUNNING_ENV` is set to `production`. All other settings in this file can be left as they are.
- Copy `compose/backend/prod/api.env.example` to `compose/backend/prod/api.env` and enter authentication information
  - `EMAPDB_HOST` should be `uclvldddtaeps02.xuclh.nhs.uk`
  - `EMAPDB_USER` and `EMAPDB_PASSWORD` should be your EMAP username and password
  - `EMAPDB_SCHEMA` should be `informus` to save data to the production database schema on UDS
  - `EMAPDB_WRITE` should be `true` to allow writing to the UDS

## Starting up

From PROJECT_ROOT directory located at `/gae/safety-dashboard/safety-dashboard-prod` on `uclvlddpragae12`:

```shell script
docker compose -p safety-dashboard up --build -d
```

The frontend can be accessed at: `http://uclvlddpragae12:5803`

The backend can be accessed at: `http://uclvlddpragae12:5802`

### Stopping

If you want to save the logs from the Docker containers you should do this before stopping them. Then, from PROJECT_ROOT directory, enter

```shell script
docker compose -p safety-dashboard down
```
