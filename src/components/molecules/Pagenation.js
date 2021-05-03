import React from 'react';

import 'antd/dist/antd.css';
import { Pagination } from 'antd';

import ImageList from '../organisms/ImageList';

import styled from 'styled-components';

const BottomStyle = styled.div`
    text-align: center;
    padding-top: 50px;
`

const Bottom = (props) => {
    console.log(props)

    const onChange = (page, pageSize) => {
        props.onSubmit(props.term, page)
        console.log(page, pageSize)
    }

    return(
        <>
            <BottomStyle>
            <ImageList
            images={props.images}
            />
            <Pagination
            style={{color: '#fff'}}
            onChange={onChange}
            defaultCurrent={1}
            total={100}
            />
            </BottomStyle>
        </>
    )

}

export default Bottom
