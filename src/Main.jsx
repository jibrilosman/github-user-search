import React from 'react'
import './index.css'
import Twitter from './assets/icon-twitter.svg'
import Website from './assets/icon-website.svg'
import Company from './assets/icon-company.svg'
import Location from './assets/icon-location.svg'

const Main = (props) => {
    const date = new Date(props.results.created_at).getFullYear();
    const month = new Date(props.results.created_at).getMonth();
    const day = new Date(props.results.created_at).getDate();
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const monthName = months[month];
    const dateJoined = `${monthName} ${day}, ${date}`;
    props.results.date = dateJoined;

    const twitter = {
        available: props.results.twitter_username ? true : false,
        userName: props.results.twitter_username || 'Not Available'
    }
    if(props.results.message === 'Not Found'){

        return (
            <main className='container'>
                <section className='result-container'>
                    <div className="result-header-img">
                        <img src={props.results.avatar_url} alt="user avatar"  width={50}/>
                    </div>
                    <div className="result-header-info">
                        <span>
                            <h2>{props.results.message}</h2>
                        </span>
                    </div>
                </section>
            </main>
        )
    }
    return (
        <main className='container'>
            <section className='result-container'>
            <div className="result-header-img">
              <img src={props.results.avatar_url} alt="user avatar"  width={50}/>
            </div>

            <div className="result-header-info">
                <span>
                    <h2>{props.results.name}</h2>
                    <h3>@{props.results.login}</h3>
                </span>
                <p>Joined: {dateJoined}</p>
            </div>
                

                <div className="result-info">
                    <div className="result-info-repos">
                        <h4>Repos</h4>
                        <span>8</span>
                    </div>
                    <div className="result-info-followers">
                        <h4>Followers</h4>
                        <span>{props.results.followers}</span>
                    </div>
                    <div className="result-info-following">
                        <h4>Following</h4>
                        <span>{props.results.following}</span>
                        </div>
                </div>

                <div className="result-data">
                    <div className="result-data-bio">
                       <img src={Location} />
                      <span>{props.results.location}</span>
                    </div>
                    <div className="result-data-bio">
                       <img src={Twitter} />
                      <span>{twitter.userName}</span>
                    </div>
                    <div className="result-data-bio">
                       <img src={Website} />
                     <span>{props.results.blog}</span> 
                    </div>
                    <div className="result-data-bio">
                       <img src={Company} />
                      <span>{props.results.company}</span>
                    </div>
                </div>
            </section>
        </main>
      )
}

export default Main