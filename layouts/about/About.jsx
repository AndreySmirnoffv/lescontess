import firstImage from "../../assets/img/about/first-img.png";
import secondImage from "../../assets/img/about/second-img.png";
import { Link } from "react-router-dom";
import "./about.sass";
import TopPath from "../top-path/TopPath";

const About = () => {
  const pathL = [
    {
      id: 1,
      name: "Главная",
      path: "/",
    },
    {
      id: 2,
      name: "О нас",
      path: "/shop",
    },
  ];

  return (
    <section className="about-us__wrapper">
      <section className="about-us">
        <section className="about__header">
          <TopPath
            path={pathL}
            pageName="О нас"
          />
        </section>
        <section className="first">
          <section className="first__left">
            <h1>Was ist Les Contes</h1>
            <p className="first-left__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              facere quibusdam asperiores totam reprehenderit. Similique
              mollitia in maxime molestiae dolores deserunt possimus quaerat
              ullam iste illum, laborum amet ratione culpa? Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. A nobis nesciunt ipsum.
              Error fuga nemo fugit. Repudiandae commodi accusamus blanditiis
              possimus, consequuntur amet voluptate dolorem enim, odit
              asperiores dolores itaque? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eaque facere quibusdam asperiores totam
              reprehenderit. Similique mollitia in maxime molestiae dolores
              deserunt possimus quaerat ullam iste illum, laborum amet ratione
              culpa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
              nobis nesciunt ipsum. Error fuga nemo fugit. Repudiandae commodi
              accusamus blanditiis possimus, consequuntur amet voluptate dolorem
              enim, odit asperiores dolores itaque? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eaque facere quibusdam asperiores
              totam reprehenderit. Similique mollitia in maxime molestiae
              dolores deserunt possimus quaerat ullam iste illum, laborum amet
              ratione culpa? Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. A nobis nesciunt ipsum. Error fuga nemo fugit. Repudiandae
              commodi accusamus blanditiis possimus, consequuntur amet voluptate
              dolorem enim, odit asperiores dolores itaque?
            </p>
            <Link className="first-left__link" to="/duefte">
              <button className="first-left-link__button">
                Наша коллекция
              </button>
            </Link>
          </section>
          <section className="right">
            <img src={firstImage} alt="" />
          </section>
        </section>
        <section className="second">
          <section className="second__left">
            <img className="second-left__img" src={secondImage} alt="" />
          </section>
          <section className="second__right">
            <h1>Welt des Les Contes</h1>
            <p className="second-right__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quasi
              error ab assumenda nisi facere harum suscipit recusandae similique
              quaerat, dolore praesentium velit nihil illo dolorum tempore,
              nesciunt corporis? Sapiente. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Id quasi error ab assumenda nisi
              facere harum suscipit recusandae similique quaerat, dolore
              praesentium velit nihil illo dolorum tempore, nesciunt corporis?
              Sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Id quasi error ab assumenda nisi facere harum suscipit
              recusandae similique quaerat, dolore praesentium velit nihil illo
              dolorum tempore, nesciunt corporis? Sapiente. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Id quasi error ab assumenda
              nisi facere harum suscipit recusandae similique quaerat, dolore
              praesentium velit nihil illo dolorum tempore, nesciunt corporis?
              Sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Id quasi error ab assumenda nisi facere harum suscipit
              recusandae similique quaerat, dolore praesentium velit nihil illo
              dolorum tempore, nesciunt corporis? Sapiente.
            </p>
            <Link className="second-right__link" to="/shop">
              <button className="second-right-link__button">Где купить</button>
            </Link>
          </section>
        </section>
      </section>
    </section>
  );
};

export default About;
