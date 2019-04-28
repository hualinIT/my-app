class MyPromise {
    constructor(executor) {
        if (typeof executor !== 'function') {
            throw new Error('Executor must be a function')
        }
        this.$state = 'PENDING'
        this.$chained = []
        const resolve = res => {
            if (this.$state !== 'PENDING') {
                return
            }
            this.$state = 'FULFILLED'
            this.$internalValue = res
            for (const { onFulfilled } of this.$chained) {
                onFulfilled(res)
            }
        }
        const reject = err => {
            if (this.$state !== 'PENDING') {
                return
            }
            this.$state = 'REJECTED'
            this.$internalValue = err
            for (const { onRejected } of this.$chained) {
                onRejected(err)
            }
        }
        try {
            executor(resolve, reject)
        } catch (err) {
            reject(err)
        }
    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            const _onFulfilled = res => {
                try {
                    resolve(onFulfilled(res))
                } catch (err) {
                    reject(err)
                }
            }
            const _onRejected = err => {
                try {
                    reject(onRejected(err))
                } catch (_err) {
                    reject(_err)
                }
            }
            if (this.$state === 'FULFILLED') {
                _onFulfilled(this.$internalValue)
            } else if (this.$state === 'REJECTED') {
                _onRejected(this.$internalValue)
            } else {
                this.$chained.push({ onFulfilled: _onFulfilled, onRejected: _onRejected })
            }
        })
    }
}


// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import "antd/dist/antd.css";
// import "./index.css";
// import { Select } from "antd";

// function SearchInput() {
//   const [options, setOptions] = useState([]);
//   const [value, setValue] = useState(undefined);

//   function handleChange(val) {
//     setValue(val);
//   }

//   function handleSearch(val) {
//     if (val === "a") {
//       setTimeout(() => {
//         setOptions([{ label: "a", value: "a" }]);
//       }, 1000);
//     } else {
//       setOptions([]);
//     }
//   }

//   return (
//     <div>
//       <p>
//         先输入“a”，查询出数据，选中；然后再次输入其他数据查询，no data,
//         此时失去焦点，期望select为空
//       </p>
//       <Select
//         style={{ width: 300 }}
//         value={value}
//         showSearch
//         defaultActiveFirstOption={false}
//         showArrow={false}
//         filterOption={false}
//         onSearch={handleSearch}
//         onChange={handleChange}
//       >
//         {options.map(item => (
//           <Select.Option key={item.value} value={item.value}>
//             {item.label}
//           </Select.Option>
//         ))}
//       </Select>
//     </div>
//   );
// }

// ReactDOM.render(<SearchInput />, document.getElementById("container"));
