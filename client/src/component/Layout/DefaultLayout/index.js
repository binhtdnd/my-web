import Header from "./Header";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="root">
                <div className="row">

                    <div className="col col-sidebar">
                        <Sidebar />
                    </div>

                    <div className="col col-content">
                        <div>
                            {children}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default DefaultLayout;