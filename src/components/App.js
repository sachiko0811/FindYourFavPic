import React, { useState } from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './molecules/SearchBar'
// import ImageList from './ImageList'
import Logo from './atoms/Logo'
import Pagenation from './molecules/Pagenation'

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

    return(
        <All
        // className="ui container"
        style={{ paddingTop: '20px' }}
        >
            <Flex>
            <Logo />
            <SearchBar
            onSubmit={onSearchSubmit}
            setTerm={setTerm}
            term={term}
            />
            </Flex>
            {/* Found: {images.length} */}

            {/* <ImageList images={images} /> */}
            <Pagenation images={images} onSubmit={onSearchSubmit} term={term}/>
        </All>
    )

}

export default App
