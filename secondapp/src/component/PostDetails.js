import React from 'react';
import {Link} from 'react-router-dom'

const PostDetails = (props) => {
    console.log(props)
    console.log(props.location.search.split('=')[1])
    console.log(props.match.params.topic)
    return(
        <>
            <div class="card ">
                <h5 class="card-header bg-info">{props.match.params.topic} Details Page</h5>
                <div class="card-body">
                    <h5 class="card-title">Special {props.match.params.topic} Details Page</h5>
                    <p class="card-text">{props.match.params.topic} Details is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <h4>You are on page {props.location.search.split('=')[1]}</h4>
                    <Link to="/post" class="btn btn-danger">Post</Link>
                </div>
            </div>
        </>
    )
}

export default PostDetails;