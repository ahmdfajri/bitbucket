import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class ButtonPosts extends Component {
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
        var link = `https://jsonplaceholder.typicode.com/albums?userId=${id}`
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
        const data = this.state.dataKu.map((item, index) => {
            var id = item.id;
            var no = item.id;
            var title = item.title;
            var body = item.body;
            return <tr style={css} key={index}>
                <td style={css}>{no}</td>
                <td style={css}>{title}</td>
                <td><Link to={`/DetailPhotos/${id}`} style={css}>Detail</Link></td>
            </tr>;
        })
        
        return (
            <div>
                <center>
                    <h1>Albums</h1>
                    <table style={css}>
                    {this.state.loading ? <p>Loading... </p> : <tbody>
                            <tr>
                                <th>No</th>
                                <th>Title</th>
                                <th>Detail</th>
                            </tr> 
                            {data}
                        </tbody> }
                       
                    </table>
                </center>
            </div>);
    }
} export default ButtonPosts;