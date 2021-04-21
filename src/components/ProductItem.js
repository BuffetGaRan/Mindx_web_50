const ProductItem = (props) => {

    return (

        <div className="list-product">
            <div className="item-product">
                <div className="image">
                    <img src={props.image} alt="Nothing"/>
                </div>
                <div className="info">
                    <div className="title">{props.title}</div>
                    <div className="price">{props.price}</div>
                    <div className="sale">{props.sale}</div>
                </div>
            </div>
            <div className="btn-buy">
                <button id="btn-buy">
                    <i class={props.icon}></i>
                </button>
            </div>
        </div>

    );

}

export default ProductItem;