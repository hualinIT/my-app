import React from 'react'

import {ThemeConsumer} from 'pages/ProviderNew/themeContext'

class ButtonNew extends React.Component {

    render() {
        return (
            <ThemeConsumer>
                {
                    theme => <div className="button" style={{color: theme.mainColor}}>按钮</div>
                 }
            </ThemeConsumer> 
        )
    }
}

export default ButtonNew;