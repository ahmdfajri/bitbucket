import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Detail extends Component {
    constructor() {
        super();
        this.state = {
            dataKu: [],
            loading: false
        };
    }
    componentDidMount() {
        this.setState({loading: true})
        var id = this.props.match.params.detail
        var link = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        axios.get(link)
        .then((ambilDetail) => {
            console.log(ambilDetail);
            this.setState({
                dataKu: ambilDetail.data,
                loading: false
            })
        })
.catch((x)=>{
console.log(x)
})
};
    render() {
        var css = { border: '1px solid black', padding: '12px' }
        const datafix = this.state.dataKu.map((item) => {
            return item;
        });
        const data = this.state.dataKu.map((item, index) => {
            var id = item.id;
            var name = item.name;
            var mail = item.email;
            var body = item.body;
            return <tr style={css} key={index}>
                <td style={css}>{name}</td>
                <td style={css}>{mail}</td>
                <td style={css}>{body}</td>
                <td><a style={{cursor: "pointer"}} onClick={() => {
                    datafix.splice({id}.id -1, 1);
                    console.log({id}.id)
                    console.log(datafix)
                    this.setState({dataKu: datafix})
                }} style={css}>Delete</a></td>
                <td><Link to='/EditComment' style={css}>Edit</Link></td>
            </tr>;
        })
        
        return (
            <div>
                <center>
                    <h1>Comments</h1>
                    <table style={css}>
                    {this.state.loading ? <p>Loading... </p> : <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Body</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr> {data}
                        </tbody> }
                    </table>
                </center>
            </div>);
    }
} export default Detail;