import React from 'react'
import PropTypes from 'prop-types'

import TopTitle from 'components/topTitle'
import GoHome from 'components/goHome'
import Child from './componets/child'

class ProviderOld extends React.Component {
    getChildContext() {
        return {
            theme: {
                mainColor: 'red'
            }
        };
    }

    render() {
        return (
            <div className="provider-content">
                <TopTitle title="ProviderOld" />

                <GoHome />

                <div className="content">
                    <Child />
                </div>
            </div>
        )
    }
}

ProviderOld.childContextTypes = {
    theme: PropTypes.object
};

export default ProviderOld;