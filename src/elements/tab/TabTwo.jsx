import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab3 = "Experience",
        tab4 = "Education & Certification";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="/service">React JS <span> - Frontend framework</span></a>
                                                    Devloping beautiful web applications quickly and efficiently with significantly less code.
                                                </li>
                                                <li>
                                                    <a href="/service">Sass/Scss<span> - Styling CSS extension</span></a>
                                                    Styling beautiful web applications quickly and efficiently with significantly less code.
                                                </li>
                                                <li>
                                                    <a href="/service">Webpack<span> - Module bundler</span></a>
                                                    Utilising Webpack to increase web application performance.
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Front-end Developer<span> - Freelancer</span></a> 2020 - 2022
                                               </li>
                                               <li>
                                                   <a href="/service">Front-end Developer<span> - Vasave business solutions</span></a> 1st May 2022 - 31st May 2022
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">National Extended Diploma Computing Level 3<span> - Reading collage</span></a> 2020
                                               </li>
                                               <li>
                                                   <a href="/service">CS50 Introduction to Computer Science<span> - Harvard university</span></a> 2022
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;