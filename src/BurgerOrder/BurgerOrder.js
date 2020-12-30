import React, { Component } from 'react';
import BurgerOrderBugerParts from './BurgerOrderBugerParts';
import BurgerOrderBurgerMenu from './BurgerOrderBurgerMenu';
import BurgerOrderOptionButtons from './BurgerOrderOptionButtons';
import './cssBurger.css';

export default class BaiTapBurger extends Component {
    render() {
        return (
            <div className="container py-3">
                <div className="row">
                    <div className="col-6">
                        <div className="burger__left--title">
                            <h1>Burger order - React Js</h1>
                            <p>Practice to improve react-redux skill!</p>
                        </div>
                        <BurgerOrderBugerParts />
                    </div>
                    <div className="col-6">
                        <div className="burger__left--title pt-3">
                            <p>Choose your burger part:</p>
                            <BurgerOrderOptionButtons />
                        </div>
                        <BurgerOrderBurgerMenu />
                    </div>
                </div>
            </div>
        )
    }
}
