import React, { useEffect, useState } from "react";


function Github(){
    const [data , setData] = useState([])

    useEffect(()=>{
            fetch('https://api.github.com/users/mayanksingh-0852')
            .then(res => res.json())
            .then(data=>{
                console.log(data);
                setData(data)
            })
    },[])


    return(
        <div className="bg-gray-900 text-white text-3xl p-5 text-center">GitHub Followers:  {data.followers}
         <div className="flex justify-center"><img src={data.avatar_url} alt="Git picture" width={300}/></div>
         
    </div>
    )
}

export default Github