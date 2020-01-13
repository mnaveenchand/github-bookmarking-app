# github bookmarks manager

This App is a RESTful service to manage github bookmarks and inovlves following tasks 

1. Backend
2. Frontend

Backend part has the following purposes.

1. An endpoint that takes a search term and return a list of repositories.
2. An endpoint that allows bookmarking a repository by its id.
3. An endpoint to get all bookmarked repositories
4. An endpoint to remove a bookmark

Requirements and Dependencies: [Nodejs](https://nodejs.org/en/), 
[Express v4.17.0](https://expressjs.com/), 
axios v0.19.0,
bcrpyt v3.0.6,
cors v2.8.5,
express-timeout-handler v2.2.0,
fs v0.0.1-security

Start the service using node from command line.

```
C:\conradchallenge>node index
```
Using the endpoints are briefly explained in the following table

 |http verb| endpoint | description |
 |---------|--------|------------|
 |GET	   | `/listallrepos/search/?searchterm=searchstring`* | json response with reposid, name, owner, forks, stars 	| 
 |GET	   | `/bookmarks/list`				     | gives list of bookmarked repositories		     	|
 |GET	   | `/bookmarks/bookmark/:repository_id`	     | allows bookmarking a repository by its id.       	|
 |GET	   | `/bookmarks/remove/?id=repository_id`	     | to delete the bookmark of a repository by its id 	|
 |POST     |`/userauth/users`                            | Signup with username, password                         |
 |POST     |`/userauth/users/login`                      | to login with username, password                         |
 
searchstring = <String> (required)
Optional parameters: sort,order, valid qualifiers

*Limitations: 
1. Search string cannot more than 256 characters
2. Should not have more than five AND, OR, NOT

*[search guidelines](https://developer.github.com/v3/search/#search-repositories)

The App's functional backend code is deployed on heroku. 

for fetching list of repositories matching the string helloworld

https://gitbookmarkmanager.herokuapp.com/listallrepos/search/?searchterm=helloworld

### Response
```
[
{
reposid: 123808966,
name: "undefined-is-a-function",
owner: "donavon",
stars: 189,
forks: 6,
bookmark: false
},
{
reposid: 171660097,
name: "undefined-medium",
owner: "andirueckel",
stars: 379,
forks: 4,
bookmark: true
},
{
reposid: 94266774,
name: "undefined-ghost-theme",
owner: "curiositry",
stars: 32,
forks: 13,
bookmark: false
},
{
reposid: 78732259,
name: "FormData",
owner: "henryluki",
stars: 21,
forks: 15,
bookmark: false
},
{
reposid: 32726038,
name: "swift-undefined",
owner: "weissi",
stars: 63,
forks: 5,
bookmark: true
},
{
reposid: 6859964,
name: "defined",
owner: "substack",
stars: 58,
forks: 8,
bookmark: false
},
{
reposid: 158884242,
name: "undefined.fm",
owner: "undefinedfm",
stars: 108,
forks: 4,
bookmark: false
},
{
reposid: 61642617,
name: "undefined",
owner: "HairyRabbit",
stars: 16,
forks: 4,
bookmark: false
},
{
reposid: 14483533,
name: "console.js",
owner: "yanhaijing",
stars: 77,
forks: 25,
bookmark: false
},
{
reposid: 33387350,
name: "undefined.github.io",
owner: "undefined",
stars: 4,
forks: 9,
bookmark: false
},
{
reposid: 2306637,
name: "whole-line-or-region",
owner: "purcell",
stars: 37,
forks: 5,
bookmark: false
},
{
reposid: 38946615,
name: "Undefined",
owner: "sophiacode",
stars: 2,
forks: 7,
bookmark: false
},
{
reposid: 33684641,
name: "ub-canaries",
owner: "regehr",
stars: 130,
forks: 14,
bookmark: false
},
{
reposid: 62342805,
name: "ecmascript-undefined-propagation",
owner: "sebmarkbage",
stars: 79,
forks: 2,
bookmark: false
},
{
reposid: 114792180,
name: "undefinedblog",
owner: "jasonslyvia",
stars: 21,
forks: 2,
bookmark: false
},
{
reposid: 13331937,
name: "strictness",
owner: "Yonaba",
stars: 29,
forks: 5,
bookmark: false
},
{
reposid: 51934577,
name: "is-undefined",
owner: "IonicaBizau",
stars: 3,
forks: 5,
bookmark: false
},
{
reposid: 109060830,
name: "phpcs-variable-analysis",
owner: "sirbrillig",
stars: 59,
forks: 8,
bookmark: false
},
{
reposid: 154914831,
name: "UndefinedTest",
owner: "Demonhero0",
stars: 0,
forks: 5,
bookmark: false
},
{
reposid: 15737587,
name: "undefsafe",
owner: "remy",
stars: 57,
forks: 7,
bookmark: false
},
{
reposid: 80014717,
name: "Undefined",
owner: "JonathanPrall",
stars: 3,
forks: 3,
bookmark: false
},
{
reposid: 187157196,
name: "cpp_blogs",
owner: "shafik",
stars: 75,
forks: 5,
bookmark: false
},
{
reposid: 47328440,
name: "alzheimer",
owner: "VincentLoy",
stars: 4,
forks: 3,
bookmark: false
},
{
reposid: 99022145,
name: "proposal-undefined-coalescing-operator",
owner: "bevacqua",
stars: 77,
forks: 0,
bookmark: true
},
{
reposid: 113518295,
name: "TinyGenericC",
owner: "stevefan1999-personal",
stars: 52,
forks: 5,
bookmark: false
},
{
reposid: 85362876,
name: "Undefined_Drills",
owner: "billy7907",
stars: 0,
forks: 5,
bookmark: false
},
{
reposid: 154148194,
name: "telejson",
owner: "storybookjs",
stars: 23,
forks: 10,
bookmark: false
},
{
reposid: 29044796,
name: "coffeelint-undefined-variables",
owner: "AsaAyers",
stars: 10,
forks: 2,
bookmark: false
},
{
reposid: 180874808,
name: "undefined-iet-2019",
owner: "BME-MIT-IET",
stars: 0,
forks: 4,
bookmark: false
},
{
reposid: 18105039,
name: "undefined8",
owner: "Unk",
stars: 1,
forks: 3,
bookmark: false
}
] 
```

Note: bookmark field in response indicates if the particular repository is either by bookmarked or not by a boolean.

2. A particular repository can be bookmarked by its id with response as follows
https://gitbookmarkmanager.herokuapp.com/bookmarks/bookmark/32726038

### Response
```
32726038 added to bookmarks list
```

3.For List of all bookmarks, the end point  is 
https://gitbookmarkmanager.herokuapp.com/bookmarks/list and 

### Response
```
[
{
reposid: 171660097,
name: "undefined-medium",
owner: "andirueckel",
stars: 379,
forks: 4
},
{
reposid: 99022145,
name: "proposal-undefined-coalescing-operator",
owner: "bevacqua",
stars: 77,
forks: 0
},
{
reposid: 123808,
name: "acts_as_scoop",
owner: "Colmanetg",
stars: 2,
forks: 0
}
]
```

4. To remove a bookmark with repository id, call
https://gitbookmarkmanager.herokuapp.com/bookmarks/remove/?id=123808

### Response
```
{"data":"removed bookmark 123808 successfully","status":"success"}
```

Then call the api for list of bookmarks, notice that the bookmark of that repository id is not listed in the response.

5. To add a user
https://gitbookmarkmanager.herokuapp.com/userauth/users
Content-Type: application/json
```
{"username": "jim", "password": "pass321"}
```

### Response
```
HTTP/1.1 201 Created X-Powered-By: Express Content-Type: text/html; charset=utf-8 Content-Length: 27 ETag: W/"1b-LLLX+2ZEFpS3/q3QRo0eBg4uobs" Date: Fri, 29 Nov 2019 22:57:28 GMT Connection: close jim Registration successful
```

6.Signing in 
https://gitbookmarkmanager.herokuapp.com/userauth/login
Content-Type: application/json
```
{"username": "jim", "password": "pass321"}
```

### Response
```
HTTP/1.1 200 OK X-Powered-By: Express Content-Type: text/html; charset=utf-8 Content-Length: 13 ETag: W/"d-fTehZeed1u8bspQcWBIg7+cam1g" Date: Fri, 29 Nov 2019 22:59:51 GMT Connection: close login Success
```


Taking this project further
1. Frontend with React and Redux 
...will be updated
