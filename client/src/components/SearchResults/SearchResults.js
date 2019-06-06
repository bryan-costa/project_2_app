import React, {Component} from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'

class SearchResults extends Component {

    state ={
       searchData: null
    }


    searchHandler=()=>{
        axios.get('/gifts').then(items=>{
            console.log(items)
        })
    }
     

    
   
    // createCards()=>{
    //     let items = this.state.searchData
    // if(items){
    //     for(var i = 0; i < items.length;i++){
    //         return (
    //             <div>
    //                 {items.map(item => (<Card>
    //                 <Card.Header>item.name</Card.Header>
    //                 <Card.Body>item.description</Card.Body>
    //                 <button}>Add to List</button>
    //                 </Card>
    //                 ))}
    //             </div>
            // )
//         }
//     }
// }

    render(){
        return(
            <>
            <h1> Data</h1>
            <Button onClick={this.searchHandler} variant="outlined">Submit</Button>
            </>
        )
    }
}


//Name price picture

// //----------------------------Search results component-------------------------//



// //utilize the built in lifecycle method of react, componentWillMount to set the search result data (passed in as props) to this component's state 

// ex. componentWillMount(){
//     this.setState({
//         searchData:  this.props.data
//     })
// }

// // then have a function that will iterate through the data array and create the Material UI cards
// //basic example of looping through the data set to create cards.. not 100% what you need but a good starting point


// then in the render method of the SearchResults component:

// render(){
//     return(
//         <div>
//         {this.createCards()}
//         </div>
//     )


export default SearchResults