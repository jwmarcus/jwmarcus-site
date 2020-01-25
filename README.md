# HTML componenets for [jwmarcus.com](http://www.jwmarcus.com)

**Build** locally with docker:

`docker build --tag yourname/yourimage:0.1 .`

**Run** locally with docker:

`docker container run --rm --name jwmarcus-site --publish 8080:80 yourname/yourimage:0.1`

... and find at [localhost:8080](http://localhost:8080)

Docker-compose alternative:

`docker-compose up`
