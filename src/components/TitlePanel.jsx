function TitlePanel() {
    return(
        <div className="container">
            {/*I think the jumbotron has a large margin at the bottom*/}
            <div className="bg-secondary">
            <br></br>
            <br></br>
                <div className="row">
                  <div className="col-4">
                    <h6>Welcome, *username*</h6>
                    <h6>Registered Email</h6>
                  </div>
                  <div className="col-6">
                    <img class="rounded" src='../assets/chess.png' alt="LOGO here, but for some reason it won't load"></img>
                  </div>
                  <div className="col-2">
                    <button type="button" class="btn btn-primary">Log Out</button>
                  </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
            </div>  
        </div>
    )
}

export default TitlePanel;