import React from 'react'


const camelToSpace = str => {
    var result = str.replace(/([A-Z])/g, ' $1').toLowerCase();
    result = result.trim();
    return result.charAt(0).toUpperCase() + result.slice(1);
}

class Link extends React.Component {
  render() {
    const { item, isActive } = this.props
    return (
      <a className={isActive ? `link active` : `link`} href='#' onClick={() => this.props.onLinkClick(item.name)}>{camelToSpace(item.name)}</a>
    )
  }
}

export default Link
