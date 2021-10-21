import Grid from "components/grid";
import React from "react";

import { ProductCard } from "components";
import productData from "utils/handleProducts";

export const TopProduct = () => {
    return (
        <div className="product">
            <div className="product__title">
                <h2>sản phẩm bán chạy</h2>
                <div className="title-underline"></div>
            </div>
            <Grid col={6} mdCol={3} smCol={2}>
                {productData.getProducts(6).map((item, index) => (
                    <ProductCard
                        key={index}
                        img01={item.image01}
                        sale={item.sale}
                        name={item.title}
                        price={Number(item.price)}
                        priceOld={Number(item.priceOld)}
                        slug={item.slug}
                    />
                ))}
            </Grid>
        </div>
    );
};
