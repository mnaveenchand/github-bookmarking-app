# conradchallenge
Restful endpoints to bookmark git repositories
Start the service using node index from command line
Endpoints

1. GET http://localhost:3000/listallrepos/search/?id=<searchstring> returns json response of reposid, name, owner, forks, stars

searchstring = <String> (required)
Optional parameters: sort,order, valid qualifiers

Limitations*: 
	1. Search string cannot more than 256 characters
	2. Should not have more than five AND, OR, NOT

*[search guidelines](https://developer.github.com/v3/search/#search-repositories)
  
  
2. GET http://localhost:3000/bookmarks/:id  allows bookmarking a repository by its id.

3. GET http://localhost:3000/bookmarks/remove/?id=<id> to delete the bookmark by its id

4. GET http://localhost:3000/bookmarks/list gives list of bookmarked repositories
