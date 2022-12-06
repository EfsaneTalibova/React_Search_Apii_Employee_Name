import React from 'react'
import { useEffect, useState } from 'react'

import '../Employes/Employes.css'
function Employes() {
    const [props, setProps] = useState(
        {
            users:[],
            searchUser:[]
        }
    )
    useEffect(() => {
        fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
            .then(res => res.json())
            .then(data => setProps({users:data,searchUser:data}))
    }, []);
    const searchNameFunc = (e) => {
        if(e.target.value.length){
            let arr = props.users.filter((user) => {
                return user.name.toLowerCase().includes(e.target.value.toLowerCase());
            })
            setProps({...props,searchUser:arr})
        }
        else{
            setProps({searchUser:props.users})
        }
    }
    const searchDepartFunc = (e) => {
        if(e.target.value.length){
            let arr = props.users.filter((user) => {
                return user.department.toLowerCase().includes(e.target.value.toLowerCase());
            })
            setProps({...props,searchUser:arr})
        }
        else{
            setProps({searchUser:props.users})
        }
    }

    return (
        <div className='search_div'>
            <div>
                <input type="text" onChange={searchNameFunc}/>
                {props.searchUser.map((item, b) => (
                    <div key={b}>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
            <div>
                <input type="text" onChange={searchDepartFunc}/>
                {props.searchUser.map((item, b) => (
                    <div key={b}>
                        <p>{item.department}</p>
                    </div>
                ))}
            </div>

        </div>
    );

}

export default Employes;
