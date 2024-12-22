import React from 'react'
import CustomTab from '../../Components/CustomTab/CustomTab.view'
import Incoming from '../../Components/Dashboard/Incoming'
import Outgoing from '../../Components/Dashboard/Outgoing'
import Teams from '../../Components/Dashboard/Teams'
import { pagetitle } from '../../helper/CommonFunction'
import "./static/dashboard.scss"

const Dashboard = (props) => {
    // title is too important for onpage seo
    pagetitle(props.pageTitle);
  return (
    <div className='mt-4 dashboard-container'>
        <CustomTab
            allTabs={[
                {
                    title:"Incoming Sample",
                    component:<Incoming/>
                },
                {
                    title:"Outgoing Sample",
                    component:<Outgoing/>
                },
                {
                    title:"Teams",
                    component:<Teams/>
                },
            ]}
        />
    </div>
  )
}

export default Dashboard