import React from 'react'
import styled from 'styled-components'

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
    i {
        padding: 10px;
        font-size: 28px;
    }
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

const ButtonOne = styled.button`
    background: #078080;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 10px 20px;
    border: none;
    outline: none;
`

const ButtonTwo = styled.button`
    background: #f45d48;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 10px 20px;
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
                         <i className="fa fa-search"></i>
                     <Input 
                     type="text" 
                     value={props.term} 
                     onChange={(e) => props.setTerm( e.target.value)}
                     placeholder="Find Your Favorite Picture"
                     /> 
                     
                     {/* </Flex> */}
                     </div>
                 </form>
                 {/* <Flex> */}
                 <Test 
                 onSubmit={props.onSubmit}
                 onShowCanada={props.onShowCanada} 
                 text={props.term}/>
                 </Flex>
             </SearchAll>
    )
}

export default SearchBar

const Test = (props) => {

    // console.log(props)


   const onClick = () => {
       props.onSubmit(props.text)
}

    const onShowCanada = () => {
        // props.onSubmit(props.onShowCanada)
        props.onShowCanada("canada")
        // console.log(props.onShowCanada)
    }

    return (
        <div>
            <ButtonOne onClick={onClick}>Search</ButtonOne>
            <ButtonTwo onClick={onShowCanada}>Canada</ButtonTwo>
        </div>
    )
}