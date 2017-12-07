import React from 'react'
import Link from './Link'
import TabItem from './TabItem'

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItem: ''
    }
  }
  
  componentDidMount() {
    const { children } = this.props
    // get the name of default active item or return the first TabItem
    
    const selectedName = children.map(child => {
      if (child.props.isActive) {
        return child.props.name
      }
      return children[0].props.name
    })[0]

    this.setState({
      selectedItem: selectedName 
    })
  }

  changeActiveStateTo = itemName => {
      this.setState({
        selectedItem: itemName
      })
    }

  render() {
    const { children, direction } = this.props
    console.log(children)
    const { selectedItem } = this.state
    return (
      <div className={`tabs ${direction}`}>
        <div className="links">
          {children.map(child => {
          return (
            <Link 
              key={child.props.name}
              item={child.props}
              isActive={child.props.name === selectedItem}
              onLinkClick={(itemName) => this.changeActiveStateTo(itemName)} 
            />
          )})}
        </div>
        <div className="content">
          {children.map(child => {
            console.log(child)
            if (child.props.name === this.state.selectedItem) {
              console.log('go here: ', child.props.children)
              return child.props.children
            }
          })}
        </div>
       </div>
    )
  }
}

export default Tabs
