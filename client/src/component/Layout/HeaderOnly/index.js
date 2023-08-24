import Header from "../Items/Header";


function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="root">
                {children}

            </div>
        </div>
    );
}

export default HeaderOnly;