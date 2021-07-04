import styles from './CandidateLanding.module.css';
import ViewJob from '../common_component/ViewJob';
import Hoc_Binder from '../common_component/Hoc_Binder';

function CandidateLandingPage(){
    return(
        <Hoc_Binder >
            <div className={styles.navbar}>
                <span >Candidate Portal</span>
                <div className="col-sm-8">
                    <div className="row">
                        <div className="offset-2 col-sm-6">
                            <div className="d-flex">
                                <input className="form-control col-sm-8 mr-sm-2" type="search" placeholder="Search Jobs" aria-label="Search" />
                                <button className="col-sm-2 btn btn-outline-light ml-2 my-2 my-sm-0" type="submit">Search</button>
                            
                            </div>
                           
                        </div>
                        <div id="profile" className=" offset-2 col-sm-2 text-light" style={{position:'relative', top:'5px', cursor:'pointer'}} >Profile</div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{position: 'relative', top:"6rem", zIndex:-1}}>
                <div style={{width:'60%', float:'left',  height:'100vh', overflow:'auto'}}>
                    <ViewJob />
                </div>
                <div style={{width:'40%', float:'right', height:'100vh',borderLeft:'1px solid #ccc', padding:'10px', overflow:'auto'}}>
                    <div>
                        <h1>Jobs Details</h1>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 mb-3"  >Apply</button>
                </div>
            </div>

        </Hoc_Binder>
    )
}

export default CandidateLandingPage;