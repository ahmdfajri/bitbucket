import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Users extends Component {
    constructor() {
        super();
        this.state = {
            dataKu: [],
            loading: false
        };
    }
    componentDidMount() {
        this.setState({loading: true})
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((ambilDataUsers) => {
                console.log(ambilDataUsers);
                this.setState({
                    dataKu: ambilDataUsers.data,
                    loading: false
                })
            })
            .catch((x) => {
                console.log(x)
            })
    };
    render() {
        var css = { border: '1px solid black', padding: '12px' }
        const data = this.state.dataKu.map((item, index) => {
            var id = item.id;
            var name = item.name;
            var username = item.username;
            var mail = item.email;
            var address = [
                item.address.suite,
                item.address.street,
                item.address.city].join(", ");
            return <tr style={css} key={index}>
                <td style={css}>{id}</td>
                <td style={css}>{name}</td>
                <td style={css}>{username}</td>
                <td style={css}>{mail}</td>
                <td style={css}>{address}</td>
                <td><Link to={`/ButtonPosts/${id}`} style={css}>Posts</Link></td>
                <td><Link to={`/Users/ButtonAlbums/${id}`} style={css}>Album</Link></td>
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
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Posts</th>
                                    <th>Album</th>
                                </tr> {data}
                            </tbody>}

                        </table>
                    </center>
                </div>);
            }
        } export default Users;
