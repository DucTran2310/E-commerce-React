import Grid from "components/grid";
import React, { useState } from "react";

import { ProductCard } from "components";

import products from "assets/fake-data/products";
import ButtonCate from "./Button";

const allCategories = [
    "All",
    ...new Set(products.map(product => product.categorySlug)),
];
// console.log(allCategories);

const GaleryProduct = () => {
    const [data, setData] = useState(products);
    const [buttons, setButtons] = useState(allCategories);

    const filter = button => {
        if (button === "All") {
            setData(products);
            return;
        }

        const filteredData = products.filter(
            product => product.categorySlug === button
        );
        setData(filteredData);
    };

    return (
        <>
            <div className="menu-tabs ConTainer">
                <ButtonCate button={buttons} filter={filter} />
                <Grid col={4} mdCol={2} smCol={1} gap={20}>
                    {data.map((item, index) => {
                        if (index < 24)
                            return (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    name={item.title}
                                    price={Number(item.price)}
                                    priceOld={Number(item.priceOld)}
                                    sale={item.sale}
                                    slug={item.slug}
                                />
                            );
                    })}
                </Grid>
            </div>
        </>
    );
};

export default GaleryProduct;
