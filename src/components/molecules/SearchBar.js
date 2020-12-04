import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'
import Logo from '../atoms/Logo'

// import ShortCut from '../organisms/ShortCut'

// import logo from '../images/logo.svg'

const SearchAll = styled.div`
    background: #fff;
    border-radius: 10px;
    // width: 60%;
    padding: 10px 10px 0px;
    margin-top: 50px;
    margin-bottom: 50px;
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    `

const Input = styled.input`
    width: 500px;
    background: #e6e6e6;
    border-radius: 50px;
    padding: 10px 20px;
    margin: 10px 30px 10px 0px;
    border: none;
    outline: none;
`

 const SearchBar = (props) => {

    // const [term, setTerm] = useState('vancouver');

    const onFormSubmit = (e) => {
        e.preventDefault();
        // const updatedTerm = e.target.value;
        // setTerm(updatedTerm)

        props.onSubmit(props.term);
        // console.log("onFormSubmit")
    }

    // console.log(props)


    return(
        <SearchAll
        // className="ui segment"
        >
            <Flex>
                 <form onSubmit={onFormSubmit}
                //  className="ui form"
                 >  {/* should be onSubmit(property)*/}
                     <div
                    //  className="field"
                     >

                         {/* <label>Image Search</label> */}
                         {/* <Flex> */}
                         {/* <img src={logo}></img> */}
                         {/* <i className="fa fa-search"></i> */}
                         <Logo />
                     <Input
                     className="use_icon"
                     type="text"
                     value={props.term}
                     onChange={(e) => props.setTerm( e.target.value)}
                     placeholder="&#xf002; Find Your Favorite Picture"
                     />
                         {/* <i className="fa fa-search"></i> */}
                     {/* </Input> */}

                     {/* </Flex> */}
                     </div>
                 </form>
                 {/* <Flex> */}
                 {/* <ShortCut onSubmit={props.onSubmit}/> */}
                 <Test
                 onSubmit={props.onSubmit}
                 setTerm ={props.setTerm}
                //  text={props.word}
                 />
                 </Flex>
             </SearchAll>
    )
}

export default SearchBar

const Test = ({ text, onSubmit, setTerm }) => {
    console.log(text,onSubmit)
   const onClickShortcut = (word) => {

      return () => {
          console.log(word)
          setTerm(word)
        // props.onSubmit(props.onShowCanada)
        onSubmit(word)
        // console.log(props.onShowCanada)
      }
    }
    

    return (
        <div>
            <Button type="primary" onClick={onSubmit}>Search</Button>
            <div className="l-flex">
                <Button type="secondary" onClick={onClickShortcut('canada')}>Canada</Button>
                <Button type="secondary" onClick={onClickShortcut('vancouver')}>Vancouver</Button>
                <Button type="secondary" onClick={onClickShortcut('tronto')}>Tronto</Button>
            </div>
        </div>
    )
}
