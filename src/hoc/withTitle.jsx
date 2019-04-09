import React from 'react'

import TopTitle from 'components/topTitle'
import GoHome from 'components/goHome'

const withTitle = (Component) => {
    const NewComponent = () => {
        return (
            <div>
                <TopTitle  title={Component.title}/>
                <GoHome />
                <Component />
            </div>
        )
    }

    return NewComponent;
};

export default withTitle;