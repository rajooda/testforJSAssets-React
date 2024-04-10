import React from 'react'

import PropTypes from 'prop-types'

import './menuitem.css'

const Menuitem = (props) => {
  return (
    <div className={`menuitem-container ${props.rootClassName} `}>
      <span className="menuItemClass">{props.menuText}</span>
    </div>
  )
}

Menuitem.defaultProps = {
  menuText: 'Home',
  rootClassName: '',
}

Menuitem.propTypes = {
  menuText: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Menuitem
