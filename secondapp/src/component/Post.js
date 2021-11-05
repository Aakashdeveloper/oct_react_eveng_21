import React from 'react';
import {Link} from 'react-router-dom';

const Post = (props) => {
    return(
        <>
            <div class="card ">
                <h5 class="card-header bg-success">Post Page</h5>
                <div class="card-body">
                    <h5 class="card-title">Special Post Page</h5>
                    <p class="card-text">Post is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <h2>JavaScript</h2>
                    <Link to={`/post/JavaScript?page=1`} class="btn btn-warning">Details</Link>
                    <h2>React</h2>
                    <Link to={`/post/React?page=2`} class="btn btn-danger">Details</Link>
                    <h2>Node</h2>
                    <Link to={`/post/Node?page=3`} class="btn btn-info">Details</Link>
                </div>
            </div>
        </>
    )
}

export default Post;