const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/article.html', (req, res) => {
	res.sendFile(path.join(__dirname, 'article.html'))
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`)
})
