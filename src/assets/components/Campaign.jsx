import React, { useState, useEffect } from 'react';
import axios from 'axios'
import User from './User';
import Navbar from './Navbar';
import ParticlesBg from "particles-bg";
import Carousel, { CarouselItem } from "./Carousel";

const Campaign = () => {

    const [campaignName, setcampaignName] = useState('');
    const [campaignDescription, setcampaignDescription] = useState('');
    const [targetAmount, settargetAmount] = useState('');

    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/campaign')
            .then(res => {
                console.log(res.data)
                setCampaigns(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(campaignName);
    }




    return (
        <div>
            <Navbar />
            <ParticlesBg num={100} type="cobweb" bg={true} />
            {/* <ul>
            {
            campaigns.map((campaign, index)=>
            <li key={index}>
                {campaign.campaignDescription}
            </li>)
            }
        </ul> */}
            <div class="App">
                <div className="auth-form-container">
                    <h2 class="black font-bold text-2xl text-slate-50" >Create Campaign</h2>
                    <div className="row">
                        <div className="columns contact-details">
                            <form className="campaign-form" onSubmit={handleSubmit}>
                                <label className="font-bold text-slate-50">Campaign Name:
                                    <br></br>
                                    <input
                                        value={campaignName} onChange={(e) => setcampaignName(e.target.value)}
                                        id="campaignName"
                                        class="bg-slate-400 block w-full p-2 text-teal-900 border border-teal-300 rounded-lg bg-teal-50 sm:text-xs focus:ring-cyan-500 
                                        focus:border-cyan-500 dark:bg-teal-700 dark:border-teal-400 dark:placeholder-teal-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                                        type="text"
                                    />
                                </label>
                                <label className="font-bold text-slate-50">Campaign Description:
                                    <br></br>
                                    <input
                                        value={campaignDescription} onChange={(e) => setcampaignDescription(e.target.value)}
                                        id="campaignDescription"
                                        class="bg-slate-400 block w-full p-2 text-teal-900 border border-teal-300 rounded-lg bg-teal-50 sm:text-xs focus:ring-cyan-500 
                                        focus:border-cyan-500 dark:bg-teal-700 dark:border-teal-400 dark:placeholder-teal-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                                        type="text"
                                    />
                                </label>
                                <label className="font-bold text-slate-50">Target Amount:
                                    <br></br>
                                    <input
                                        value={targetAmount} onChange={(e) => settargetAmount(e.target.value)}
                                        id="targetAmount"
                                        class="bg-slate-400 block w-full p-2 text-teal-900 border border-teal-300 rounded-lg bg-teal-50 sm:text-xs focus:ring-cyan-500 
                                        focus:border-cyan-500 dark:bg-teal-700 dark:border-teal-400 dark:placeholder-teal-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                                        type="text"
                                    />
                                </label>
                                <label className="font-bold text-slate-50">Campaign Photo:
                                    <br></br>
                                    <input
                                        class=" bg-slate-400
                                        form-control
                                        block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-teal-700
                                        bg-slate-100 bg-clip-padding
                                        border border-solid border-teal-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-teal-700 focus:bg-white focus:border-cyan-400 focus:outline-none"
                                        aria-describedby="file_input_help" id="file_input" type="file"
                                    />
                                </label>
                                <br></br>
                                <button class="text-white bg-gradient-to-r from-blue-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                    id="button" type="submit">
                                    Submit
                                </button>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
            <br></br>
            <hr class="h-px bg-green-200 border-0 dark:bg-gray-700"></hr>    
            <div class="App1">
                <div className="auth-form-container">
                    <h2 class="text-center font-medium leading-tight text-4xl mt-0 mb-2 text-slate-50">Trending Campaigns</h2>
                    <br></br>
                    <div class="row">
                        <Carousel>
                            <CarouselItem>Campaign1</CarouselItem>
                            <CarouselItem>Campaign2</CarouselItem>
                            <CarouselItem>Campaign3</CarouselItem>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Campaign