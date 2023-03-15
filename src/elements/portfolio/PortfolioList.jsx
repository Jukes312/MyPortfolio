import React, { Component } from "react";

const PortfolioListContent = [
  {
    image: "image-1",
    category: "Built using React and Google maps API",
    title: "Find local gym app",
    showLive: "https://locoalgym.netlify.app/",
    projectCode: "https://github.com/Jukes312/gym",
  },
  {
    image: "image-2",
    category: "Built using React",
    title: "Blog app",
    showLive: "https://reactblogappp.netlify.app/",
    projectCode: "https://github.com/Jukes312/React-app-blog",
  },
  {
    image: "image-3",
    category: "Built using React",
    title: "Color converter app",
    showLive: "https://colorconverterr.netlify.app/",
    projectCode: "https://github.com/Jukes312/my-app",
  },

  {
    image: "image-6",
    category: "Built using HTML5, CSS and Parcel(build tool)",
    title: "Moshify clone",
    showLive: "https://moshifyyy.netlify.app/",
    projectCode: "https://github.com/Jukes312/moshify",
  },
];

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props;
    const list = PortfolioListContent.slice(0, this.props.item);
    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index}>
            <a href={value.showLive} target="_blank">
              <div className={`portfolio ${styevariation}`}>
                <div className="thumbnail-inner">
                  <div className={`thumbnail ${value.image}`}></div>
                </div>
                <div className="content">
                  <div className="inner">
                    <p>{value.category}</p>
                    <h4>
                      <a href="/portfolio-details">{value.title}</a>
                    </h4>
                    <div className="portfolio-button">
                      <a
                        className="rn-btn"
                        href={value.showLive}
                        target="_blank"
                      >
                        Show Live
                      </a>
                      <a
                        className="rn-btn"
                        href={value.projectCode}
                        target="_blank"
                      >
                        Project code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default PortfolioList;
