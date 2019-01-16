import React, { Component } from 'react';


class Edit extends Component {
    render() {
        return (
            <div>
                    <center>
                        <h1>Edit Post</h1>
                        <p>Title:</p>
                        <input placeholder="Type a title"></input>
                        <br/>
                        <p>Body:</p>
                        <input placeholder="Type a body"></input>
                        <br/>
                    <button>SAVE</button>
                    </center>
                </div>
                );
    }
} export default Edit;