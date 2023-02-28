import React, { Component } from "react";
import shuffle from "../shuffle";

class Field extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        }


    }

    filedClick0 = () => {
        this.setState({
            cards: shuffle(this.state.cards),
        })
        this.props.clickCard(this.state.cards[0]);
    }

    filedClick1 = () => {
        this.setState({
            cards: shuffle(this.state.cards),
        })
        this.props.clickCard(this.state.cards[1]);
    }
    filedClick2 = () => {
        this.setState({
            cards: shuffle(this.state.cards),
        })
        this.props.clickCard(this.state.cards[2]);
    }
    filedClick3 = () => {
        this.setState({
            cards: shuffle(this.state.cards),
        })
        this.props.clickCard(this.state.cards[3]);
    }
    filedClick4 = () => {
        this.setState({
            cards: shuffle(this.state.cards),
        })
        this.props.clickCard(this.state.cards[4]);
    }
    filedClick5 = () => {
        this.setState({
            cards: shuffle(this.state.cards),
        })
        this.props.clickCard(this.state.cards[5]);
    }
    filedClick6 = () => {
        this.setState({
            cards: shuffle(this.state.cards),
        })
        this.props.clickCard(this.state.cards[6]);
    }
    filedClick7 = () => {
        this.setState({
            cards: shuffle(this.state.cards),
        })
        this.props.clickCard(this.state.cards[7]);
    }
    filedClick8 = () => {
        this.setState({
            cards: shuffle(this.state.cards),
        })
        this.props.clickCard(this.state.cards[8]);
    }
    filedClick9 = () => {
        this.setState({
            cards: shuffle(this.state.cards),
        })
        this.props.clickCard(this.state.cards[9]);
    }
    render() {
        return (
            <div>
                <div>
                    <button className="card" onClick={this.filedClick0}>{this.state.cards[0]}</button>
                    <button className="card" onClick={this.filedClick1}>{this.state.cards[1]}</button>
                    <button className="card" onClick={this.filedClick2}>{this.state.cards[2]}</button>
                    <button className="card" onClick={this.filedClick3}>{this.state.cards[3]}</button>
                    <button className="card" onClick={this.filedClick4}>{this.state.cards[4]}</button>
                </div>
                <div>
                    <button className="card" onClick={this.filedClick5}>{this.state.cards[5]}</button>
                    <button className="card" onClick={this.filedClick6}>{this.state.cards[6]}</button>
                    <button className="card" onClick={this.filedClick7}>{this.state.cards[7]}</button>
                    <button className="card" onClick={this.filedClick8}>{this.state.cards[8]}</button>
                    <button className="card" onClick={this.filedClick9}>{this.state.cards[9]}</button>
                </div>
            </div>
        );
    }

}
export default Field;