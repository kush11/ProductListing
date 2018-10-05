import React, { Component } from 'react';
import Form from './UI/Form';
import Body from '../components/UI/Body/Body';
import About from './UI/About'
import { Route, withRouter } from 'react-router-dom';

class Routing extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <div>
                    <Route path="/"exact component={Form} />
                    <Route path="/Form" exact component={Form} />
                    <Route path="/ProductList" exact component={Body} />
                    <Route path="/About" exact component={About} />
                    {/* <Route path="/about" render={() => <h1>This is about with non-exact </h1>} /> */}
                </div>
            </div>
        )
    }
}

export default withRouter(Routing);