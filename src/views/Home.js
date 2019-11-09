import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FETCH_ITEMS } from '../actions';
import './Home.scss';
import Card from '../components/Card';
import Cart from '../components/Cart';

class Home extends Component {
    componentDidMount() {
        this.props.FETCH_ITEMS();
    }
    render() {
        return (
            <div id="Home" >
                <section className="section1">
                </section>
                <section className="section2 mb-5">
                    <div className="categoryName">Mobiles</div>
                    <div className="row justify-content-around">{this.props.ITEMS && this.props.ITEMS.map((item, key) => {
                        return (
                            <Card item={item} key={key} keys={key} />
                        )
                    })}</div>
                    <Cart />
                </section>
            </div>
        )
    }
}
const mapStateToProps = ({ ITEMS }) => {
    return { ITEMS };
}

export default connect(mapStateToProps, { FETCH_ITEMS })(Home);