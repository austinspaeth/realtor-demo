import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import FormInput from '../ui/FormInput';

type TSProps = {
    property:any,
    scrollPosition:number,
	theme:string
}

const ContactForm:FunctionComponent<TSProps> = (props) => {

	return (
		<ContactFormContainer scrollPosition={props.scrollPosition}>
            <Title>
                Get additional information about this property
            </Title>
            <FormInput svg={'<g id="YS3GzE.tif"><path d="M112.7,91.2c44.8,15.4,60.3,57.2,59.2,81.9H160.4c-.6-23.3-9.8-42.6-27.7-57.5A70.9,70.9,0,0,0,85.9,99.1a71.8,71.8,0,0,0-52.3,21.7c-14.3,14.3-21.5,31.9-21.8,52.3H0A86.2,86.2,0,0,1,59.3,91.4c-27.9-18.6-30-56.2-7.5-77.8A49.5,49.5,0,0,1,123,16.8C141.6,37.8,139.9,72.6,112.7,91.2ZM86.2,12a37.6,37.6,0,1,0,37.3,37.6A37.6,37.6,0,0,0,86.2,12Z"/></g>'} viewBox={'0 0 172 173.1'} label={'Full Name'} onChange={(e) => null} />
            <FormInput svg={'<g id="_77x5cb.tif" data-name="77x5cb.tif"><path d="M130.4,172H16.1c-7.9,0-13.6-4-15.5-11.1a20.7,20.7,0,0,1-.5-5C.1,109.3.2,62.8,0,16.2A16,16,0,0,1,16.3,0C92.4.2,168.6.1,244.7.1c8.1,0,13.8,4,15.7,11.1a16.7,16.7,0,0,1,.5,5c0,46.6-.1,93.1.1,139.7a16,16,0,0,1-16.3,16.2C206.6,171.9,168.5,172,130.4,172ZM32.8,18.1l-.2.5,1.5,1.3L126,102c3.1,2.7,5.9,2.7,8.9,0L227,19.8l1.6-1.7Zm.5,135.8H227.7l-64.6-53.2-16.7,14.9c-9.7,8.7-22,8.7-31.8,0L103.9,106l-6-5.3ZM17.8,143.8,84.4,88.7,17.8,29ZM176.6,88.7l66.4,55V29.2C220.8,49.2,198.8,68.8,176.6,88.7Z"/></g>'} viewBox={'0 0 261 172.1'} label={'Email Address'} onChange={(e) => null} />
            <FormInput svg={'<g id="LELnQT.tif"><path d="M154.6,126.7v89.6c0,13.8-5.8,24.5-17.7,31.8a34.5,34.5,0,0,1-18.1,4.7h-83C15.3,252.7.1,237.5.1,217Q-.1,126.4.1,35.8C.1,18.6,10.9,5,27.4,1A37.8,37.8,0,0,1,36.3.2C63.6.1,90.8.5,118.1,0a35.9,35.9,0,0,1,36.5,36.6C154.5,66.7,154.6,96.7,154.6,126.7Zm-14.2-.3V37.3a26.5,26.5,0,0,0-.6-6.9,20.5,20.5,0,0,0-20.1-16.2c-10.5-.2-21.1-.1-31.7-.1H35.7c-8.2,0-14.4,3.6-18.7,10.5-2.4,3.9-2.8,8.3-2.8,12.7V215.5c0,1.2,0,2.4.1,3.5.7,9.3,6.2,16.3,15.2,18.9a24.4,24.4,0,0,0,6.6.8h82.4a21.5,21.5,0,0,0,16.8-7.3c3.9-4.4,5.2-9.7,5.2-15.5Q140.4,171.3,140.4,126.4Z"/><path d="M77.4,203.7a14.1,14.1,0,0,1-.1,28.1,14.1,14.1,0,0,1-14-14.3A14,14,0,0,1,77.4,203.7Z"/><path d="M77.2,35.1c-4.5,0-9,.1-13.5,0s-7.4-2.9-7.4-7,3-7,7.4-7H90.9c4.4,0,7.4,3,7.4,7.1s-3,6.9-7.4,6.9S81.7,35.1,77.2,35.1Z"/></g>'} viewBox={'0 0 154.6 252.9'} label={'Phone Number'} onChange={(e) => null} />
            <FormInput textArea={true} label={'Note'} onChange={(e) => null} initial={'I am interested in '+ props.property?.property.address} />
		</ContactFormContainer>
	)
}

// STYLED COMPONENTS //
const ContactFormContainer = styled.div((props) => ({
    width:340,
    padding:10,
    background:'#fff',
    border:'1px solid #DEDFEA',
    borderRadius:10,
    boxSizing:'border-box',
    position:'absolute',
    right:0,
    top:67 + Math.max(0, (props.scrollPosition - 110)),
    transition: 'top .3s cubic-bezier(.24,.67,.56,.99)'
}));
const Title = styled.div((props) => ({
    fontSize:16,
    color: props.theme.darkText,
    fontWeight:600,
    textAlign:'center',
    padding:'0px 40px',
    marginTop:20,
    marginBottom:20,
}));

// REDUX MAPPING //
const mapStateToProps = (state) => {
	return {
        property: state.property,
		theme: state.theme
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(ContactForm);