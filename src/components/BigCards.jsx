import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import instagram from '../images/icon-instagram.svg';
import youtube from '../images/icon-youtube.svg';
import up from '../images/icon-up.svg';
import down from '../images/icon-down.svg';

function BigCards(props) {
    /*
    props.data=
        [
            {
                site: 'facebook',
                user: '@nathanf',
                count: '1987',
                type: 'Followers',
                today: '12 Today',
            }
        ]
    */

    return (
        <div className="big-card">
            <section className={props.data[0].site}>
                <div className="user">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon-${props.data[0].site}.svg`} alt="" />
                    <p className="user-name">{props.data[0].user}</p>
                </div>
            </section>
        </div>
    )
}

export default BigCards;