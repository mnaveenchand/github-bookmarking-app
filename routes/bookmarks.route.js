const router = require('express').Router();
const axios = require('axios');
let fs = require('fs')

router.get('/bookmark/:id',async(request, response)=> {
  try {
      let bookmarkid =request.params.id;
      let url_api= `https://api.github.com/repositories/${bookmarkid}`
      const reposjson = await axios.get(url_api,{headers: {'Accept': 'application/vnd.github.symmetra-preview+json'}});
      let data ={
        reposid: reposjson.data.id,
        name: reposjson.data.name,
        owner: reposjson.data.owner.login,
        stars: reposjson.data.stargazers_count,
        forks: reposjson.data.forks_count
      }
      let arr;
      fs.readFile('./Bookmarks.json', (err, dat) => {
        if (err) throw err;
        arr = JSON.parse(dat);
        arr.push(data)
        fs.writeFile('./Bookmarks.json', JSON.stringify(arr, null, 2), (err) => {
        if (err) {
            console.error(err);
            return "unable to locate/read the file";
        };
        console.log("File has been updated");
    });
      }); 
      response.send(`${bookmarkid} added to bookmarks list`)
    } catch (error) {
      console.error(error.response.status, error.response.statusText);
      if(error.response.status===404){
        response.json({"status": error.response.statusText, "Description" :"Please enter a valid repository id"})
      }
  }

});
  
  router.get('/list', (request,response)=>{
    try{
      let data = fs.readFileSync('./Bookmarks.json');
      let bookmark_json = JSON.parse(data);
      response.json(bookmark_json)
    }
    catch(err){
      response.send('error in loading bookmarks')
      console.error(err);
    }
  })

  router.get('/remove',(request, response) => {
    try{
      let removeid = request.query.id;
      fs.readFile('./Bookmarks.json', (err, data) => {
        if (err) throw err;
        let bookmark_json = JSON.parse(data);        
        const index = bookmark_json.findIndex(x => x.reposid === Number(removeid));
        if (index !== undefined) bookmark_json.splice(index, 1); 
        fs.writeFile('./Bookmarks.json', JSON.stringify(bookmark_json, null, 2), (err) => {
          if (err) {
            console.error(err);
            return;
          };
        });
      }); 
      response.json({"data":`removed bookmark ${removeid} successfully`, "status":"success"})
    }
    catch(err){
      response.send(err);
      console.error(err);
    }
  });
module.exports = router;