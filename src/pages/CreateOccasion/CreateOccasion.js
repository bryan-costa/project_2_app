import React, { Component } from 'react'
// import occForm from '../../components/CreateOccasion'
import Type from '../../components/OccForm/Type'
import Date from '../../components/OccForm/Date'
import Description from '../../components/OccForm/Description'
import OccBtn from '../../components/OccForm/Button'
import Name from '../../components/OccForm/Name'

class Occasion extends Component {
        handleFormSubmit = event => {
                event.preventDefault()
                console.log("Handling form submit")
        }
        state = {
                // name: '',
                type: '',
                description: '',
                date: '',
                // need to get exact id for login button
                // do i have to define this as a variable above?
                // userid: localStorage.getItem('userLogin'),
                occList: []
        }

        handleInputChange = event => {
                this.setState({ [event.target.id]: event.target.value })
        }

        // handleFormSubmit = event => {
        //         event.preventDefault()
        //         console.log("Handling form submit")
        //         let newOcc = {
        //                 // name: this.state.name,
        //                 type: this.state.type,
        //                 description: this.state.description,
        //                 date: this.state.date,
        //                 // userid: this.state.userid
        //         }
        //         Occasion.postOne(newOcc)
        //         this.state.occList.push(newOcc)
        //         this.setState({ newOcc })
        //         // need to include navigation to the wish list page
        // }

        render() {
                const {handleFormSubmit} = this.props
                return (
                        <>
                                <Name />
                                <Type />
                                <Date />
                                <Description />
                                <OccBtn onClick= {()=>this.handleFormSubmit()}
                                        // name={this.state.name}
                                        type={this.state.type}
                                        type={this.state.description}
                                        date={this.state.date}
                                        // userid={this.state.userid}
                                />
                                {/* <occForm
                                        handleInputChange={this.handleInputChange}
                                        handleFormSubmit={this.handleFormSubmit}
                                        name={this.state.name}
                                        type={this.state.type}
                                        description={this.state.description}
                                        date={this.state.date}
                                        userid={this.state.userid} */}
                                {/* /> */}
                        </>

                )

        }
}

export default Occasion