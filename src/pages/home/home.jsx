import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { SeeMore } from "../../components/button/button";
import './home.css';

const salles = [
    {
      id: 1,
      description: "Salle spacieuse avec vue panoramique",
      lieu: "Itaosy",
      capacite: 15,
      image: "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZSUyMHJvb218ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      description: "Salle élégante avec équipement audio haut de gamme",
      lieu: "Mahamasina",
      capacite: 7,
      image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uZmVyZW5jZSUyMHJvb218ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      description: "Salle de réunion moderne avec tableau interactif",
      lieu: "Ankorondrano",
      capacite: 14,
      image: "https://images.unsplash.com/photo-1570126646281-5ec88111777f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uZmVyZW5jZSUyMHJvb218ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      description: "Salle de conférence avec sièges confortables",
      lieu: "Andraharo",
      capacite: 18,
      image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29uZmVyZW5jZSUyMHJvb218ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      description: "Salle polyvalente pour divers types d'événements",
      lieu: "Ankatso",
      capacite: 20,
      image: "https://images.unsplash.com/photo-1503423571797-2d2bb372094a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbmZlcmVuY2UlMjByb29tfGVufDB8fDB8fHww",
    },
  ];
  

export function Home(){
    return(
        <div className="home">
            <Header header={true}/>

            <div className="home-body">
                <div className="home-text">
                    <span className="home-body-span-1">Découvrez des espaces de conférence spacieux pour accueillir votre événement !</span> <br />
                    <div className="home-body-span-2">Trouvez la salle parfaite pour votre conférence parmi nos espaces spacieux et équipés des dernières technologies pour assurer le succès de votre événement. Que ce soit une réunion d'équipe dynamique ou une conférence d'envergure, nous avons l'endroit idéal qui répond à vos besoins. Commencez dès maintenant à planifier votre prochain événement mémorable.</div>
                </div>
                <ListRoomHome />
            </div>

            <Footer />
        </div>
    )
}

function ListRoomHome(){
    return(
        <div className="home-list-Room">

            {salles.map((item, index)=>
            
            <div className="home-list-Room-item">
                <div className="home-list-Room-description">
                    <div className="home-list-Room-title">
                        Salle {index<9 ? `0${index+1}`: index+1}
                    </div>

                    <div className="home-list-Room-text">
                        Explorez notre salle raffinée située à <b>{item.lieu}</b>,
                        conçue pour accueillir confortablement jusqu'à <b>{item.capacite}</b> participants. 
                    </div>

                    <div className="home-list-Room-btn">
                        <SeeMore />
                    </div>
                </div>
                <div className="home-list-Room-image">
                    <img src={item.image} alt="Conference Room" />
                </div>
            </div>
            
            )}
        </div>
    )
}