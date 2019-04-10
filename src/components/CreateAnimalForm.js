import React, { Component } from 'react'

class CreateAnimalForm extends Component {
  constructor() {
    super()

    this.state = {
      species: '',
      quantity: 0,
      imageUrl: ''
    }
  }

  handleChange = e => {
    let { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    let newAnimal = this.state
    this.props.createAnimal(newAnimal)
  }

  render() {
    return (
      <div style={{border: '1px solid black', margin: 20}}>
        <input 
          onChange={this.handleChange}
          name="species" 
          type="text" 
          placeholder="species"/>
        <input 
          onChange={this.handleChange} 
          name="imageUrl" 
          type="text" 
          placeholder="image url"/>
        <input 
          onChange={this.handleChange} 
          name="quantity" type="number" 
          placeholder="quantity"/>
        <button onClick={this.handleClick}>create animal</button>
      </div>
    )
  }
}

export default CreateAnimalForm