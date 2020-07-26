import React, { useState } from 'react';
import TitlePanel from './TitlePanel';
import CollectionPanel from './CollectionPanel';
import SearchPanel from './SearchPanel';

function App() {
    return(
        <div className="container">
            <div className="row">
                <TitlePanel />
            </div>
            <div className="row">
                <SearchPanel />
                <CollectionPanel />
            </div>
        </div>
    )
}

export default App;