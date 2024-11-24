document.addEventListener('DOMContentLoaded', () => {
	fetch('data.json')
		.then(response => response.json())
		.then(articles => {
			const articlesContainer = document.getElementById('articles')
			articles.forEach(article => {
				const articleCard = document.createElement('div')
				articleCard.classList.add('article-card')

				articleCard.innerHTML = `
                  <h2>${article.title}</h2>
                  <p>${article.description}</p>
                  <a href="article.html?id=${article.id}" class="button">Read More</a>
              `
				articlesContainer.appendChild(articleCard)
			})
		})
		.catch(error => console.error('Error loading articles:', error))
})
