// // //Home Component 
// import React, {Component} from 'react'
// import axios from 'axios'
// import searchForm from '../../components/AddToWishList/searchForm.js'
// //import SearchResults & SearchForm Component 

// // //I would have a main component that switches between showing the search form and the search results
// class Home extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             searchResults: null, 
//             showSearchForm: true, 
//             showSearchResults: false, 
//             showExperienceForm: false
//         }
// //         this.searchHandler = this.searchHandler.bind(this)
//     }

//     //Function that returns searched items
//     searchHandler(){
//             //axios call to your backend - have items preset in backend return based on 'tu
//             //axios.get('/gifts)
//             //can be a GET request where you put the seach term as a query param
//             //once you have data come back from this call (so in the `.then()`)
//             //set the state to be:
//             this.setState({
//                 showSearchForm: !this.state.showSearchForm, 
//                 searchResults: data, //this is returned from the axios req
//                 showSearchResults: !this.state.showSearchResults 
//             })
//     }

//     setShowExperience(){
//         this.setState({
//             showSearchForm: !showSearchForm, 
//             showExperienceForm: !showExperienceForm
//         })
//     }
//     renderProperComponent(){
//         if(this.state.showSearchForm){
//             return <SearchFormComponent submitFunction={this.searchHandler} addExperienceButton={this.setShowExperience} />
//         } else if(this.state.showSearchResults){
//             return <SearchResults data={this.state.searchResults} />
//         } else if(this.state.showExperienceForm){
//             //here I would do a redirect to a route where you show the experience form 
//             //im guessing after they add an experience you will want to show them their //experiences or something which sounds like all of that would be separate from the //search logic and seach results
//             // take a look at using Redirect from react router:
//             //  https://reacttraining.com/react-router/web/api/Redirect
//             //in your App.js you would set up a route so when `/add-experience` (for example) is //hit it will show the correct component -- the Redirect would do the linking to that //route and trigger the components to swap out
//         }
//     }
//     render(){
//         return (
//             <div>
//                 {this.renderProperComponent()}
//             </div>
//         )
//     }

// }

// import React from 'react'
// import EventList from '../../components/EventList'
// //Home Component 
// import axios from 'axios'
//import SearchResults & SearchForm Component 

// //I would have a main component that switches between showing the search form and the search results
// class Home extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             searchResults: null, 
//             showSearchForm: true, 
//             showSearchResults: false, 
//             showExperienceForm: false
//         }
//         this.searchHandler = this.searchHandler.bind(this)
//     }

//     searchHandler(){
//             //axios call to your backend
//             //can be a GET request where you put the seach term as a query param
//             //once you have data come back from this call (so in the `.then()`)
//             //set the state to be:
//             this.setState({
//                 showSearchForm: !this.state.showSearchForm, 
//                 searchResults: data, //this is returned from the axios req
//                 showSearchResults: !this.state.showSearchResults 
//             })
//     }
//     this.setShowExperience(){
//         this.setState({
//             showSearchForm: !showSearchForm, 
//             showExperienceForm: !showExperienceForm
//         })
//     }
//     renderProperComponent(){
//         if(this.state.showSearchForm){
//             return <SearchFormComponent submitFunction={this.searchHandler} addExperienceButton={this.setShowExperience} />
//         } else if(this.state.showSearchResults){
//             return <SearchResults data={this.state.searchResults} />
//         } else if(this.state.showExperienceForm){
//             //here I would do a redirect to a route where you show the experience form 
//             //im guessing after they add an experience you will want to show them their //experiences or something which sounds like all of that would be separate from the //search logic and seach results
//             // take a look at using Redirect from react router:
//             //  https://reacttraining.com/react-router/web/api/Redirect
//             //in your App.js you would set up a route so when `/add-experience` (for example) is //hit it will show the correct component -- the Redirect would do the linking to that //route and trigger the components to swap out
//         }
//     }
//     render(){
//         return (
//             <div>
//                 {this.renderProperComponent()}
//             </div>
//         )
//     }

// }

// //---------------------------search form component---------------------------//

// const SearchForm = (props) => {
//     return 
//     <div>
//     <form>
//     //your form goes here and you attach the function from the main component via props
//     //I think you should be able to get the value of the input if you wrap in a form component
//     //look back at other examples of how you have done it or jump on google
//     //if you are using Material UI here they may tell you how to do it specifically

//     //something like:
//     // <button onSubmit={this.submitFunction(event)}>Search Amazon</button>
//     </form>
//     <div>
//     //render the button for add experience here and set up the click handler to call the redirect from the home component 
//     // <button onSubmit={this.addExperienceButton}>Add Experience</button>
//     <div>
//     <div>
// }

// //----------------------------Search results component-------------------------//

// //I would probably make this a class component as you are going to probably want to have a state //object to help keep track of items added to your cart/list

// //utilize the built in lifecycle method of react, componentWillMount to set the search result data (passed in as props) to this component's state 

// ex. componentWillMount(){
//     this.setState({
//         searchData:  this.props.data
//     })
// }

// // then have a function that will iterate through the data array and create the Material UI cards
// //basic example of looping through the data set to create cards.. not 100% what you need but a good starting point
// createCards(){
//     let items = this.state.searchData
//     if(items){
//         for(var i = 0; i < items.length;i++){
//             return (
//                 <div>
//                     {items.map(item => (<Card>
//                     <Card.Header>item.name</Card.Header>
//                     <Card.Body>item.description</Card.Body>
//                     <button onClick={this.addToList(event)}>Add to List</button>
//                     </Card>
//                     ))}
//                 </div>
//             )
//         }
//     }
// }

// then in the render method of the SearchResults component:

// render(){
//     return(
//         <div>
//         <h1>Add To Wish List Page</h1>    
//         <EventList />
//         {this.createCards()}
//         </div>
//     )
// }

// export default SearchResults;
