import React from 'react'
import SearchBar from 'material-ui-search-bar'
 

const friends = () => {
    return(
        <div>
       <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 300
      }}
    />
        </div>
    )
}
export default friends;

