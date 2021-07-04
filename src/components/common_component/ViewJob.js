import JobCard from "./JobCard";
import './ViewJob.css';
function ViewJob(props){
    const jobs = props.jobs
    return(

    <div>
        {
            jobs.map(item => (
            <JobCard >
                <div className="mb-1"><u><b>{item.profile}</b> at {item.comapany} Company</u></div>
                <div className="mb-1"><b>Experience: </b> {item.experience}   </div>
                <div className="mb-1"><b>Required Skills: </b> {item.skills}....</div>
                <div className="mb-1"><span style={{paddingRight:10,marginRight:10, borderRight:'1px solid #ccc'}}><b>Posted By:</b> {item.recuiter}</span><b>Job Applicants: </b> 10</div>
            </JobCard>
            ))
        }
       
        
    </div>
    )
}

export default ViewJob;