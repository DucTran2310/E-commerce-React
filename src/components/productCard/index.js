import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Button } from "components";
import numberWithCommas from "utils/numberWithCommas";

const ProductCard = props => {
    return (
        <div className="product-card">
            <Link
                to={`/catalog/${props.slug}`}
                style={{ textDecoration: "none" }}
            >
                <div className="product-card__image">
                    <img src={props.img01} alt="" />
                </div>
                <h3 className="product-card__name">{props.name}</h3>
                <div className="product-card__price">
                    {numberWithCommas(props.price) + " đ"}
                    <div className="product-card__price__old">
                        <span className="product-card__price__old__infor">
                            <del>{numberWithCommas(props.priceOld) + " đ"}</del>
                        </span>
                        <span className="product-card__price__old__sale">
                            {props.sale}
                        </span>
                    </div>
                </div>
                <div className="product-card__btn">
                    <Button size="sm" icon="bx bx-cart" animate={true}>
                        Chọn mua
                    </Button>
                </div>
            </Link>
        </div>
    );
};

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string,
    sale: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceOld: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
};

export default ProductCard;
