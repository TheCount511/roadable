import React, {useState} from 'react'
import './dashboard.css'
import {CollapsedDiv} from '../StyledComponents'

const Dashboard=()=>{
	const [collapsed, setCollapsed] = useState(true);
	const handleCollapsed = ()=>{
		console.log(collapsed)
		setCollapsed(!collapsed)
	}
	return(


	<div className="dashboard">
	 <aside className="dashmenu">
		<div className="dashbutton">
		 <i className="dashicon fas fa-tachometer-alt"></i>
		 <span className="dashlabels">DASHBOARD</span>
		</div>
	    <div className="dashbutton">
	     <div onClick={handleCollapsed}><i className="dashicon fas fa-file-alt"></i>
			<span className="dashlabels">REPORTS</span> <i className="fas fa-caret-down"></i>
			</div>
			<CollapsedDiv collapsed={collapsed}> 
				<li><i id="red" className="fas fa-circle"></i> PENDING</li>
				<li><i id="yellow" className="fas fa-circle"></i> ACTIVE</li>
				<li><i id="green"className="fas fa-circle"></i> COMPLETE</li>
			</CollapsedDiv> </div></aside>
			<section></section>
		</div>)
}

export default Dashboard;