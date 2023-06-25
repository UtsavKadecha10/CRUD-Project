import Resource1 from "./StudentComp";
import Resource2 from "./PersonComp";
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


const App = () => {

    const home = <h1 className="home">Welcome to my Database</h1>

    return (
        <div>
            <navbar>
                <Router>
                    <ul className="container">
                        <li className="list"><Link className="Link" to={'/'} >Home</Link></li>
                        <li className="list"><Link className="Link" to={'/students'} >Student</Link></li>
                        <li className="list"><Link className="Link" to={'/persons'} >Person</Link></li>
                    </ul>
                    <Routes>
                        <Route path="/" element={home}/>
                        <Route path="/students" element={<Resource1 />} />
                        <Route path="/persons" element={<Resource2 />} />
                    </Routes>
                </Router>
            </navbar>
        </div>
    )
}

export default App;
