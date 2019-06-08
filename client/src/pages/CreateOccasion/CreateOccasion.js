import React, { Component } from 'react'
import Type from '../../components/OccForm/Type'
import Date from '../../components/OccForm/Date'
import Description from '../../components/OccForm/Description'
import OccBtn from '../../components/OccForm/Button'
import Name from '../../components/OccForm/Name'
import Occasion from '../../components/Utils/occasion.js'

class CreateOccasion extends Component {
        state = {
                name: '',
                type: '',
                date: '',
                description: '',
                userId: '',
                occList: []
        }

        clearForm = _ => {
                this.setState({
                        name: '',
                        type: '',
                        date: '',
                        description: '',
                })
        }

        handleFormSubmit = event => {
                console.log("Here I am!")
                let occList = this.state.occList
                let newOcc = {
                        name: this.state.name,
                        type: this.state.type,
                        description: this.state.description,
                        date: this.state.date,
                        userId: 1
                }
                Occasion.postOne(newOcc)
                this.state.occList.push(newOcc)
                this.setState({ ...newOcc })
                console.log(newOcc)
                console.log(occList)
        }

        handleChange = event => {
                if (event.target.name) {
                        return this.setState({
                                [event.target.name]: event.target.value
                        })
                }
                this.setState({
                        [event.target.id]: event.target.value
                })
        }


        render() {
                const { handleFormSubmit } = this.state
                return (
                        <>
                                <div style={{ marginTop: '50px' }}>
                                        <h1 style={{ textAlign: 'center', color: '#707070' }}>Create New Event</h1>
                                </div>
                                <Name
                                        handleChange={this.handleChange}
                                />
                                <Type
                                        type={this.state.type}
                                        handleChange={this.handleChange}
                                />
                                <Date
                                        handleChange={this.handleChange}
                                />
                                <Description
                                        handleChange={this.handleChange}
                                />
                                <OccBtn
                                        name={this.state.name}
                                        type={this.state.type}
                                        date={this.state.date}
                                        description={this.state.description}
                                        handleFormSubmit={this.handleFormSubmit}
                                />
                        </>
                )
        }
}

export default CreateOccasion