import React ,{ Component }from "react";


const ServiceList = [
    {
        icon: '/assets/images/skills-icons/html-5.png',
        title: 'HTML5',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: '/assets/images/skills-icons/sass.png',
        title: 'SASS/CSS',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: '/assets/images/skills-icons/js.png',
        title: 'JAVASCRIPT',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    { 
        icon: '/assets/images/skills-icons/react.png',
        title: 'REACT',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: '/assets/images/skills-icons/webpack.png',
        title: 'WEBPACK',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    { 
        icon: '/assets/images/skills-icons/github.png',
        title: 'GIT HUB',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        <img src={val.icon} alt="" />
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
