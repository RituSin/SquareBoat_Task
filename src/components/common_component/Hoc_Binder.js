
function Hoc_Binder(props){
    const classes = ' ' + props.className
    return <div className={classes}>{props.children}</div>
}

export default Hoc_Binder;