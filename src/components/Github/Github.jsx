import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    //hook for fetching data 
    const data = useLoaderData()
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/DanishICUP')
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data);
    //         })
    //         .catch(err => console.error(err));
    // }, []);

    return (
        <div className='flex flex-col items-center bg-gray-600 text-white text-3xl p-4'>


            <div>{data ? `Github Followers: ${data.followers}` : "Loading..."}</div>
            {data && (
                <img src={data.avatar_url} alt="Github avatar" className="w-96 h-96 rounded-full mt-4" />
            )}



        </div>
    );
}

export default Github;

export const githubinfo = async ()=>{
       const respone = await fetch('https://api.github.com/users/DanishICUP');
       return respone.json();
}
