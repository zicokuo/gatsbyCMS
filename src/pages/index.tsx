import React, {Component, useEffect, useState} from 'react';
import '../styles/index.css';
import {graphql, useStaticQuery} from "gatsby";


const Index = (): JSX.Element => {
    const res = useStaticQuery(graphql`
        query Query {
            shopifyProduct(title: {}, priceRange: {}) {
                id
                title
                description
                priceRange {
                    minVariantPrice {
                        amount
                        currencyCode
                    }
                    maxVariantPrice {
                        amount
                        currencyCode
                    }
                }
                vendor
                shopifyId
                availableForSale
                variants {
                    id
                }
                options {
                    id
                }
            }
        }
    `);

    return (
        <main>
            <p>Hello , Gatsby </p>
            <p>
                {res.shopifyProduct.id}
            </p>
            <p>
                {res.shopifyProduct.title}
            </p>
            <p>
                {res.shopifyProduct.description}
            </p>
        </main>
    );
}

export default Index;
