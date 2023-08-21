import Header from "./Header";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="root">


                <div>
                    {children}
                </div>


            </div>
        </div>
    );
}

export default DefaultLayout;