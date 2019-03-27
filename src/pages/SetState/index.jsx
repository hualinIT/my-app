import React from 'react'
import { Link } from 'react-router-dom'

class SetState extends React.Component {

    state = {
        count: 1
    }

    componentDidMount() {

        // this.setState({ count: this.state.count + 1 }, () => {console.log("cb1===", this.state.count);})
        // console.log({ count: this.state.count })

        // this.setState({ count: this.state.count + 1 }, () => {console.log("cb2===", this.state.count);})
        // console.log({ count: this.state.count })

        // this.setState({ count: this.state.count + 1 }, () => {console.log("cb3===", this.state.count);})
        // console.log({ count: this.state.count })

        this.setState((state) => ({count: state.count + 1}), () => {console.log("cb1===", this.state.count)});
        this.setState((state) => ({count: state.count + 1}), () => {console.log("cb2===", this.state.count)});
        this.setState((state) => ({count: state.count + 1}), () => {console.log("cb3===", this.state.count)});

        setTimeout(() => {
            this.setState({ count: this.state.count + 1 }); //这会立刻引发重新渲染
            console.log("setTimeout-count===", this.state.count);
        }, 0)
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

                <div className="btns">

                </div>
            </div>
        )
    }
}

export default SetState;