import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
    label:string,
	theme:string
}

const FormCheckbox:FunctionComponent<TSProps> = (props) => {

    const [checked, setChecked] = useState(false);

	return (
		<FormCheckboxContainer tabIndex={0} onClick={() => setChecked(!checked)} onKeyDown={(e) => e.key === 'Enter' && setChecked(!checked)}>
            <Box checked={checked}>
                {checked && <Check xmlns="http://www.w3.org/2000/svg" viewBox="0 0 213.4 154.8"><title>Checkmark</title><g id="Qv6xp3.tif"><path d="M76.2,106.8,188.5,0l24.9,25.3L77.5,154.8,0,88,23.1,61.1Z"/></g></Check>}
            </Box>
            {props.label}
		</FormCheckboxContainer>
	)
}

// STYLED COMPONENTS //
const FormCheckboxContainer = styled.div((props) => ({
    width:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'flex-start',
    fontSize:14,
    outline:0,
    cursor:'pointer',
    color:props.theme.darkText,
    marginBottom:-10,
    marginTop:20,
    ':focus':{
        '> *:first-child':{
            background:'#fbe6e6'
        }
    }
}));
const Box = styled.div((props) => ({
    width:18,
    height:18,
    position:'relative',
    display:'flex',
    boxSizing:'border-box',
    justifyContent:'center',
    alignItems:'center',
    background:'#FAFAFD',
    border:'1px solid #C3C6D8',
    borderColor: props.checked && props.theme.brand,
    borderWidth: props.checked && 2,
    borderRadius:4,
    marginRight:8,
}));
const Check = styled.svg((props) => ({
    height:8,
    fill:props.theme.brand
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

export default connect(mapStateToProps,mapDispatchToProps)(FormCheckbox);