import React, { Component } from 'react';

class EditComment extends Component {
    render() {
        return (
            <div>
                    <center>
                        <h1>Edit Comment</h1>
                        <p>Name:</p>
                        <input placeholder="Type a title"></input>
                        <br/>
                        <p>Email:</p>
                        <input placeholder="Type a body"></input>
                        <br/>
                        <p>Body:</p>
                        <input placeholder="Type a body"></input>
                        <br/>
                    <button>SAVE</button>
                    </center>
                </div>
                );
    }
} export default EditComment;