import React from 'react'

const Container = ({children}) => {
  return (
    <div className="container" style={{maxWidth: "1300px", margin: "0 auto", padding: "0 3.2rem"}}>
      {children}
    </div>
  )
}

export default Container