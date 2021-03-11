import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
	theme:string
}

const Search:FunctionComponent<TSProps> = (props) => {

    const [text, setText] = useState('');

	return (
		<SearchContainer>
            <Input onInput={(e) => setText(e.target.innerText)} contentEditable={true} />
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278.2 278.1"><title>Search Icon</title><path d="M204.1,187.8a31.1,31.1,0,0,1,2.5,2l67.1,67.1c4.5,4.4,5.6,9.2,3.4,14.2a11.8,11.8,0,0,1-17.8,4.7,24.4,24.4,0,0,1-2.9-2.7l-66.7-66.7c-.7-.7-1.1-1.5-1.8-2.3-30.8,23.8-64.8,31.4-102.1,22.1-28-7-50-23.2-66.2-47.1C-10.9,134.3-5.9,71.8,35.1,32.2,78.8-9.9,145.3-9.4,187.8,26c24.2,20.1,38.4,45.9,41.6,77.2S224,162.6,204.1,187.8ZM23.8,115a91.2,91.2,0,1,0,91.3-91.2A91.2,91.2,0,0,0,23.8,115Z"/></Icon>
            <Label text={text}>Find your next home</Label>
		</SearchContainer>
	)
}

// STYLED COMPONENTS //
const SearchContainer = styled.div({
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    position:'relative',
    width:245,
    marginLeft:20,
    height:40,
    '@media(max-width:600px)':{
        position:'absolute',
        margin:0,
        left:50,
        width:'calc(100% - 100px)'
    }
});
const Label = styled.div((props) => ({
    fontSize:13,
    color: props.theme.lightText,
    position:'absolute',
    left:38,
    display: props.text && 'none',
}));
const Input = styled.div((props) => ({
    borderRadius:45,
    background:'#EDEEF2',
    border:'2px solid #EDEEF2',
    width:'100%',
    padding:9,
    paddingLeft:36,
    fontSize:13,
    fontWeight:600,
    color:props.theme.darkText,
    outline:0,
    boxSizing:'border-box',
    cursor:'text',
    height: '100%',
    transition:'background .2s ease-in-out',
    ':hover':{
        background:'#f8f9fd',
    },
    ':focus':{
        background:'#fff',
        borderColor:'#dcdde4',
        '~ div':{
            display:'none'
        }
    },
    '@media(max-width:600px)':{
        
    }
}));
const Icon = styled.svg((props) => ({
    height:19,
    width:19,
    position:'absolute',
    left:12,
    fill: props.theme.lightText
}));

// REDUX MAPPING //
const mapStateToProps = (state) => {
	return {
		theme: state.theme
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(Search);