import React from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const client = new ApolloClient({
    uri:"http://localhost:8600/graphql"
})

const GET_PRODUCTS = gql`
    query product($id: Int){
        product(id: $id){
            name,
            aggregate_rating,
            min_price
        }
    }
`

const Product = () => {
    return(
        <div>
        <Query query={GET_PRODUCTS} client={client} variables={{id:3}}>
            {({loading,error,data}) => {
                if(loading) return <div>Loading...</div>
                if(error) return <div>Error...</div>
                return(
                    <div>
                        <h2>{data.product.name}</h2>
                        <h2>{data.product.aggregate_rating} Star</h2>
                        <h2>Rs. {data.product.min_price}</h2>
                    </div>
                )
            }}
        </Query>
        </div>
    )
}


export default Product