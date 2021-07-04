function Login(props){
    const onsubmit = (e) => {
        e.preventDefault()
        props.onSignIn(e)
    }
    return(
      <form onSubmit={(e) => onsubmit(e)}>
        <div className="form-group mb-3">
          <label for="email" className="mb-2">Email:</label>
          <input type="email" className="form-control" required id="email" placeholder="Enter email"/>
        </div>
        <div className="form-group mb-3">
          <label for="pwd" className="mb-2">Password:</label>
          <input type="password" className="form-control" required id="pwd" placeholder="Enter password"/>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"/> Remember me</label>
        </div>
        <button type="submit" class="btn btn-success mb-4" >Submit as a <b>{props.type}</b></button>
      </form>
    )
}

export default Login;