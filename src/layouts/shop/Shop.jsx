import TopPath from "../top-path/TopPath";
import "./shop.sass";
import { Link } from "react-router-dom";

export const aromas = [
  {
    name: "Elfe d'or 30мл",
    imgs: [
      require("../../assets/img/shop/first-image.png"),
      require("../../assets/img/shop/first-image.png"),
      require("../../assets/img/shop/first-image.png"),
      require("../../assets/img/shop/first-image.png"),
    ],
    id: 1,
    price: "8 999",
    prevPrice: "13 300 ₽",
    path: "elfe-dor-30-ml",
    text: "Яркий чувственный аромат, подчеркнутый легким \n оттенком гурманских нот, придающий загадочность и \n утончённость.",
    unPath: {
      name: "Женские ароматы Les Contes",
      path: "/женские-ароматы-les-contes",
    },
    bonus: "НАБОР СЕМПЛОВ В ПОДАРОК!",
    description:
      "Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.",
    quantity: 9,
    articul: "LC515",
    bottomText: `Elfe d’or ist ein lang ersehntes neues Parfum von 2019, welches die allseits beliebte elfenhafte Kollektion fortsetzt.\n\n
    Die Schöpfer dieses einzigartigen Duftes scheinen ein Märchen von einer Prinzessin zu erzählen, die voller Mitleid eine schöne Elfe aus der Gefangenschaft eines reichen und gierigen Königs befreit. Der Legende nach sollen sich die Tränen dieses herzensguten Mädchens in ein magisches Elixier verwandelt haben – das kostbare Parfum Elfe d’or. Alle, die es auftrugen wurden reich und glückselig. Und dennoch konnte niemand den Schlüssel zum Geheimnis des magischen Parfums finden, niemand war in der Lage, es nochmals herzustellen.\n\n
    Die einhüllende Würze des Safrans in der Kopfnote geht Hand in Hand mit der erlesenen Zartheit des Jasmin. Die Herznote präsentiert einen warmen, schattigen Einklang der kräftigen Zeder, die zur Basisnote dieses Parfums wird – eine zarte Spur von sinnlichem Moschus hervorgehoben durch einen leichten Hauch von üppigen Noten verleiht dem Duft Geheimnis und Raffinesse.
    `
  },
  {
    name: "Bonheur",
    imgs: [require("../../assets/img/shop/second-image.png")],
    price: "9 099",
    prevPrice: "10 280 ₽",
    path: "bonheur",
    id: 2,
    text: "",
    unPath: {
      name: "Женские ароматы Les Contes",
      path: "/женские-ароматы-les-contes",
    },
    bonus: "НАБОР СЕМПЛОВ В ПОДАРОК!",
    description:
      "Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.",
    quantity: 9,
    articul: "LC515",
    bottomText: `In das Feenreich zu treten – das ist wie in eine Welt der Glückseligkeit einzutauchen. Jedoch kennt niemand den Weg in den verwunschenen Garten. Niemand … außer den Parfümeuren von Les Contes!\n\nMan sagt, dass die Feen selbst ihnen das Rezept für den Duft „Bonheur“ zugeflüstert haben. Wie sonst könnte man erklären, auf welche Weise die Komposition „Bonheur“ ein Gefühl von Glückseligkeit hervorruft? Jede Frau, die „Bonheur“ trägt, gibt auf die Frage „Was weckt dieser köstliche Duft in Ihnen?“ die Antwort: „Ich verspüre Glück.“\n\nFür wen: dieser raffinierte Duft ist für all diejenigen, welche lieber in der Realität agieren als in Träumen. Er ist für diejenigen, welche nicht nur schauen, sondern genau hinsehen wollen, nicht nur hören, sondern zuhören, nicht nur leben, sondern vor allem jeden Augenblick des Lebens genießen wollen.
    `
  },
  {
    name: "13e Fée",
    imgs: [require("../../assets/img/shop/third-image.png")],
    price: "8 999 ₽",
    prevPrice: "10 280 ₽",
    path: "13e-fee",
    id: 3,
    text: "",
    unPath: {
      name: "Женские ароматы Les Contes",
      path: "/женские-ароматы-les-contes",
    },
    bonus: "НАБОР СЕМПЛОВ В ПОДАРОК!",
    description:
      "Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.",
    quantity: 9,
    articul: "LC515",
    bottomText: `Diese fruchtig-blumige Chypre ist eine betörende Liebkosung. Ein duftender Zauber, welcher der Trägerin unwiderstehliche Anziehungskraft verleiht.\n\nFür wen: eine Frau mit unwiderstehlichem Zauber. Voller Selbstbewusstsein weiß sie zugleich zerbrechlich und verletzlich zu wirken. Sie repräsentiert alle Frauen zugleich und kann wie durch magische Kraft von einer Rolle in die andere schlüpfen.`

  },
  {
    name: "Elfe d’or",
    imgs: [require("../../assets/img/shop/fourth-image.png")],
    price: "14 777",
    prevPrice: "18 990 ₽",
    path: "elfe-dor-2",
    id: 4,
    text: "",
    unPath: {
      name: "Женские ароматы Les Contes",
      path: "/женские-ароматы-les-contes",
    },
    bonus: "НАБОР СЕМПЛОВ В ПОДАРОК!",
    description:
      "Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.",
    quantity: 9,
    articul: "LC515",
    bottomText: "hello world"

  },
  {
    name: "Elfe d’argent",
    imgs: [require("../../assets/img/shop/fifth-image.png")],
    price: "8 999",
    prevPrice: "11 990 ₽",
    path: "парфюмерная-вода-elfe-dargent",
    id: 5,
    text: "",
    unPath: {
      name: "Мужские ароматы Les Contes",
      path: "/мужские-ароматы-les-contes",
    },
    bonus: "НАБОР СЕМПЛОВ В ПОДАРОК!",
    description:
      "Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.",
    quantity: 9,
    articul: "LC515",
    bottomText: `Sie sind anders. Sie fühlen sich anders. Sie leben mehr als 1500 Jahre, wachsen langsam heran und altern so gut wie nicht. Sie wollen ihre Welt mit niemandem teilen, aber mit dem, den sie lieben, ihr ganzes Leben. Ihre Magie kann wehtun und heilen. Und vor allem sind sie willkürlich. Und diese Freiheit ist der Ursprung für ihre Harmonie und Kreativität. Sie können egoistisch sein, aber sie sind perfekt. In diesem Frühjahr präsentiert Les Contes ein neues Meisterwerk des Parfums „Elfe d’argent“.\n\n
    Leicht kühl – es öffnet sich mit den Noten von Bergamotte, die nichtsdestoweniger elegant durch die Wärme von roten Früchten ausgeglichen werden. Die Herznoten des Parfums sind Lavendel, weiße Blumen, Leder. Die elfenhafte Quintessenz: Reinheit, Mystizismus, Magie, Stolz, Egoismus. In der Basisnote – eine Vereinigung von Zeder und Patschuli. Die Selbstbezogenheit ist das, was die Elfen von anderen magischen Völkern unterscheidet. Die letzte langanhaltende Note dieser raffinierten, originellen Komposition ist der Moschus, der die Macht der Sinnlichkeit dieser ungewöhnlichen Kreaturen widerspiegelt.\n\n
    Für wen: für diejenigen, die bereit sind an Magie zu glauben.
    `
  },
  {
    name: "Les Contes d’Orient pour Elle",
    imgs: [require("../../assets/img/shop/sixth-image.png")],
    price: "8 999",
    prevPrice: "10 280 ₽",
    path: "dorient-pour-elle",
    id: 6,
    text: "",
    unPath: {
      name: "Женские ароматы Les Contes",
      path: "/женские-ароматы-les-contes",
    },
    bonus: "НАБОР СЕМПЛОВ В ПОДАРОК!",
    description:
      "Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.",
    quantity: 9,
    articul: "LC515",
    bottomText: "hello world"

  },
  {
    name: "Bois Enchanté",
    imgs: [require("../../assets/img/shop/seventh-image.png")],
    price: "8 999",
    prevPrice: "10 280 ₽",
    path: "bois-enchante",
    id: 7,
    text: "",
    unPath: {
      name: "Женские ароматы Les Contes",
      path: "/женские-ароматы-les-contes",
    },
    bonus: "НАБОР СЕМПЛОВ В ПОДАРОК!",
    description:
      "Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.",
    quantity: 9,
    articul: "LC515",
    bottomText: "hello world"

  },
  {
    name: "Bois Enchanté 100 мл.",
    imgs: [require("../../assets/img/shop/eights-image.png")],
    price: "14 990",
    prevPrice: "16 990 ₽",
    path: "bois-enchante-100",
    id: 8,
    text: "",
    unPath: {
      name: "Женские ароматы Les Contes",
      path: "/женские-ароматы-les-contes",
    },
    bonus: "НАБОР СЕМПЛОВ В ПОДАРОК!",
    description:
      "Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.",
    quantity: 9,
    articul: "LC515",
    bottomText: "hello world"

  },
  {
    name: "Magus",
    imgs: [require("../../assets/img/shop/ninth-image.png")],
    price: "8 999",
    prevPrice: "10 280 ₽",
    path: "magus",
    id: 9,
    text: "",
    unPath: {
      name: "Мужские ароматы Les Contes",
      path: "/мужские-ароматы-les-contes",
    },
    bonus: "НАБОР СЕМПЛОВ В ПОДАРОК!",
    description:
      "Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.",
    quantity: 9,
    articul: "LC515",
    bottomText: `Die Natur entfacht das innere Feuer dieses Mannes. Von ihm geht eine sanfte und kraftvolle Wärme aus. Die Magie dieses Feuers ist in ihm allgegenwärtig. Es ist beinahe unmöglich, den Mann im Besitz dieses Feuers zu halten. Um diese lodernde Flamme nicht zu verlieren, braucht der Mann neue Emotionen und Leidenschaften. Jederzeit schenkt er seiner Auserwählten all diese Wärme – für einen Abend, einen Monat, ein Jahr oder sein ganzes Leben.
    Für wen: Dieser Duft ist sanft, jedoch tückisch. Er zieht an und warnt zugleich. Wer Ruhe der Gefühlsexplosion vorzieht, sollten sich von dem Mann, der das Parfum Magus wählt, fernhalten. Streifen Sie die Magie und Ihr Leben wird nie mehr dasselbe sein. Es sind übrigens die lebhaften Erfahrungen, die unserem Leben Sinn geben. Der Duft Magus passt genau gut zu selbstbewussten Businessfrauen, mit einem zurückhaltenden Äußeren, aber leidenschaftlich im Inneren.
    `
  },
  {
    name: "Bonheur pour Homme",
    imgs: [require("../../assets/img/shop/tenth-image.png")],
    price: "8 999",
    prevPrice: "10 280 ₽",
    path: "bonheur-pour-homme",
    id: 10,
    text: "",
    unPath: {
      name: "Мужские ароматы Les Contes",
      path: "/мужские-ароматы-les-contes",
    },
    bonus: "НАБОР СЕМПЛОВ В ПОДАРОК!",
    description:
      "Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.",
    quantity: 9,
    articul: "LC515",
    bottomText: `Die große Neuigkeit dieses Jahres wird der neue heiß ersehnte Herrenduft „Bonheur pour Homme“.\n\n
    Dieser neue maskuline Duft der Marke Les Contes ist für den aktiven, unternehmungslustigen und selbstbewussten Mann kreiert worden. Ihm gelingt, was er anstrebt, zugleich bleibt er stets im Einklang mit sich selbst. Seine Energie macht ihn anziehend, sein Erfolg ist die treibende Kraft seines Daseins.\n\n
    Erfolgreich auf Schritt und Tritt, weiß er tagtäglich Gefahren zu umgehen und tritt immer als Sieger hervor. Sein rätselhafter Abenteurergeist wirkt erschreckend und anziehend zugleich. Er ist für alles zu haben und weiß seinen Eroberungen Glücksgefühle zu schenken.
    `

  },
  {
    name: "Padischah",
    imgs: [require("../../assets/img/shop/eleventh-image.png")],
    price: "14 990",
    prevPrice: "18 990 ₽",
    path: "padischah",
    id: 11,
    text: "",
    unPath: {
      name: "Женские ароматы Les Contes",
      path: "/женские-ароматы-les-contes",
    },
    bonus: "НАБОР СЕМПЛОВ В ПОДАРОК!",
    description:
      "Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.",
    quantity: 9,
    articul: "LC515",
    bottomText: "hello world"

  },
  {
    name: "Elfe rouge",
    imgs: [require("../../assets/img/shop/twelfth-image.png")],
    price: "8 999",
    prevPrice: "13 500 ₽",
    path: "elfe-rouge",
    id: 12,
    text: "",
    unPath: {
      name: "Женские ароматы Les Contes",
      path: "/женские-ароматы-les-contes",
    },
    bonus: "НАБОР СЕМПЛОВ В ПОДАРОК!",
    description:
      "Чарующие оттенки спелых фруктов, акварельные вкрапления цветов, мускусно-древесный фон… и капля волшебства в каждом флаконе.",
    quantity: 9,
    articul: "LC515",
    bottomText: ` In diesem Sommer wird Les Contes seine fabelhafte Kollektion Les Contes – Elfe noir und Elfe blanc – durch den neuen Duft Elfe rouge ergänzen.\n\n
    Eine mysteriöse, betörende Frau, ganz in rot gekleidet – wer ist sie? Sie taucht plötzlich auf und verschwindet unerwartet, wie eine magische Kreatur, umgeben von dem zarten Duft nach Blumen und Beeren. Sie kennt die Kunst der Liebe, sie verzaubert, fasziniert und verführt. Sie kann weiblich und unterwürfig sein, oder überheblich und grausam. Die einzige Bedingung ist, dass sie nie ihre Maske fallen lässt und in aller Ruhe verschwindet, nichts als einen leichten Duft nach Blumen und Beeren hinterlassend.\n\n
    Für wen: das Parfum Elfe rouge ist ideal für eine Frau, die keine Angst vor Experimenten hat, für welche die Liebe eine sanfte Gefangenschaft, ein Spiel und ein Vergnügen ist. Das Geheimnis und die Intrige sind ihre Trümpfe.
    `
  },
];

const pathL = [
  {
    id: 1,
    name: "Главная",
    path: "/",
  },
  {
    id: 2,
    name: "Магазин",
    path: "/shop",
  },
];

const Shop = () => {
  return (
    <div className="shop-wrapper">
      <div className="shop">
        <h1>Магазин</h1>
        <div className="info"> 
          <TopPath path={pathL} />
        </div>
        <div className="aromas">
          {aromas.map((aroma) => (
            <div className="first-row__first-image" key={aroma.id}>
              <Link to={`${aroma.path}`}>
                <img src={aroma.imgs[0]} alt="" />
                <b>
                  <p>{aroma.name}</p>
                </b>
              </Link>
              <p>
                <strike style={{ color: "grey" }}>{aroma.prevPrice}</strike>
                <b> {aroma.price}</b>
              </p>
            </div>
          ))}
        </div>
        <div className="pages">
          <Link to="/shop">
            <button style={{ color: "white", background: "black" }}>1</button>
          </Link>
          <Link to="/shop/page/2">
            <button style={{ color: "black", background: "#EFEFEF" }}>2</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Shop;
