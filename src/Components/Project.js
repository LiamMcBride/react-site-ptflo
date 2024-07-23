import './Project.css'
import { Header2, Header5 } from './Text';
import {useState} from 'react'
import CategoryTag from './Tag';

export function ProjectFull({pj, onClose}) {
    return (
        <div className="project-full-background">
            <div className="project-full">
                <Header2>{pj.title}</Header2>
                <img alt="change" src={process.env.PUBLIC_URL + '/Assets/' + pj.image} />
                <button onClick={onClose}>close</button>
            </div>
        </div>
    )
}


//TODO: fix alt text
function Project({pj, onProjectClick}) {
    const [hovered, setHovered] = useState(false)

    const HoverScreen = () => {
        return (
            <div className="hover-screen">
                {pj.tags.frameworks.map((fm, i) => <CategoryTag key={i}>{fm}</CategoryTag>)}
                {pj.tags.languages.map((fm, i) => <CategoryTag key={i}>{fm}</CategoryTag>)}
            </div>
        )
    }

    return (
        <button onClick={() => {onProjectClick(); setHovered(false)}} className="project" onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Header5>{pj.title}</Header5>
            <br></br>
            <img alt="change" src={process.env.PUBLIC_URL + '/Assets/' + pj.image} />
            {hovered ? <HoverScreen /> : null}
        </button>
    );
}

export default Project;