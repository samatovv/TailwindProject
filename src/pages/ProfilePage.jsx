import { useParams } from "react-router-dom"

export default function ProfilePage(){
    const params = useParams();
    console.log(params)
    return(
        <div className="border-solid bg-blue-300">
            <h1>Profile Page {params.profileId}</h1>
        </div>
    )
}