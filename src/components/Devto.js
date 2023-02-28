import React, {useState, useEffect} from 'react'
import '../App.css'
import Nav from './NavBar.js'
import Footer from './Footer'

function Devto() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch( "https://dev.to/api/articles?username=blakeahalt")
          .then((res) => res.json())
          .then((res) => {
            setArticles(res)
          })
    }, [])

    console.log(articles)
    
    
    return(
        <>
        <Nav />
        <div className='devto-container' >
            <div className="articles">
                {articles.map((article) => {
                return (
                    <div key={article.id} className="article">
                        <div style={{marginTop: '15px' }}>
                            <a href={article.url} className="article-title">
                                {article.title}
                            
                            <img style={{ display: 'block',  justifyContent: 'center', width: '95%', border: '3px solid rgb(0,0,0,0.5', borderRadius: '25px', margin: '15 auto', marginTop: '15px', marginLeft: 'auto', marginRight: 'auto',boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)' }} src={article.social_image} alt={article.title}></img>
                            </a>
                        </div>
                    <div style={{justifyContent: 'flex-start', textAlign: 'left', marginLeft: 'auto', marginRight:'auto', marginBottom:'25px', borderRadius: '25px', padding: '15px', width: '90%', color: 'black', border: '1px solid rgb(0,0,0,0.5)', backgroundColor: 'rgb(254,251,235,0.7)', boxShadow: '3px 3px 15px 5px rgba(0,0,0,0.3)', backgroundColor:'rgb(255,255,255,0.6)', color: 'rgb(0, 62, 128)', fontSize: '1.3em' }}>
                        <p style={{fontSize: '1em', marginTop: '0px', marginBottom: '-5px' }}> {article.description} <a href={article.url}>...Read More</a></p>
                       
                        <p style={{ fontSize: '0.7em', marginBottom: '0px' }}> {article.readable_publish_date}, 2023 </p>
                    </div>
                    </div>
                );
                })}
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Devto