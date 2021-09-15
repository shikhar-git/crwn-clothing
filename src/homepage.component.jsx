import React from 'react';
import "./homepage.component.scss"

const HomePage=()=>{
    return(

        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <span className="subtitle">Shop now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">jackets</h1>
                        <span className="subtitle">Shop now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">sneeker</h1>
                        <span className="subtitle">Shop now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">mens</h1>
                        <span className="subtitle">Shop now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">womens</h1>
                        <span className="subtitle">Shop now</span>
                    </div>
                </div>
            </div>
        </div>
)
}
export default HomePage;