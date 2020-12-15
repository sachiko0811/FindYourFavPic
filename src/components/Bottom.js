import React from 'react';



import 'antd/dist/antd.css';
import '../assets/css/style.css';
import { Pagination } from 'antd';

import ImageList from './ImageList';

import styled from 'styled-components';

const BottomStyle = styled.div`
    text-align: center;
    padding-top: 20px;
`

const Bottom = (props) => {
    console.log(props.images.length)

    const onChange = (page, pageSize) => {
        props.onSubmit(props.term, page)
        props.onShowCanada(props.term, page)
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
            defaultCurrent={100} 
            total={100} 
            />
            </BottomStyle>
        </>
    )
    
}

export default Bottom