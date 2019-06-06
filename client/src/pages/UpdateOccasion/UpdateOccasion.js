import React, { Component } from 'react'
// import occForm from '../../components/CreateOccasion'
import UpdateType from '../../components/UpdateOcc/Type'
import UpDate from '../../components/UpdateOcc/Date'
import UpdateDescription from '../../components/UpdateOcc/Description'
import UpdateBtn from '../../components/UpdateOcc/Button'
import UpdateName from '../../components/UpdateOcc/Name'
import Occasion from '../../components/Utils/occasion.js'

class UpdateOccasion extends Component {
        state = {
                name: '',
                type: '',
                date: '',
                description: '',
                userId: '',
                occList: []
        }

        componentWillMount = (cardData) => {
                let editOcc = localStorage.getItem('cardData')
                console.log(localStorage.getItem('cardData.name'))

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

        // handleSubmitUpdate = event => {
        //         console.log("Here I am!")
        //         let occList = this.state.occList
        //         let newOcc = {
        //                 name: this.state.name,
        //                 type: this.state.type,
        //                 description: this.state.description,
        //                 date: this.state.date,
        //                 userId: 7
        //         }
        //         Occasion.postOne(newOcc)
        //         this.state.occList.push(newOcc)
        //         this.setState({ ...newOcc })
        //         console.log(newOcc)
        //         console.log(occList)
        // }



        render() {
                const { handleUpdate } = this.state
                return (
                        <>
                                <div style={{marginTop: '50px'}}>
                                <h1 style={{ textAlign: 'center', color: '#707070'}}> Update Event Details</h1>
                                </div>
                                <UpdateName
                                        handleChange={this.handleChange}
                                />
                                <UpdateType
                                        type={this.state.type}
                                        handleChange={this.handleChange}
                                />
                                <UpDate
                                        handleChange={this.handleChange}
                                />
                                <UpdateDescription
                                        handleChange={this.handleChange}
                                />
                                <UpdateBtn
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

export default UpdateOccasion