import React from "react";
import { Link } from "react-router-dom";

import { Banner, Helmet, Hero, PolicyCard, Section } from "components";
import {
    SectionBody,
    SectionContainer,
    SectionHyphen,
    SectionTitle,
} from "components/section";
import Grid from "components/grid";

import { banner } from "../../assets/fake-data/data.json";
import policy from "../../assets/fake-data/policy";
import listData from "assets/fake-data/famous-brand";
import { TopProduct } from "./Product_Top";
import FamousBrand from "./famousBrand";
import GaleryProduct from "./Galery_Product";
import ProductFeature from "./productFeature";

const Home = () => {
    return (
        <Helmet title="Trang chủ">
            <Hero start={banner.start} />

            {/* Policy Card starts */}
            <Section>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={2} gap={20}>
                        {policy.map((item, index) => (
                            <Link key={index} to="/policy">
                                <PolicyCard
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
            {/* Policy Card ends */}

            {/* Famous Brands */}
            <Section>
                <SectionContainer>
                    <SectionHyphen></SectionHyphen>
                    <SectionTitle>Thương hiệu nổi tiếng</SectionTitle>
                    <SectionHyphen></SectionHyphen>
                </SectionContainer>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={2} gap={20}>
                        {listData.getLists(4).map((item, index) => (
                            <FamousBrand
                                key={index}
                                link={item.link}
                                src={item.src}
                                title={item.title}
                                desc={item.desc}
                            />
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
            {/* Famous Brands */}

            {/* best selling section starts */}
            <Section>
                <SectionContainer>
                    <SectionHyphen></SectionHyphen>
                    <SectionTitle>
                        top sản phẩm bán chạy trong tuần
                    </SectionTitle>
                    <SectionHyphen></SectionHyphen>
                </SectionContainer>
                <TopProduct />
            </Section>
            {/* best selling section ends

            {/* banner */}
            <Section>
                <SectionBody>
                    <Link to="/catalog">
                        {/* <img src={banner1} alt="" /> */}
                        <Banner />
                    </Link>
                </SectionBody>
            </Section>
            {/* end banner */}

            {/* best arrival section */}
            <Section>
                <SectionContainer>
                    <SectionHyphen></SectionHyphen>
                    <SectionTitle>sản phẩm nổi bật</SectionTitle>
                    <SectionHyphen></SectionHyphen>
                </SectionContainer>
                <GaleryProduct />
            </Section>
            {/* best arrival section ends */}

            {/* product in feature */}
            <Section>
                <SectionContainer>
                    <SectionHyphen></SectionHyphen>
                    <SectionTitle>sản phẩm trong tương lai</SectionTitle>
                    <SectionHyphen></SectionHyphen>
                </SectionContainer>
                <ProductFeature end={banner.end} />
            </Section>
            {/* ends product in feature */}
        </Helmet>
    );
};

export default Home;
