import './Project.css'
import { Header5 } from './Text';
import {useState} from 'react'
import CategoryTag from './Tag';


//TODO: fix alt text
function Project({pj}) {
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
        <button className="project" onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Header5>{pj.title}</Header5>
            <br></br>
            <img alt="change" src={process.env.PUBLIC_URL + '/Assets/' + pj.image} />
            {hovered ? <HoverScreen /> : null}
        </button>
    );
}

export default Project;