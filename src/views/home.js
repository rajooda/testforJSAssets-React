import React from 'react'

import { Helmet } from 'react-helmet'

import Menuitem from '../components/menuitem'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>test_for_JS_Assets</title>
        <meta property="og:title" content="test_for_JS_Assets" />
      </Helmet>
      <div className="home-container1">
        <div className="home-bannercontainer">
          <h1 className="home-text">Banner Text</h1>
        </div>
      </div>
      <div className="home-menu">
        <Menuitem rootClassName="menuitem-root-class-name"></Menuitem>
        <Menuitem rootClassName="menuitem-root-class-name5"></Menuitem>
        <Menuitem rootClassName="menuitem-root-class-name4"></Menuitem>
        <Menuitem rootClassName="menuitem-root-class-name3"></Menuitem>
        <Menuitem rootClassName="menuitem-root-class-name2"></Menuitem>
        <Menuitem rootClassName="menuitem-root-class-name1"></Menuitem>
      </div>
      <div className="home-container2">
        <button id="clickHereButton" type="button" className="button">
          <span>
            <span>Click Here</span>
            <br></br>
          </span>
        </button>
      </div>
    </div>
  )
}

export default Home
