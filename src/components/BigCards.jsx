function BigCards(props) {
    /*
    props.data=
            {
                site: 'facebook',
                user: '@nathanf',
                count: '1987',
                type: 'Followers',
                today: '12 Today',
                trend: 'up',
            }
    */

    return (
        <section className={`big-card ${props.data.site}`} >
            <div className="bar"></div>
            <div className="user">
                <img src={`./assets/images/icon-${props.data.site}.svg`} alt="" />
                <p className="user-name">{props.data.user}</p>
            </div>
            <div className="count">
                {props.data.count}
            </div>
            <div className="type">
                {props.data.type}
            </div>
            <div className="trend">
                <img src={`./assets/images/icon-${props.data.trend}.svg`} alt="" />
                <p className={props.data.trend}>{props.data.today}</p>
            </div>
        </section >
    )
}

export default BigCards;