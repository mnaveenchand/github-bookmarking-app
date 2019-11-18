const router = require('express').Router();
const axios = require('axios');

//
router.get('/search',async(request, response)=> {
    try {
        let searchstring =request.params.search;
        let url_api= ` https://api.github.com/search/repositories?q=${searchstring}`
        const git_response = await axios.get(url_api,{headers: {'content-type': 'application/json'}});
        console.log("list repos: ",git_response.data.items);
        response.json(git_response.data.items)
    } catch (error) {
        console.error(error);
    }
});
module.exports = router;