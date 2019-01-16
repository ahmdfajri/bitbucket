import React, { Component } from 'react';
import axios from 'axios';

class DetailPhoto extends Component {
    constructor() {
       //Tempat penyimpanan data-data foto dari json placeholder 
        super();
        this.state = {
            dataKu: [],
            loading: false
        };
    }
    componentDidMount(){
        //Mengambil data foto dari json placeholder lalu di simpan dalam dataKu
        this.setState({loading: true})
        var Id = this.props.match.params.detail
        var link = `https://jsonplaceholder.typicode.com/photos?albumId=${Id}`
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
        // Data yang ada di dataKu di map agar data-data tersebut sesuai dengan header table yang akan ditampilkan
        var css = { border: '1px solid black', padding: '12px' }
        const data = this.state.dataKu.map((item, index) => {
            var no = item.id
            var title = item.title;
            var url = item.url;
            var thumbnailUrl = item.thumbnailUrl;
            return <tr style={css} key={index}>
            <td style={css}>{no}</td>
                <td style={css}>{title}</td>
                <td style={css}><a href={url}>{url}</a></td>
                <td style={css}><img src={thumbnailUrl} /></td>
            </tr>;
        })
        
        return (
            <div>
                    <center>
                        <h1>Data Users</h1>
                        <table style={css}>
                            {this.state.loading ? <p>Loading... </p> : <tbody>
                                <tr>
                                <th>No</th>
                                <th>Title</th>
                                <th>Url</th>
                                <th>Thumbnail Url</th>
                                </tr> {data}
                            </tbody>}
                        </table>
                    </center>
                </div>);
    }
} export default DetailPhoto;