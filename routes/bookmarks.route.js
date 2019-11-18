const router = require('express').Router();
const axios = require('axios')

let bookmarksarray=[];
router.get('/search',async(request, response)=> {
  try {
      let searchid =request.query.id;
      let searchparams = request.query.label
      let url_api= `https://api.github.com/search/labels?repository_id=${searchid}&q=${searchparams}`
      const reposjson = await axios.get(url_api,{headers: {'Accept': 'application/vnd.github.symmetra-preview+json'}});
      console.log("list repos: ",reposjson.data.items);
      let data ={
        reposid:searchid,
        label :searchparams,
        bookmarkData:reposjson.data.items
      }
      bookmarksarray.push(data)
      response.send(`${searchid} added to bookmarks list`)
      console.log(bookmarksarray)
    } catch (error) {
      console.error(error);
  }

});
  
  router.get('/list', (request,response)=>{
    try{
      response.send(bookmarksarray)
    }
    catch(err){
      response.send('error in loading bookmarks')
      console.error(err);
    }
  })

  router.delete('/remove',(request, response) => {
    try{
      let removeid = request.query.id;
      for( let i = 0; i < bookmarksarray.length; i++){ 
        if ( bookmarksarray[i].reposid === removeid) {
          bookmarksarray.splice(i, 1); 
        }
     }
      response.send(`${removeid} removed successfully`)
      console.log(bookmarksarray)
    }
    catch(err){
      response.send(err);
      console.error(err);
    }
  });

module.exports = router;