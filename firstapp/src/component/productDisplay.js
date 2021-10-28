import React from 'react';

const ProductDisplay = (props) => {

    const renderProduct = props.prodData.map((item) => {
        return(
            <div className="col" key={item.id}>
                <div className="card" style={{height:'400px'}}>
                <img src={item.image} className="card-img-top" style={{height:'180px',width:'70%','marginLeft':'10%'}}/>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">Rs {item.cost}</p>
                    <p className="card-text">Use: {item.uses}</p>
                </div>
                </div>
            </div>
        )
        
    })

    return(
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {renderProduct}
        </div>
    )
}

export default ProductDisplay;