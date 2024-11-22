import React from 'react'
import './news.css'
import {ThemeContext} from '../Theme'

function News() {

    const ThemeData = React.useContext(ThemeContext);

    const hardcodedNews = [
        {
            id: 1,
            title: "Some news title",
            description: "Some information about the news",
            image: "https://picsum.photos/800/600?random=1",
        },
        {
            id: 2,
            title: "Some news title",
            description: "Some information about the news",
            image: "https://picsum.photos/800/600?random=2",
        },
        {
            id: 3,
            title: "Some news title",
            description: "Some information about the news",
            image: "https://picsum.photos/800/600?random=3",
        }
    ];

  return (
    <div className={ThemeData.theme ? 'feeds-wrapper' : 'feeds-wrapper dark-theme'}>
        <p className={ThemeData.theme ? 'heading' : 'heading InWhite'}>currently you are using {ThemeData.theme ? '<Light>' : '<Dark>'} theme.</p>
        <div className="news-grid">
            {hardcodedNews.map((item) => (
                <div key={item.id} className="news-card">
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        loading="lazy"
                        onError={(e) => {
                            if (!e.target.src.includes('placehold.co')) {
                                console.warn(`Image failed to load for "${item.title}". Using fallback.`);
                                e.target.src = `https://placehold.co/800x600/darkgray/white?text=${encodeURIComponent(item.title)}`;
                                e.target.alt = 'Placeholder image';
                            }
                        }}
                    />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default News