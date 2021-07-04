function Signup(props){
    const onsubmit = (e) => {
         e.preventDefault();
         props.onSignUp(e);
    }
    return(
        <form onSubmit={(e) => onsubmit(e)}>
          
          <div className="form-group mt-3">
            <label for="name" className="mb-2">Name</label>
            <input type="text" className="form-control" id="name" required placeholder="Enter Name"/>
          </div>
          <div className="form-group mt-3">
            <label for="phone" className="mb-2">Phone Number</label>
            <input type="text" className="form-control" id="phone" required placeholder="Enter Phone Number"/>
          </div>
          <div className="form-group mt-3">
            <label for="email" className="mb-2">Email:</label>
            <input type="email" className="form-control" id="email" required placeholder="Enter email"/>
          </div>
          <div className="form-group mt-3">
            <label for="pwd" className="mb-2">Password:</label>
            <input type="password" className="form-control" id="pwd" required placeholder="Enter password"/>
          </div>        
          <button type="submit" class="btn btn-success m-3 mb-4">Signup as a <b>{props.type}</b></button>
      </form>
    )
}

export default Signup;