import React, { Component } from "react";


const PortfolioListContent = [
    {
        image: 'image-1',
        category: 'Created using React JS and CSS',
        title: 'React blog app',
        showLive: 'https://reactblogappp.netlify.app/'
    },
    {
        image: 'image-2',
        category: 'Development',
        title: 'Color converter app',
        showLive: 'https://colorconverterr.netlify.app/'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show',
        showLive:''
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show',
        showLive:''
    },
    {
        image: 'image-5',
        category: 'Development',
        title: 'Getting tickets to the big show',
        showLive:''
    },
    {
        image: 'image-6',
        category: 'Development',
        title: 'Moshify clone',
        showLive:'https://moshifyyy.netlify.app/'
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <a href={value.showLive} target='_blank'>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4><a href="/portfolio-details">{value.title}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href={value.showLive} target='_blank'>Show Live</a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;