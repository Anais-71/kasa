import background from "../../assets/bg_about.png"
import Dropdown from "../../components/dropdown/Dropdown"

//CSS
import './about.css'

function About() {
    //Dropdown values
    const items1 = ['Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'];
    const items2 = ['La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'];
    const items3 = ['La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'];
    const items4 = ["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domlestique pour nos hôtes."];
  
    return (
        <div className="about">
        <div className='about__banner'>
            <div className="about__banner--overlay">
             </div>
            <img src={background} alt="chaîne de montagne entourant un lac" className="about__banner--img"></img>
        </div>

        <div className='about__dropdowns'>
            <Dropdown title="Fiabilité" items={items1} />
            <Dropdown title="Respect" items={items2} />
            <Dropdown title="Service" items={items3} />
            <Dropdown title="Sécurité" items={items4} />
        </div>
        </div>
    )
}

export default About