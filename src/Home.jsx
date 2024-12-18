import { useNavigate } from "react-router-dom";

function Home() {
   
    const mover = useNavigate();

    function sendToCheck() {
        mover(`/check`);
    }

    function sendToCreate()
    {
        mover(`/create`);
    }

    function sendToRemove(){
        mover(`/remove`);
    }
    
    return (
      
        <div className="background">
            <h1 className="header mb-32">Hunter's Party Room Reservations</h1>
            <div><button onClick={sendToCreate} >Create a Reservation</button></div>
            <div><button onClick={sendToCheck} >Check a Reservation</button></div>
            <div><button onClick={sendToRemove} >Remove a Reservation</button></div>
        </div>
    )
}

export default Home;