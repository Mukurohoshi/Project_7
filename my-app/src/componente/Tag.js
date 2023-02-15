import '../styles/tag.scss';


function Tag({ tags }) {
    return (
        <ul className="tag-list">
            {tags.map((tag) => (
                <li key={tag} className="tag-element">
                    {tag}
                </li>
            ))}
        </ul>
    );
}


export default Tag;