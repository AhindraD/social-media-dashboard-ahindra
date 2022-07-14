function SmallCards(props) {
    /*
            {
                site: 'facebook',
                count: '83',
                type: 'Page Views',
                today: '3%',
                trend: 'up',
            }
    */

    return (
        <section className={`small-card ${props.data.site}`}>
            <div className="small-top">
                <div className="s-type">{props.data.type}</div>
                <img src={`./assets/images/icon-${props.data.site}.svg`} alt="" />
            </div>
            <div className="small-bottom">
                <div className="s-count">
                    {props.data.count}
                </div>
                <div className="trend">
                    <img src={`./assets/images/icon-${props.data.trend}.svg`} alt="" />
                    <p className={props.data.trend}>{props.data.today}</p>
                </div>
            </div>
        </section>
    )
}

export default SmallCards;