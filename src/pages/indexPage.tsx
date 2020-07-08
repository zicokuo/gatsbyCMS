import React, {Component, useEffect, useState} from 'react';
import {graphql, useStaticQuery} from "gatsby";
import gql from "graphql-tag";


import '../styles/index.css';

const Index = (): JSX.Element => {
    const
        apiText = `
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
            }`,
        res = useStaticQuery(graphql(apiText)),
        dyRes = gql(apiText),
        [searchWord, setSearchWord] = useState('');

    return (
        <main>
            <p>Hello , Gatsby </p>
            <div>
                <label>
                    <input
                        type="text"
                        ref={(input: string) => setSearchWord(input)}
                        placeholder={'enter product title to search...'}/>
                    <button>search</button>
                </label>
            </div>
            <h3>静态查询</h3>
            <p>{res.shopifyProduct.title ?? searchWord}</p>
            <p>{res.shopifyProduct.id ?? '没有结果'}</p>
            <p>{res.shopifyProduct.description}</p>
            <h3>动态查询</h3>
            <Query>
                
            </Query>
        </main>
    );
}

export default Index;
