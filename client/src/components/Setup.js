import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"; 

class Setup extends Component {
    state = {
        difficulty: '',
        mode: ''
    };

    handleChange = (e) => {
        this.setState({
            difficulty: e.target.value,
            mode: e.target.value,
        });
    };

    render() {
        let { settings } = this.state;
        return (
            <div>
                {/* <input type="text" onChange={this.handleChange} value={settings.difficulty} /> */}
                <Link to="components/setup" className="btn btn-primary">Submit</Link>
            </div>
        )
    }
}

export default Setup