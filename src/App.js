import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friends={props.state.sideBar.friends}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={<Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                        />}/>
                        <Route path="/dialogs/*" element={<Dialogs
                            store={props.store}
                            state={props.state.dialogsPage}
                        />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

