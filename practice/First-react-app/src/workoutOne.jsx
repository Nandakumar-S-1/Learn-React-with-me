export default function ProfileCard({name,email}){
    return(
        <div className="profile_card">
            <h1>{name}</h1>
            <p>Email:- {email}</p>
        </div>
    )
}