import React from 'react';
import { Link } from 'react-router-dom';

import TopTitle from 'components/topTitle'

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            sorts:  this.buildArr()
        }
    }

    buildArr = () => {
        let len = 10, tempArr = [];

        for (let i = 1; i <= len; i++) {
            tempArr.push({
                name: `a${i}`,
                id: `b${i}`
            })
        }
        return  tempArr;
    }

    reverseSort = () => {
        this.setState((prestate) => ({
            sorts: prestate.sorts.reverse()
        }))
    }

    removeFirstItem = () => {
        this.setState((prestate) => {
            prestate.sorts.splice(100,1);
            return {
                sorts: prestate.sorts
            }
        })
    }

    render() {
        return (
            <div>
                <TopTitle title="首页"/>

                <div className="mb-20">
                    <Link to="/member">go to Member</Link>
                </div>

                <div className="mb-20">
                    <Link to="/setState">go to setState</Link>
                </div>

                <div className="mb-20">
                    <Link to="/providerNew">go to providerNew</Link>
                </div>

                <div className="mb-20">
                    <Link to="/providerOld">go to providerOld</Link>
                </div>

                <div className="mb-20">
                    <Link to="/hooksExample">go to hooksExample</Link>
                </div>

                <div className="mb-20">
                    <Link to="/setStateBtn">go to setStateBtn</Link>
                </div>

                {/* <div className="container">
                    <div className="center">
                        <div>123</div>
                        <div>456</div>
                        <div>789</div>
                    </div>
                    <div className="left">6768</div>
                    <div className="right">777</div>
                </div> */}
                <div onClick={this.reverseSort} className="changeSort">倒序操作</div>
                <div onClick={this.removeFirstItem} className="changeSort">remove</div>
                <ul>
                    {this.state.sorts.map((item, index) => {
                        // return <li key={index}>{item.name}<input type="text" /></li>
                        // return <li key={item.id}>{item.name}<input type="text"/></li>

                        return  <Item item={item} key={index} />
                    })}
                </ul>
            </div>
        );
    }
}

class Item  extends React.Component {

    componentDidMount() {
        console.log('===>mount')
    }

    componentDidUpdate() {
        console.log('===>didUpdate')
    }

    componentWillUnmount() {
        console.log('===>unmount')
    }
    
    render() {
        let {item} = this.props;

        return React.createElement("li", null, item.name, React.createElement("input", {type: "text"}))
            // <li>{item.name}<input type="text"/></li>
    }
}

export default Home;


// class MyPromise {
//     constructor(executor) {
//         if (typeof executor !== 'function') {
//             throw new Error('Executor must be a function')
//         }
//         this.$state = 'PENDING'
//         this.$chained = []
//         const resolve = res => {
//             if (this.$state !== 'PENDING') {
//                 return
//             }
//             this.$state = 'FULFILLED'
//             this.$internalValue = res
//             for (const { onFulfilled } of this.$chained) {
//                 onFulfilled(res)
//             }
//         }
//         const reject = err => {
//             if (this.$state !== 'PENDING') {
//                 return
//             }
//             this.$state = 'REJECTED'
//             this.$internalValue = err
//             for (const { onRejected } of this.$chained) {
//                 onRejected(err)
//             }
//         }
//         try {
//             executor(resolve, reject)
//         } catch (err) {
//             reject(err)
//         }
//     }

//     then(onFulfilled, onRejected) {
//         return new MyPromise((resolve, reject) => {
//             const _onFulfilled = res => {
//                 try {
//                     resolve(onFulfilled(res))
//                 } catch (err) {
//                     reject(err)
//                 }
//             }
//             const _onRejected = err => {
//                 try {
//                     reject(onRejected(err))
//                 } catch (_err) {
//                     reject(_err)
//                 }
//             }
//             if (this.$state === 'FULFILLED') {
//                 _onFulfilled(this.$internalValue)
//             } else if (this.$state === 'REJECTED') {
//                 _onRejected(this.$internalValue)
//             } else {
//                 this.$chained.push({ onFulfilled: _onFulfilled, onRejected: _onRejected })
//             }
//         })
//     }
// }

