import React from "react";

function Article({ image, title, description, tags = [], url}) {
    //ปรับความยาวตัวอักษรไม่เกิน100
    const showDescription = description.length > 100 ? `${description.substring(0, 100)}...` : description;
    return (
        <article className="article">
            <img src={image} alt="สถานที่ท่องเที่ยว" className="main-image" />
            <div className="content">
                <h2>{title}</h2>
                <p>{showDescription}</p>
                <div className="tags">
                    {tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                    </div>
                    <a href={url} target="_blank" rel="noopener noreferrer">อ่านต่อ</a>
            </div>
        </article>
    );
}
export default Article;