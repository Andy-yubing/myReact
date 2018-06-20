import React, {
    Component
} from 'react';
//import logo from '../logo.svg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aa: "asd",
            imgsrc: process.env.PUBLIC_URL + 'images/member_270x210.jpg',
            bb: 1,
            name: 'Joe',
            value: ''
        };
        this.a = 100;
    };

    add() {
        console.log("wo是add");
        this.a++;
        console.log(this.a);
    };
    add1() {
        this.state.bb++;
        this.setState({
            "bb": this.state.bb
        })
        console.log(this.state.bb)
    };
    handleInput = _event => {
        let event = _event
        let elem = event.target
        let value = elem.value
        if (elem.attributes.twoWay != null) {
            let attr = elem.attributes.twoWay.value
            this.setState(state => state[attr] = value)
        }
    }
    render() {
        return (
            <header className="">
                <img src={this.state.imgsrc} className="App-logo" alt="logo" />
                <h1 className="App-title">{this.state.aa}</h1>
                <input type="text" model={this.state.name} />
                <p> {this.state.name}</p>
                <p>点击添加aa {this.a}</p>
                <p>点击添加bb {this.state.bb}</p>
                <p><button onClick={this.add.bind(this)}>aa点击</button></p>
                <p><button onClick={this.add1.bind(this)}>bb点击</button></p>
                <input onInput={this.handleInput}   />
                <p>{this.state.value}</p>
            </header>
        )
    };
}

export default Header;