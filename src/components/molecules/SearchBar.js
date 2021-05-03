import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'
import Logo from '../atoms/Logo'

// import ShortCut from '../organisms/ShortCut'

// import logo from '../images/logo.svg'

const SearchAll = styled.div`
    margin: 0 auto;
    background: #fff;
    border-radius: 10px;
    width: 100%;
    // width: 60%;
    // padding: 10px 10px 0px;
    // margin-top: 50px;
    // margin-bottom: 50px;
`

// const Flex = styled.div`
//     display: flex;
//     // justify-content: space-between;
//     `

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

    const prime = ({ onSubmit, setTerm, text }) => {
        return () => {
            setTerm(text)
            onSubmit(text)
        }
    }

    // console.log(props)


    return(
        <SearchAll
        // className="ui segment"
        >
            {/* <Flex> */}
                 <form onSubmit={onFormSubmit}>
                       {/* should be onSubmit(property)*/}
                     <div
                     className="l-flex center"
                     >
                     <Logo />
                     <div className="ui search">
                     <div 
                     className="ui icon input"
                     style={{margin: "20px 20px 20px 0"}}
                     >
                     <input
                     className="use_icon prompt"
                     type="text"
                     value={props.term}
                     onChange={(e) => props.setTerm( e.target.value)}
                    //  placeholder="&#xf002;"
                     />
                        <i class="search icon"></i>
                     </div>
                     </div>
                     <div 
                     className="btn"
                     >
                     <Button 
                     style={{background: "#9DA65D"}}
                     type="primary"
                    //  onClick={props.onSubmit}
                     onClick={prime}
                     >Search</Button>
                     </div>
                     </div>
                 </form>
                 {/* <ShortCut 
                 onSubmit={props.onSubmit}
                 setTerm={props.setTerm}
                 text={props.text}
                 /> */}
                 <Test
                 onSubmit={props.onSubmit}
                 setTerm ={props.setTerm}
                //  text={props.word}
                 />
                 {/* </Flex> */}
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
            {/* <Button type="primary" onClick={onSubmit}>Search</Button> */}
            <div className="l-flex center">
                <Button type="secondary" onClick={onClickShortcut('canada')}>Canada</Button>
                <Button type="secondary" onClick={onClickShortcut('vancouver')}>Vancouver</Button>
                {/* <Button type="secondary" onClick={onClickShortcut('tronto')}>Tronto</Button> */}
                <Button type="secondary" onClick={onClickShortcut('japan')}>Japan</Button>
                <Button type="secondary" onClick={onClickShortcut('us')}>US</Button>
                <Button type="secondary" onClick={onClickShortcut('uk')}>UK</Button>
                <Button type="secondary" onClick={onClickShortcut('korea')}>Korea</Button>
                <Button type="secondary" onClick={onClickShortcut('hongkong')}>Hong Kong</Button>
                <Button type="secondary" onClick={onClickShortcut('thailand')}>Thailand</Button>
            </div>
        </div>
    )
}
