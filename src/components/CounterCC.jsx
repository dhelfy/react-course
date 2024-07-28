import { Component } from "react"

class CounterCC extends Component {
    state = { count: 0 } // создаем state и задаем начальное значение
    IncreaseC = this.IncreaseCount.bind(this) // создаем еще один метод, в котором биндим IncreaseCount к текущему экземпляру
    DecreaseC = this.DecreaseCount.bind(this) // создаем еще один метод, в котором биндим DecreaseCount к текущему экземпляру

    IncreaseCount() { // метод для увеличения счетчика
        this.setState({ count: this.state.count + 1 })
    }

    DecreaseCount() { // метод для уменьшения счетчика
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.IncreaseC}>Increase</button>
                <button onClick={this.DecreaseC}>Decrease</button>
                <p>made with class component</p>
            </>
        )
    }
}

export default CounterCC