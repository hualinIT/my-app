import React from 'react'
import { Link } from 'react-router-dom'

class SetState extends React.Component {

    state = {
        count: 1
    }

    componentDidMount() {
        console.log({count: this.state.count})

        this.setState({count: this.state.count + 1})
        console.log({count: this.state.count})

        this.setState({count: this.state.count + 1})
        console.log({count: this.state.count})

        this.setState({count: this.state.count + 1})
        console.log({count: this.state.count})
    }

    render() {
        return (
            <div className="state-content">
                <div className="mb-10 nav">
                    <Link to="/">go to Home</Link>
                </div>

                <div className="content">
                   <p>state中的count值： {this.state.count}</p>
                </div>
            </div>
        )
    }
}

export default SetState;