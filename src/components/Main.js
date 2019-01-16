import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Users from './Users';
import Detail from './Detail';
import ButtonPosts from './ButtonPosts';
import ButtonAlbums from './ButtonAlbums';
import DetailPhoto from './Detail_Photo';
import Edit from './Edit';
import EditComment from './EditComment';



const Main = () => (
    <Switch>
        <Route exact path="/User" component={Users} />
        <Route exact path="/Edit" component={Edit} />
        <Route exact path="/EditComment" component={EditComment} />
        <Route exact path="/Detail/:detail" component={Detail} />
        <Route exact path="/ButtonPosts/:detail" component={ButtonPosts} />
        <Route exact path="/Users/ButtonAlbums/:detail" component={ButtonAlbums} />
        <Route exact path="/DetailPhotos/:detail" component={DetailPhoto} />
       

    </Switch>
)

export default Main