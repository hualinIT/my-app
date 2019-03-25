import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

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
                <div className="mb-10 nav">
                    <Link to="/">go to Home</Link>
                </div>

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