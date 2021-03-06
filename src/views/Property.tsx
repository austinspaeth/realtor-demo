import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import StickHeader from '../components/property/StickyHeader';
import ContactForm from '../components/property/ContactForm';
import ImageExplorer from '../components/property/ImageExplorer';
import PropertySummary from '../components/property/PropertySummary';
import PropertyDetails from '../components/property/PropertyDetails';

type TSProps = {
	theme:string
}

const Property:FunctionComponent<TSProps> = (props) => {

    const [scrollPosition, setScrollPosition] = useState(false);

	return (
		<PropertyContainer id="property">
            <StickHeader scrollPosition={(position) => setScrollPosition(position)} />
            <CenteredContent>
                <MainContent>
                    <ImageExplorer />
                    <PropertySummary />
                    <PropertyDetails />
                </MainContent>
                <ContactForm scrollPosition={scrollPosition} />
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
    marginTop:45,
    maxWidth:1300,
    display:'flex',
    justifyContent:'space-between',
    alignItems:'flex-start',
    position:'relative',
}));
const MainContent = styled.div((props) => ({
    width:'calc(100% - 375px)',
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    flexWrap:'nowrap',
    '@media(max-width:960px)':{
        width:'100%',
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

export default connect(mapStateToProps,mapDispatchToProps)(Property);