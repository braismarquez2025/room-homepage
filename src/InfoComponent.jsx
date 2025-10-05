import imagenDark from "./assets/images/image-about-dark.jpg";
import imagenLight from "./assets/images/image-about-light.jpg";


export const InfoComponent = ({title, texto }) => {
    return (
        <section className="infoExtra">
            <div className="imgDark">
            <img src={imagenDark} alt="img-info" className="infoExtra_imgDark" />
            </div>

            <article className="infoExtra_article">
                <h3 className="infoExtra_article-title">{title}</h3>
                <p className="infoExtra_article-text text-preset-3-medium">{texto}</p>
            </article>

            <div className="imgLight">
            <img src={imagenLight} alt="img-light" className="infoExtra_imgLight"/>
            </div>
        </section>
    )
}