# Backend README

## Dev environment

From the PROJECT_ROOT directory

```shell script
docker-compose -f docker-dev-api.yml up --build
```

This will start the `safety_dashboard-api`, `safety_dashboard-nginx`, and `safety_dashboard-db` containers.

The api will be available at http://localhost:5702

You can access the Swagger Api to test out endpoints at http://localhost:5702/docs

The `safety_dashboard-db` container has been mapped locally to `port: 27018` while running the dev environment. So if you prefer to inspect the database visually, you can run [MongoDB Compass](https://www.mongodb.com/products/tools/compass) on port `27018`.

### Stop

To stop the front end press `ctrl-c` (see `ui/README.md` for more details of front end).

To bring down the Docker containers:

```shell script
docker-compose -f docker-dev-api.yml down
```
