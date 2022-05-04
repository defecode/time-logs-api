# time-logs-api
api for timelog app (https://github.com/defecode/time-logs-app)

# installation
clone the code from terminal/cmd by 

```sh
git clone https://github.com/defecode/time-logs-api.git
cd time-logs-api
npm install
```

# how to run
go to the folder and run from app folder

```sh
npm start
```

api endpoint : 

```sh
http://localhost:3001
```

# post new records

```sh
> POST /timelogs HTTP/1.1
> Host: localhost:3001
> User-Agent: insomnia/2022.2.1
> Content-Type: application/json
> Accept: */*
> Content-Length: 82

| {
| 	"start":"2022-04-22T02:00",
| 	"end":"2022-04-22T02:00",
| 	"description":"hello"
| }
```

```sh
< HTTP/2 200 
< content-type: application/json; charset=UTF-8
{
	"status": "ok"
}
```

# get records

```sh
> GET /timelogs HTTP/1.1
> Host: localhost:3001
```

```sh
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Date: Wed, 04 May 2022 16:08:26 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5

[
	{
		"start": "2022-05-04T01:00",
		"end": "2022-05-04T23:02",
		"description": "test"
	},
	{
		"start": "2022-05-03T23:04",
		"end": "2022-05-04T01:03",
		"description": "test hello"
	}
]
```

# how to reset database

go to app folder and run command:

```sh
npm run dbreset
```

# potensial improvement

add authentication and validation