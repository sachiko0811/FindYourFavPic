import React, { useState } from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './molecules/SearchBar'
// import ImageList from './ImageList'
// import Logo from './atoms/Logo'
import Pagenation from './molecules/Pagenation'

import '../assets/css/style.css';
import styled from 'styled-components'


const All = styled.div`
    background: #f8f5f2;
    padding: 10vh 5vw;
`

const Flex = styled.div`
    display: flex;
    `

const App = () => {

    const [images, setImages] = useState([])
    // const [image, setImage] = useState([])
    const [term, setTerm] = useState('');


    const onSearchSubmit = async (text, page=0) => {
        console.log(text)
        const response = await unsplash
          .get('/search/photos', {  // make a req
            params: {
                query: text,
                page: page,
                // per_page: 100,
                // color: "red",
            }

        })

        const updateImages = response.data.results
        setImages(updateImages)
    }

    // const firstTerm = () => {
    //     if(!term) {

    //     }
    // }

    // const getSinglePhoto = async (id) => {
    //     console.log(id)
    //     console.log(image)
    //     const res = await unsplash
    //         .get('photos/:id', {
    //             params: {
    //                 id: id
    //             }
    //         })

    //         const singleImage = res.data.results
    //         setImage(singleImage)
    // }

    return(
        <All
        // className="ui container"
        style={{ paddingTop: '50px' }}
        >
            <Flex>
            {/* <Logo /> */}
            <SearchBar
            onSubmit={onSearchSubmit}
            setTerm={setTerm}
            term={term}
            // firstTerm={firstTerm}
            className="ui container"
            // singleId={getSinglePhoto}
            />
            </Flex>
            {/* Found: {images.length} */}

            {/* <ImageList images={images} /> */}
            <Pagenation 
            images={images} 
            onSubmit={onSearchSubmit} 
            term={term} 
            // image={image}
            />
        </All>
    )

}

export default App
