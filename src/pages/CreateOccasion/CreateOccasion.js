import React, { Component } from 'react'
import occFormn from '../../components/CreateOccasion'

class Occasion extends Component {
        state = {
                name: '',
                type: '',
                description: '',
                date: '',
                // need to get exact id for login button
                // do i have to define this as a variable above?
                userid: localStorage.getItem('userLogin'),
                occList: []
        }

        handleInputChange = event => {
                this.setState({ [event.target.id]: event.target.value })
        }

        handleFormSubmit = event => {
                event.preventDefault()
                let newOcc = {
                        name: this.state.name,
                        type: this.state.type,
                        description: this.state.description,
                        date: this.state.date,
                        userid: this.state.userid
                }
                Occasion.postOne(newOcc)
                this.state.occList.push(newOcc)
                this.setState({ newOcc })
                // need to include navigation to the wish list page
        }

        render() {
                return (
                        <>
                                <h3>Hello</h3>
                                {/* the form is not rendering on the page */}
                                <occForm
                                        handleInputChange={this.handleInputChange}
                                        handleFormSubmit={this.handleFormSubmit}
                                        name={this.state.name}
                                        type={this.state.type}
                                        description={this.state.description}
                                        date={this.state.date}
                                        userid={this.state.userid}
                                />
                        </>

                )

        }
}

export default Occasion