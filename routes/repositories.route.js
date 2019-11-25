const router = require('express').Router();
const axios = require('axios');
let fs = require('fs')
router.get('/search',async(request, response)=> {
    try {
        let searchstring =request.params.searchterm;
        let url_api= ` https://api.github.com/search/repositories?q=${searchstring}`
        const git_response = await axios.get(url_api,{headers: {'content-type': 'application/json'}});
        let data_resp=[]
        for(ele in git_response.data.items){
            data_resp.push({
                reposid: git_response.data.items[ele].id,
                name: git_response.data.items[ele].name,
                owner: git_response.data.items[ele].owner.login,
                stars: git_response.data.items[ele].watchers,
                forks: git_response.data.items[ele].forks,
                bookmark: Bookmarkstatus(git_response.data.items[ele].id)
              })
        }
        response.json(data_resp)

    } catch (error) {
        console.error(error);
    }
});

function Bookmarkstatus(repositoryid){
    let booksmarksRaw = fs.readFileSync('./Bookmarks.json');
    let bookmarklist = JSON.parse(booksmarksRaw);
    const index = bookmarklist.findIndex(x => x.reposid === Number(repositoryid));
    if(index>=0) {return true} else {return false};
}
module.exports = router;