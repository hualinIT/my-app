import React from 'react'

import './index.scss'

class TopTitle extends React.Component {

    render() {
        return (
            <div className="title-content">
                {this.props.title || '无标题'}
            </div>
        )
    }
}

export default TopTitle;