import { useState } from 'react';
import './App.css';
import { ArticleList, ButtonList } from './components';
import data from './data/data';

function App() {
	const allCategories = [
		'All',
		...new Set(data.map(article => article.category)),
	];

	const [categories, setCategories] = useState(allCategories);
	const [articles, setArticles] = useState(data);

	const filterCategory = (category) => {
		if (category === 'All'){
			setArticles(data)
			return
		}

		const filteredData = data.filter(article => article.category === category);
		setArticles(filteredData)
	}

	return (
		<>
			<div className='title'>
				<h1>
					 Siicked<span>Proyecto</span>Blog
				</h1>
				<img
					src='https://img.freepik.com/fotos-premium/logos-isometricos-redes-sociales-dispersos-fondo_216606-134.jpg?w=1380'
					alt='imagen-header'
				/>
			</div>

			<ButtonList categories={categories} filterCategory={filterCategory}/>

			<ArticleList articles={articles}/>
		</>
	);
}

export default App;
