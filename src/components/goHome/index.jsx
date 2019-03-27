import React from 'react'
import { Link } from 'react-router-dom';

import './index.scss'

class GoHome extends React.Component {

    render() {
        return (
           <div className="go-home">
               <Link  className="link" to="/">回到首页</Link>
           </div>
        )
    }
}

export default GoHome;