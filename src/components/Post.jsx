import React, {useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import ExploreContext from "../ExploreContext";


export default function Post(  ) {

  const params = useParams();

  const { store: { posts } } = useContext(ExploreContext)

  const post = posts.find((p) => p.id == params.id);

  return post ? (
  
    <h1> {post.description} </h1>
  ) : <h4> Loading ... </h4>
}
