import React from 'react';
import { Link } from 'react-router-dom';
import './withTitle.scss';

const withTitle = (Component) => {
    const NewComponent = () => {
        return (
            <div>
                <div className="title-content">
                    {Component.title || '无标题'}
                </div>

                <Component />

                <div className="go-home">
                    <Link  className="link" to="/">回到首页</Link>
                </div>
            </div>
        )
    }

    return NewComponent;
};

export default withTitle;