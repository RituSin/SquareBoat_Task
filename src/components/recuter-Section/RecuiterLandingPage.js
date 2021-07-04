import { useEffect, useState } from 'react';
import styles from './RecuiterLanding.module.css';
import PostJob from './PostJob';
import Profile from '../common_component/Profile';
import ViewJob from '../common_component/ViewJob';
import { baseurl } from '../../URL';

function RecuiterLandingPage() {
    const [viewJob, setViewJob] = useState(true);
    const [postJob, setPostJob ] = useState(false);
    const [ jobs, setJobs] = useState([])

    const onSelectNavItemHandler = (type) => {
        setPostJob(false);
        setViewJob(false);
        if(type == "post"){
            setPostJob(true);
            setViewJob(false);
        }
        else if(type == "view"){
            setPostJob(false);
            setViewJob(true);
        }
    }

    useEffect(() => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(`${baseurl}/jobs`, requestOptions)
        .then(response =>  response.json())
        .then(res => {
            if(res.success === 1){
                setJobs(res.data)
            }
        })
    })

    const onPostJobHandler = (e) => {
        console.log(e)
    }
     return(
         <div>
            <div className={styles.navbar}>
                <span>Recuiter Portal</span>
                <div>
                    <span onClick={() => onSelectNavItemHandler("post")}>Post Job</span>
                    <span onClick={() => onSelectNavItemHandler("view")}>View Jobs</span>
                    <span onClick={() => onSelectNavItemHandler("")}>Profile</span>
                </div>
            </div>

            <div  style={{position: 'relative', top:"6rem", zIndex:-1}} className={"container"}>
                {
                    viewJob ? 
                    <ViewJob jobs={jobs}/>
                    :
                    postJob ? 
                    <PostJob onsubmit={(e) => onPostJobHandler(e)}/>
                    :
                    <Profile />
                }
            </div>
         </div>
     )
}

export default RecuiterLandingPage;