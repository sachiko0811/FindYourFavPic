
import React from 'react'

import ImageCard from '../molecules/ImageCard'
// import Bottom from './Bottom'

import styled from 'styled-components'

    const ImageLists = styled.div`
        // display: flex;
        // flex-wrap: wrap;
        // flex-direction: row;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 10px;
        // grid-auto-rows: 5px;
        img {
            width: 250px;
            margin: 10px;
            // object-fit: contain;
            // grid-row-end: span 2;
        }
    `;




const ImageList = (props) => {
    // console.log(props.images)

    const images = props.images.map((image) => {

        const imagesLength = props.images.length;

        if(imagesLength > 10) {
            // for(let i=0; i < 10; i++) {
                // console.log(images)
                return(
                    // console.log(images)
                    <ImageCard
                    key={image.id}
                    image={image}
                    />
                )
            // }
    } else {
        return (
            <ImageCard
            key={image.id}
            image={image} />
        )
    }
    })

return( <>
    <ImageLists style={{ marginBottom: '100px'}}>
    {images}
    </ImageLists>
    </>
)
}

export default ImageList
