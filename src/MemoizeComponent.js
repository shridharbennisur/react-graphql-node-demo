import React,{Component} from 'react';
import { memoize } from './helper/memoize';
import Aux from './helper/Hoc';

class MemoizeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 0
        };
    };

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    };

    longOp = memoize((input) => {
        // simulating expensive operation
        console.log('starting')
        let now = Date.now();
        let end = now + 1000;
        while (now < end) {
            now = Date.now();
        }
        return input * 90;
    });

    render() {
        console.log(this.state);
        const { input } = this.state;
        return (
             <Aux>
                <input value={input} onChange={this.handleChange}/>
                {this.longOp(input)}
              </Aux>
        );
    }
}

export default MemoizeComponent;