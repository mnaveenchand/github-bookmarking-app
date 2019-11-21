const router = require('express').Router();
const axios = require('axios');

let bookmarksarray=[]; // an array to save bookmarks

router.get('/bookmark/:id',async(request, response)=> {
  try {
      let bookmarkid =request.params.id;
      let url_api= `https://api.github.com/repositories/${bookmarkid}`
      const reposjson = await axios.get(url_api,{headers: {'Accept': '*.*'/* 'application/vnd.github.symmetra-preview+json' */}});
      //console.log("list repos: ",reposjson);
      let data ={
        reposid: reposjson.data.id,
        name: reposjson.data.name,
        owner: reposjson.data.owner.login,
        stars: reposjson.data.stargazers_count,
        forks: reposjson.data.forks_count
      }
      bookmarksarray.push(data)
      response.send(`${bookmarkid} added to bookmarks list`)
      console.log(bookmarksarray)
    } catch (error) {
      console.error(error);
  }

});
  
  router.get('/list', (request,response)=>{
    try{
      response.json(bookmarksarray)
    }
    catch(err){
      response.send('error in loading bookmarks')
      console.error(err);
    }
  })

  router.delete('/remove',(request, response) => {
    try{
      let removeid = request.query.id;
      console.log("removeid:", removeid)
      const index = bookmarksarray.findIndex(x => x.reposid === removeid);
      if (index !== undefined) bookmarksarray.splice(index, 1);
      response.send(`removed bookmark ${removeid} successfully`)
      console.log(bookmarksarray)
    }
    catch(err){
      response.send(err);
      console.error(err);
    }
  });
  


module.exports = router, bookmarksarray;