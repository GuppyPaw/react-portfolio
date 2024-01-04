import React, { useEffect, useState } from "react";
import "./index.scss";
import data from '../../data/portfolio.json'

const Portfolio = () => { 
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        setPortfolio(data.portfolio)
    }

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.image}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    Portfolio
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
        </>
    );
}

export default Portfolio;