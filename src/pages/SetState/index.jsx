import React from 'react'
import {connect} from "react-redux";
import {Button} from 'antd';

import TopTitle from 'components/topTitle'
import GoHome from 'components/goHome'

import './index.scss'

class SetState extends React.Component {

    state = {
        count: 0
    }

    onChangeState = () => {
        this.setState({ count: this.state.count + 1 }, () => {console.log("onchnage===cb1===", this.state.count);})
        console.log({ count: this.state.count })
        this.setState({ count: this.state.count + 1 }, () => {console.log("onchnage===cb1===", this.state.count);})
        console.log({ count: this.state.count })
    }

    componentDidMount() {
        // this.setState({ count: this.state.count + 1 }, () => {console.log("object===cb1===", this.state.count);})
        // console.log({ count: this.state.count })

        // this.setState({ count: this.state.count + 1 }, () => {console.log("object===cb2===", this.state.count);})
        // console.log({ count: this.state.count })

        // this.setState((state) => ({count: state.count + 1}), () => {console.log("fn===cb1===", this.state.count)});
        // this.setState((state) => ({count: state.count + 1}), () => {console.log("fn===cb2===", this.state.count)});

        // setTimeout(() => {
        //     this.setState({ count: this.state.count + 1 }); //这会立刻引发重新渲染
        //     console.log("setTimeout-count===", this.state.count);
        // }, 0)
    }

    render() {
        console.count()
        return (
            <div className="state-content">
                <TopTitle title="setState" />
                <GoHome />

                <div className="btns mb_20">
                    <Button type="private" onClick={this.onChangeState}>change state</Button>
                </div>

                <div className="content">
                    <p>state中的count值： {this.state.count}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log({state})

    return {
        reducer: state.wechat
    }
};
  
export default connect(mapStateToProps)(SetState)

// export default SetState;