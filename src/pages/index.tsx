import React, {Component, useEffect, useState} from 'react';
import {graphql, useStaticQuery, StaticQuery} from "gatsby";
import {Form, Input, Button, Card, Row, Col, Empty} from 'antd'
import lodash from 'lodash'


import 'antd/dist/antd.css';
import '../styles/index.css';
import {useQuery, ApolloProvider, useApolloClient} from "@apollo/react-hooks";
import gql from "graphql-tag";

const
    ALL_PRODUCT = graphql`query MyQuery {
        allShopifyProduct {
            nodes  {
                title
                publishedAt
                productType
                handle
                id
                variants {
                    id
                    shopifyId
                    sku
                    title
                }
                images {
                    originalSrc
                }
            }
        }
    }`,
    ALL_PRODUCT_DY = gql`query MyQuery {
        allShopifyProduct {
            nodes  {
                title
                publishedAt
                productType
                handle
                id
                variants {
                    id
                    shopifyId
                    sku
                    title
                }
                images {
                    originalSrc
                }
            }
        }
    }`,
    IndexPage = (): JSX.Element => {
        const
            res = useStaticQuery(ALL_PRODUCT),
            {loading, error, data} = useQuery(ALL_PRODUCT_DY),
            [dyRes, setDyRes] = useState(null),
            [searchWord, setSearchWord] = useState(''),
            onFinishHandler = (props: { keyword: string }) => {
                let word = searchWord
                console.log(word, props)
                setSearchWord(props.keyword);
                setDyRes(data);
                console.log(dyRes);
            };

        useEffect(() => {
            if (error)
                console.log(error)
        }, [error])

        return (
            <main>
                <p>Hello , Gatsby </p>
                <div>
                    <Form
                        name="searchBox"
                        onFinish={onFinishHandler}>
                        <p>搜索</p>
                        <Form.Item
                            label="产品关键词"
                            name="keyword">
                            <Input
                                type="text"
                                value={searchWord}
                                placeholder={'enter product title to search...'}/>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>

                </div>
                <h3>静态查询</h3>
                <Row
                    gutter={12}>
                    {res.allShopifyProduct.nodes.filter(product => {
                        let regexp = new RegExp(`${searchWord}`);
                        console.log(product.title, regexp.test(product.title))
                        return (regexp.test(product.title));
                    }).map(product =>
                        (<Col>
                            <Card title={product.title ?? ''}
                                  hoverable
                                  style={{width: 240}}
                                  cover={
                                      <div style={{
                                          height: 240,
                                          background: `url(${product.images[0].originalSrc}) no-repeat center`,
                                          backgroundSize: 'contain',
                                      }}
                                      ></div>}>
                                <p>{product.description}</p>
                                <Button type={"primary"}>Buy it now!</Button>
                            </Card>
                        </Col>)
                    )}
                </Row>
                <h3>动态查询</h3>
                {dyRes?.allShopifyProduct ? (
                    <Row
                        gutter={12}>
                        {dyRes.allShopifyProduct.nodes.filter(product => {
                            let regexp = new RegExp(`${searchWord}`);
                            console.log(product.title, regexp.test(product.title))
                            return (regexp.test(product.title));
                        }).map(product =>
                            (<Col>
                                <Card title={product.title ?? ''}
                                      hoverable
                                      style={{width: 240}}
                                      cover={
                                          <div style={{
                                              height: 240,
                                              background: `url(${product.images[0].originalSrc}) no-repeat center`,
                                              backgroundSize: 'contain',
                                          }}
                                          ></div>}>
                                    <p>{product.description}</p>
                                    <Button type={"primary"}>Buy it now!</Button>
                                </Card>
                            </Col>)
                        )}
                    </Row>) : (<Empty/>)}
            </main>
        );
    };

export default IndexPage;

