import aboutUsImage from '../../../assets/img/main-page/about-image.png'
import './about-us.sass'

const AboutUs = () => {
    return(
        <div className="about-wrapper">
            <div className="about">
                <div className="left">
                    <a href="/buy">
                        <h1>Как все начиналось</h1>
                    </a>
                    <p>Познакомьтесь с историей нашей торговой марки, узнайте с чего начинался её путь почти два столетия назад…</p>
                    <a href="/buy">
                        <button>История Lescontes</button>
                    </a>
                </div>
                <div className="right">
                    <img src={aboutUsImage} alt="" />
                </div>
            </div>
        </div>
    )
}


export default AboutUs;