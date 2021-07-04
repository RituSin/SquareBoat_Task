import JobCard from "./JobCard";
import './ViewJob.css';
function ViewJob(){
    const jobs = [1,1,1,1,1,1,1]
    return(

    <div>
        {
            jobs.map(item => (
            <JobCard >
                <div className="mb-1"><u><b>Software Engineer</b> at SquareBoat Company</u></div>
                <div className="mb-1"><b>Experience: </b> +2   </div>
                <div className="mb-1"><b>Required Skills: </b> Javascript, ReactJS, Node.Js, MongoDB....</div>
                <div className="mb-1"><span style={{paddingRight:10,marginRight:10, borderRight:'1px solid #ccc'}}><b>Posted By:</b> Ritu singh</span><b>Job Applicants: </b> 10</div>
            </JobCard>
            ))
        }
       
        
    </div>
    )
}

export default ViewJob;