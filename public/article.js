document.addEventListener('DOMContentLoaded', () => {
	const params = new URLSearchParams(window.location.search)
	const articleId = params.get('id')

	fetch('data.json')
		.then(response => response.json())
		.then(articles => {
			const article = articles.find(a => a.id === articleId)
			if (article) {
				const articleContainer = document.getElementById('article')
				articleContainer.innerHTML = `
                  <h1>${article.title}</h1>
                  <p>${article.content}</p>
              `
			} else {
				document.getElementById('article').innerHTML = '<p>Article not found.</p>'
			}
		})
		.catch(error => console.error('Error loading article:', error))
})
