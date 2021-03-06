import BigCards from "./BigCards";
import SmallCards from "./SmallCards";
import DATA from "../DATA";
import { useState } from "react";

function Dashboard(props) {
    let [darkActive, setDarkActive] = useState(true);

    return (
        <div className={darkActive ? "container" : "container light-theme"}>
            <section className="dash">
                <div className="head1">
                    <div className="h1">
                        <p className="h1top">Social Media Dashboard</p>
                        <p className="h1bottom">Total Followers: 23,004</p>
                    </div>
                    <div className="toggle">
                        <p className="dark">Dark Mode</p>
                        <div className="switch" onClick={() => setDarkActive(!darkActive)}>
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
                <main className="big">
                    {DATA.big.map((elem, ind) => { return <BigCards key={`big-${ind}`} data={DATA.big[ind]} /> })}
                </main>
            </section>
            <section className="overview">
                <div className="head2">
                    Overview - Today
                </div>
                <main className="small">
                    {DATA.small.map((elem, ind) => { return <SmallCards key={`small-${ind}`} data={DATA.small[ind]} /> })}
                </main>
            </section>
        </div>
    )
}

export default Dashboard;