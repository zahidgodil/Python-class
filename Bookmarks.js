import React from 'react';
import Customlinks from './Customlinks';

class Bookmarks extends React.Component {
render(){
    return(
    <div>
    <Customlinks href="https://www.google.com" linktext='Google'/> 
    <Customlinks href="https://www.facebook.com" linktext='facebook' />
    <Customlinks href="https://www.youtube.com" linktext='youtube' /> 
    </div>
    )
}
}

export default Bookmarks;
