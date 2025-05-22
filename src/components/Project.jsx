import React, { useState } from 'react'

function Project({ title, details, color }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="project" style={{ backgroundColor: color }}>
      <div className="project-title" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
      </div>
      {isOpen && (
        <div className="project-details">
          <p>{details}</p>
        </div>
      )}
    </div>
  )
}

export default Project
