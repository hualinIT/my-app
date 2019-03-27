import React from 'react'
import PropTypes from 'prop-types'

class ButtonOld extends React.Component {

    render() {
        const {mainColor} = this.context.theme;
        
        return (
            <div className="button" style={{color: mainColor}}>按钮</div>
        )
    }
}

ButtonOld.contextTypes = {
    theme: PropTypes.object
}

export default ButtonOld;