import React from 'react'

import {ThemeConsumer} from 'pages/Provider/themeContext'

class Button extends React.Component {

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

export default Button;