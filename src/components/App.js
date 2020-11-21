import React, { useState } from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
// import ImageList from './ImageList'
import Logo from './Logo'
import Bottom from './Bottom'

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

    

    const onShowCanada = async (term, page=0) => {
        console.log(term)
        const response = await unsplash
            .get('/search/photos', {  // make a req
            params: { 
                query: term,
                page: page,
             }
            
        })

        const canadaImages = response.data.results
        setImages(canadaImages)
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
            onShowCanada={onShowCanada}
            />
            </Flex>
            {/* Found: {images.length} */}

            {/* <ImageList images={images} /> */}
            <Bottom images={images} onSubmit={onSearchSubmit} onShowCanada={onShowCanada} term={term}/>
        </All>
    )

}

export default App