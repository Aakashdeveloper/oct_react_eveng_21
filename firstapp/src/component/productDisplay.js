import React from 'react';

const ProductDisplay = (props) => {

    const renderProduct = props.prodData.map((item) => {
        return(
            <div class="col">
                <div class="card" style={{height:'400px'}}>
                <img src={item.image} class="card-img-top" style={{height:'180px',width:'70%','marginLeft':'10%'}}/>
                <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">{item.description}</p>
                    <p class="card-text">Rs {item.cost}</p>
                    <p class="card-text">Use: {item.uses}</p>
                </div>
                </div>
            </div>
        )
        
    })

    return(
        <div class="row row-cols-1 row-cols-md-4 g-4">
            {renderProduct}
        </div>
    )
}

export default ProductDisplay;