import React from 'react';


const Users = ({ userDetails, loading }) => {
  console.log(userDetails)
  
  if (loading) {
    return <h2>Loading ........</h2>
  }
  const renderedItem = userDetails.map((user, id) => {
    return (
      <div key={id} className="card">
        <div className="image-block">
          <img
            className="image-icon"
            alt={`face of ${user.name}`}
            src={user.picture.large} />
          <section>
            Hi i am {user.name.first} {user.name.last}{""}
          </section>
        </div>
        <div>
          <h2>Details</h2>
          Username:{user.login.username}
          Email: {user.email}<br />
          Phone: {user.phone}<br />
          Age: {user.dob.age}<br />
          Location: {user.location.state},{user.location.country} <br />
        </div>
      </div>
    );
  });

  return
  <div>{renderedItem}</div>
   
  
};

export default Users