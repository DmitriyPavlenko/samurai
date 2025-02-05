import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg' alt='logo' />
            </header>
            <nav className='nav'>
                <div><a>Profile</a></div>
                <div></div>
                <a>Messages</a>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>
            <div className='content'>
                <img src="https://piligrim.ua/wp-content/uploads/2021/08/Kendwa.jpg" alt=""/>
                <div>ava+description</div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        post1
                    </div>
                    <div>
                        post2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

