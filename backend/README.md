# Backend README

## Dev environment

From the PROJECT_ROOT directory

```shell script
docker-compose -f docker-dev-api.yml up --build
```

This will start the `safety_dashboard-api`, `safety_dashboard-nginx`, and `safety_dashboard-db` containers.

The `safety_dashboard-db` container has been mapped locally to `port: 27018` while running the dev environment. So if you prefer to inspect the database visually, you can run [MongoDB Compass](https://www.mongodb.com/products/tools/compass) on port `27018`.

## Prod environment

On the GAE the folder `/gae/safety-dashboard/safety-dashboard-prod` contains the `main` branch of this repository. To deploy the live dashboard on the GAE:

- In the `.env` file in the project root directory, ensure `RUNNING_ENV` is set to `production`
- Copy `compose/backend/prod/api.env.example` to `compose/backend/prod/api.env` and enter authentication information
  - `EMAPDB_HOST` should be `uclvldddtaeps02.xuclh.nhs.uk`
  - `EMAPDB_USER` and `EMAPDB_PASSWORD` should be your EMAP username and password
  - `EMAPDB_SCHEMA` should be `informus` to save data to the production database schema on UDS
  - `EMAPDB_WRITE` should be `true` to allow writing to the UDS
- Ensure that `.env.production` exists in the `ui` directory with the following information:
  - `VITE_APP_NODE_ENV` is set to `production`
  - `VITE_APP_BACKEND_URL` is set to `http://uclvlddpragae12:5702/api`. This tells the front end where the API exists to connect to the back end.

### Starting up

From PROJECT_ROOT directory located at `/gae/safety-dashboard/safety-dashboard-prod` on `uclvlddpragae12`:

```shell script
docker compose -p safety-dashboard up --build -d
```
