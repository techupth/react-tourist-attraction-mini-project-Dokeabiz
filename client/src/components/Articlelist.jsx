import React from "react";
import Article from "./Article";

function ArticleList({ articles = [] }) {
    return (
        <div className="article-list">
                {articles.map((article, index) => (
                    <Article 
                    key={index} 
                    title={article.title} 
                    description={article.description} 
                    image={article.photos[0]}
                    url={article.url}
                    tags={article.tags}
                    />
                ))}
            </div>
    );
}
export default ArticleList;