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

