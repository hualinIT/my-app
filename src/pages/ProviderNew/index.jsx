import React from 'react'

import TopTitle from 'components/topTitle'
import GoHome from 'components/goHome'
import Child from './componets/child'

import { ThemeProvider } from './themeContext'

class ProviderNew extends React.Component {

    render() {
        return (
            <div className="provider-content">
                <TopTitle  title="ProviderNew" />
                <GoHome />

                <div className="content">
                    <ThemeProvider value={{ mainColor: 'green', textColor: 'red' }}>
                        <Child />
                    </ThemeProvider>
                </div>
            </div>
        )
    }
}

export default ProviderNew;