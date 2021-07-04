
function JobCard(props){
    const styles={
        height:' 7rem',
        border: '1px solid #ccc',
        borderRadius: "12px",
        backgroundColor: '#f5f0f0',
        padding: '20px',
        boxSizing: 'Border-Box',
        fontSize: '0.8rem',
        cursor: 'pointer',
        marginRight: '10px',
        marginBottom: '1.5rem'
    }
    return(
        <div style={styles}>
            {props.children}
        </div>
    )
}

export default JobCard;