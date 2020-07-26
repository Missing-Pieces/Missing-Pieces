function CollectionPanel() {
    return(
        <div className="col-4">
            <br></br>
            <button className="btn btn-warning"> ADD GAME </button>
            <br></br>
            <br></br>


            {/* Game Cards ------ This repeated for each game the player adds*/} 
            <div className="card">
                <div className="card-title">GAME NAME</div>
                <img src="#" alt="Card Image"></img>
                <div className="card-body">
                    <div className='row'>
                        <div className='col'><button className="btn btn-primary">Search</button></div>
                        <div className='col'><button className="btn btn-primary">View</button></div>
                    </div>
                </div>
            </div>
            <br></br>

            {/*Same as above */}


            <div className="card">
                <div className="card-title">GAME NAME</div>
                <img src="#" alt="Card Image"></img>
                <div className="card-body">
                    <div className='row'>
                        <div className='col'><button className="btn btn-primary">Search</button></div>
                        <div className='col'><button className="btn btn-primary">View</button></div>
                    </div>
                </div>
            </div>
            <br></br>


        </div>
    )
}

export default CollectionPanel;