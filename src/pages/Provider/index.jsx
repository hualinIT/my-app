import React from 'react'
import { Link } from 'react-router-dom'

import Child from './componets/child'

import {ThemeProvider} from './themeContext'

class ProviderExp extends React.Component {

    render() {
        return (
            <div className="provider-content">
                <div className="mb-10 nav">
                    <Link to="/">go to Home</Link>
                </div>

                <div className="content">
                    <ThemeProvider value={{mainColor: 'green', textColor: 'red'}}>
                        <Child />
                    </ThemeProvider>
                </div>
            </div>
        )
    }
}

export default ProviderExp;