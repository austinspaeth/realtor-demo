import { SET_PROPERTY, SET_THEME, SET_VIEW } from './Constants';

export const setTheme = (theme) => ({type: SET_THEME, theme:theme});
export const setView = (view) => ({type: SET_VIEW, view: view});
export const setProperty = (property) => ({type: SET_PROPERTY, property: property});
export const demoInit = () => {
    return (dispatch) => {
        // THIS IS ALL FOR DEMO PURPOSES, NOT HOW THIS WOULD ACTUALLY BE IMPLEMENTED //
        let source  = "https://s3-us-west-2.amazonaws.com/austinspaeth.com/storage/homeData.json";
        fetch( source, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'mode': 'cors',
                'cache': 'no-cache'
            }
        })
        .then((propertyJSON) => 
            propertyJSON.json()
        )
        .then((propertyObject) => 
            dispatch(setProperty(propertyObject))
        )
        .catch(error => {
            throw(error);
        });
    };
}