import katchImage from '../../../assets/img/main-page/katch.png'
import './partners.sass'

const Partners = () => {
    return (
        <div className="partners-wrapper">
            <div className="partners">
                <div className="left">
                    <a href="/buy">
                        <h1>Наши Партнеры</h1>
                    </a>
                    <p>Бренд Les Contes продаётся в разных странах мира.</p>
                    <a href="/buy">
                        <button>где купить</button>
                    </a>
                </div>
                <div className="right">
                    <img src={katchImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Partners