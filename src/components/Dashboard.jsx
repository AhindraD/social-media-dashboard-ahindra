import BigCards from "./BigCards";
import SmallCards from "./SmallCards";


function Dashboard(props) {


    return (
        <div className="container">
            <section className="dash">
                <div className="head1">
                    <div className="h1">
                        <p className="h1top"></p>
                        <p className="h1bottom"></p>
                    </div>
                    <div className="toggle">
                    </div>
                </div>
                <main className="big">
                    <BigCards />
                </main>
            </section>
            <section className="overview">
                <div className="head2">
                    <p className="h2"></p>
                </div>
                <main className="small">
                    <SmallCards/>
                </main>
            </section>
        </div>
    )
}

export default Dashboard;