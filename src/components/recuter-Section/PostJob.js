function PostJob(props){
    const onsubmit = (e) => {
        props.onsubmit(e);
    }
    return(

    <form onSubmit={(e) => onsubmit(e)}>
       
        <div className="form-group mb-3">
            <label for="companyname"  className="mb-2">Company Name</label>
            <input type="text" className="form-control" id="companyname" required placeholder="Company Name" />
        </div>
        <div className="form-group mt-3">
            <label for="exp"  className="mb-2">Required Experience</label>
            <input type="text" className="form-control" id="exp" required placeholder="Required Experience" />
        </div>
        <div  className="form-group mt-3">
            <label for="location"  className="mb-2">Location</label>
            <input type="text" className="form-control" id="location" required placeholder="Location" />
        </div>
        <div  className="form-group mt-3">
            <label for="jobprofile"  className="mb-2">Job Profile</label>
            <input type="text" className="form-control" id="jobprofile" required placeholder="Job Profile" />
        </div>
        <div  className="form-group mt-3">
            <label for="skill"  className="mb-2">Required Skills</label>
            <input type="text" className="form-control" id="skill" required placeholder="Required Skills" />
        </div>
        
        <div  className="form-group mt-3">
            <label for="requirement"  className="mb-2">Requirement</label>
            <textarea className="form-control" id="requirement" required rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary mb-5 mt-5">Submit</button>
    </form>
    )
}

export default PostJob;