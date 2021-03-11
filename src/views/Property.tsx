import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import StickHeader from '../components/property/StickyHeader';

type TSProps = {
	theme:string
}

const Property:FunctionComponent<TSProps> = (props) => {

    const [headerFixed, setHeaderFixed] = useState(false);

	return (
		<PropertyContainer>
            <StickHeader headerFixed={(boolean) => setHeaderFixed(boolean)} />
            <CenteredContent headerFixed={headerFixed}>
            Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>Test<br/>
            </CenteredContent>
		</PropertyContainer>
	)
}

// STYLED COMPONENTS //
const PropertyContainer = styled.div({
    width:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    flexWrap:'nowrap',
});
const CenteredContent = styled.div((props) => ({
    width:'calc(100% - 30px)',
    maxWidth:1300,
    paddingTop: props.headerFixed ? 45:0,
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

export default connect(mapStateToProps,mapDispatchToProps)(Property);