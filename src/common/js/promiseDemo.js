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
