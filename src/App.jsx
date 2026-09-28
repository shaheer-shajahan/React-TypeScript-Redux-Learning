import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    return(
        <section>
            <Header />
            <div class="d-flex flex-grow-1">
                <Sidebar />
                <Main />
            </div>
            <Footer />
        </section>
    )
}

export default App;