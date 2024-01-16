import "./footer.css"
import { WebSiteButton } from "../button/button"
import { SendEmailButton } from "../button/button"
import facebook_icon from "../../assets/images/facebook.png"
import linkedin_icon from "../../assets/images/linkedin.png"
import twitter_icon from "../../assets/images/twitter.png"
import { useState } from "react"
export function Footer() {
    const [Object, setObject] = useState("")
    return(
        <footer className="footer">
            <div className="about">
                <span>À Propos</span>
                    <div>Engagés dans la promotion durable des ressources naturelles malgaches, l'OMNIS façonne
                        l'avenir énergétique et minier du pays avec efficacité, professionnalisme, et un engagement
                        indéfectible envers l'éthique.
                    </div>
            </div>
            <div className="website">
                <span className="website-span">Site Web</span>
                <div className="website-div">
                    Découvrez davantage sur l'OMNIS. Cliquez pour explorer notre site web.
                </div>
                <a href="https://omnis.mg/" className="website-a">
                        <WebSiteButton />
                </a>
            </div>
            <div className="media">
                <span className="media-span">Réseaux Sociaux</span>
                <div className="email">
                    <input type="text" placeholder="Votre objet ..." className="email-input" value={Object} onChange={(e)=> setObject(e.target.value)}/>
                    <a href={`mailto:communication@omnis.mg?subject=${Object}`}>
                        <SendEmailButton />
                    </a>
                </div>
                <div className="social-media">
                    <a href="https://www.facebook.com/OmnisMadagascar/" className="social-media-facebook">
                        <img src={facebook_icon} alt="facebook icon" />
                        <span>Facebook</span>
                    </a>
                    <a href="https://www.linkedin.com/company/omnismg" className="social-media-linkedin">
                        <img src={linkedin_icon} alt="linkedin icon" />
                        <span>Linkedin</span>
                    </a>
                    <a href="https://twitter.com/OmnisMadagascar" className="social-media-twitter">
                        <img src={twitter_icon} alt="twitter icon" />
                        <span>Twitter</span>
                    </a>
                </div>
            </div>
            <span className="copyright">© Copyright OMNIS 2024</span>
        </footer>
    )
}