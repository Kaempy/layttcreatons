import React from 'react'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
      <div className="404Page">
          <h2> OUPS!!!!!!!</h2>
          <br/>
          <p>Page cannot be found</p>

          <Link to="/">Back to Home Page......</Link>
        
    </div>
  )
}

export default PageNotFound;