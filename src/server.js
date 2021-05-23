const url = 'https://api.github.com/orgs/takenet/repos?sort=created&direction=asc'
const express = require ('express')
const axios = require('axios')
const app = express()

const language = f => f.language === 'C#'

app.get('/', async (req, res) => {

    try {
        const { data } = await axios (url)
        
        const repos = data
            .filter(language)
            .slice(0, 5)
        
        return res.json(repos)
    } catch (error) {
        console.error(error)
    }
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });