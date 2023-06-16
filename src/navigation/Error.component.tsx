import React from "react";


interface IProps {
    errorCode: number
}
const Error:React.FC<IProps> = ({errorCode})=>{
    return (
        <div>Error: {errorCode}</div>
    )
}

export default Error