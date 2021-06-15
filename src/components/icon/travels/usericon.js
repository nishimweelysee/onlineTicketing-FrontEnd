import React from 'react'

export default function usericon({ color='mainColor' }) {
    return (
        <div className="bg-mainColor w-min rounded-full p-10">
            <svg className="w-32 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 399.14 399.14">
                <g>
                    <circle cx="108.75" cy="72.98" r="60"/>
                    <path d="M192.389,202.238c-19.946-23.984-50.006-39.258-83.639-39.258C48.689,162.98,0,211.669,0,271.73h122.897L192.389,202.238z"
                        />
                    <path d="M300.376,136.676l38.661-38.661l60.104,60.104l-38.661,38.661L300.376,136.676z"/>
                    <path d="M110.998,386.16l68.464-19.986l-48.478-48.477L110.998,386.16z"/>
                    <path d="M146.381,290.67l132.782-132.782l60.104,60.104L206.485,350.774L146.381,290.67z"/>
                </g>
        </svg>
     </div>
    )
}
