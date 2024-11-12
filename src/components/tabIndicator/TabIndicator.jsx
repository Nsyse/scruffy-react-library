import "./tabIndicator.css"

export default function TabIndicator({children, color}) {

    return <div className="tabIndicator" style={{backgroundColor:color}}>
        {children}
    </div>
}