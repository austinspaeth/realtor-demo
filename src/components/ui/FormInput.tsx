import React, {FunctionComponent, useEffect, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
    initial?:string,
    label:string,
    onChange:Function,
    svg?:string,
    textArea?:boolean,
	theme:string,
    viewBox?:string,
}

const FormInput:FunctionComponent<TSProps> = (props) => {

    const [text, setText] = useState('');

    useEffect(() => {
        if(props.initial){
            setText(props.initial);
        }
    },[]);

	return (
		<FormInputContainer textArea={props.textArea}>
            {props.svg && 
                <IconHolder>
                    <Icon viewBox={props.viewBox} dangerouslySetInnerHTML={{ __html: props.svg}} />
                </IconHolder>
            }
            <Input icon={props.svg} contentEditable={true} onInput={(e) => setText(e.target.textContent)} dangerouslySetInnerHTML={{__html: props.initial ? props.initial : ''}} />
            <Label text={text} icon={props.svg}>
                {props.label}
            </Label>
		</FormInputContainer>
	)
}

// STYLED COMPONENTS //
const FormInputContainer = styled.div((props) => ({
    width:'100%',
    height:45,
    borderRadius:4,
    border:'1px solid #C3C6D8',
    background:'#FAFAFD',
    marginBottom:10,
    position:'relative',
    minHeight: props.textArea && 100,
    resize: props.textArea && 'vertical',
    overflow: props.textArea && 'auto'
}));
const IconHolder = styled.div((props) => ({
    width:38,
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background:'rgba(255,255,255,.5)',
    borderRight:'1px solid #c3c6d8',
}));
const Icon = styled.svg((props) => ({
    maxHeight:24,
    maxWidth:20,
    fill: props.theme.darkText
}));
const Label = styled.div((props) => ({
    position:'absolute',
    left:props.icon ? 44: 11,
    fontSize:props.text.length > 0 ? 9:15,
    pointerEvents:'none',
    color:props.text.length > 0 ? props.theme.lightText:props.theme.darkText,
    zIndex:1,
    top: props.text.length > 0 ? 8:13,
    transition: 'all .2s ease-in-out',
}));
const Input = styled.div((props) => ({
    width:props.icon ? 'calc(100% - 38px)':'calc(100% - 10px)',
    left:props.icon ? 38:5,
    boxSizing:'border-box',
    padding:6,
    outline:0,
    height:'100%',
    paddingTop:18,
    fontSize:15,
    fontWeight:600,
    color:props.theme.darkText,
    zIndex:3,
    top: 0,
    position:'absolute',
    ':focus':{
        '~ *':{
            fontSize:9,
            color:props.theme.lightText,
            top:8
        }
    }
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

export default connect(mapStateToProps,mapDispatchToProps)(FormInput);