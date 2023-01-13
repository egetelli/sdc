import React, {useState, useEffect} from 'react'
import axios from 'axios'

const FetchData = (type) => {

    if(type ==="user")
    {
        const [users, setUsers] = useState([])

        useEffect(() => {
            axios.get('http://localhost:3000/api/user')
            .then(res => {
               // console.log(res.data)
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
    
            })
        }, [])
    
        return (
        
            <div>
                <ul>
                    {
                        users.map(user=> <li key={user.id}>{user.fullName}</li>)
                    }
                </ul>
    
            </div>
      )
    }
    if(type === "campaign")
    {
        const [campaigns, setCampaigns] = useState([])

        useEffect(() => {
            axios.get('http://localhost:3000/api/campaign')
            .then(res => {
               // console.log(res.data)
                setCampaigns(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        }, [])
    
        return (
        
            <div>
                <ul>
                    {
                        campaigns.map(campaign=> <li key={campaign.id}>{campaign.description}</li>)
                    }
                </ul>
    
            </div>
      )
    }
 
}

export default FetchData