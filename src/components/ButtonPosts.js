import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class ButtonPosts extends Component {
    constructor() {
        // Tempat penyimpanan data-data foto dari json placeholder 
        super();
        this.state = {
            dataKu: [],
            loading: false
        };
    }
    componentDidMount() {
        //Mengambil data foto dari json placeholder lalu di simpan dalam dataKu
        this.setState({loading: true})
        var id = this.props.match.params.detail
        var link = `https://jsonplaceholder.typicode.com/posts?userId=${id}`
        axios.get(link)
        .then((ambilDetail) => {
            // console.log(ambilDetail);
            this.setState({
                dataKu: ambilDetail.data,
                loading: false
            });

        })
.catch((x)=>{
// console.log(x)
})


};
    render() {
        // Data yang ada di dataKu di map agar data-data tersebut sesuai dengan header table yang akan ditampilkan
        var css = { border: '1px solid black', padding: '12px' }
        const datafix = this.state.dataKu.map((item) => {
            return item;
        });
        const data = this.state.dataKu.map((item, index) => {
            var id = item.id;
            var no = item.id;
            var title = item.title;
            var body = item.body;
            return <tr style={css} key={index}>
                <td style={css}>{no}</td>
                <td style={css}>{title}</td>
                <td style={css}>{body}</td>
                <td><Link to={`/Detail/${id}`} style={css}>Comments</Link></td>
                <td><a style={{cursor: "pointer"}} onClick={() => {
                    datafix.splice({id}.id -1, 1);
                    console.log({id}.id)
                    console.log(datafix)
                    this.setState({dataKu: datafix})
                }} style={css}>Delete</a></td>
                <td><Link to='/Edit' style={css}>Edit</Link></td>
            </tr>;
        })
        
        // const data2 = this.state.datafix.map((item, index) => {
        //     var id = item.id;
        //     var no = item.id;
        //     var title = item.title;
        //     var body = item.body;
        //     return <tr style={css} key={index}>
        //         <td style={css}>{no}</td>
        //         <td style={css}>{title}</td>
        //         <td style={css}>{body}</td>
        //         <td><Link to={`/Detail/${id}`} style={css}>Comments</Link></td>
        //         <td><a style={{cursor: "pointer"}} onClick={() => {
        //             datafix.splice({id}, 1);
        //             console.log(datafix)
        //         }} style={css}>Delete</a></td>
        //         <td><Link to={`/Detail/${id}`} style={css}>Edit</Link></td>
        //     </tr>;
        // })
        
        return (
            <div>
                <center>
                    <h1>Posts</h1>
                    <table style={css}>
                    {this.state.loading ? <p>Loading... </p> : <tbody>
                            <tr>
                                <th>No</th>
                                <th>Title</th>
                                <th>Body</th>
                                <th>Comments</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr> {data}
                        </tbody> }
                    </table>
                    <button>Add</button>
                </center>
            </div>);
    }
} export default ButtonPosts;