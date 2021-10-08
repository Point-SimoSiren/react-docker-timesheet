import './App.css'
import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const App = () => {

  useEffect(() => {
    Axios.get("https://timesheetrestapi.azurewebsites.net/api/workassignments")
      .then(res => setWorks(res.data))
  }
    , [])

  const [works, setWorks] = useState([{ id: 100, title: "Loading..." }])

  return (
    <div className="App">
      <header className="App-header">

        <h2>
          Dockerized React App
        </h2>

        <h3>
          Työt
        </h3>
        {works.map(w =>
          <p key={w.id}>{w.title}</p>
        )}

      </header>
    </div>
  );
}

export default App;
