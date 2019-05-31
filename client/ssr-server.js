const express = require('express')
const app = express()

const port = process.env.PORT || 3000;

app.use(express.static('public'))

app.set('views', __dirname)
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get("*", (requrest, response) => {
    response.render('./public/index.html')
})

app.listen(port, () => console.log(`Client hosting success at port : ${port}`))

