import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            score: 0,
            best: 0,
            memory: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//0~9
        }
    };
    componentDidUpdate(prevProps) {
        //Typical usage, don't forget to compare the props
        if (this.props.id !== prevProps.id) {
            this.clickCard(this.props.id);
        }
    }
    clickCard = (id) => {
        if (this.state.memory[id] === 0) {
            console.log("err22");
            // valid
            this.setState({
                score: this.state.score + 1,
                memory: this.state.memory.map((val, idx) => {
                    if (idx === id) {
                        val = 1;
                    }
                    return val;
                })
            });
            if (this.state.score + 1 > this.state.best) {
                console.log("err34");
                this.setState({
                    best: this.state.score + 1,
                });
            }
        } else {
            console.log("WA");
            // invalid
            this.setState({
                score: 0,
                memory: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            });
        };
    }

    render() {
        return (
            <div>
                <div className="title">Memory Game
                    <div>score:{this.state.score}</div>
                    <div>best:{this.state.best}</div>
                </div>
            </div>
        );
    }


}
export default Header;