import fullStar from '../image/star filled.png';
import emptyStar from '../image/star empty.png';
import '../styles/star.scss';


function Star({ stars }) {
    const range = [1, 2, 3, 4, 5];

    return (
        <div className="star-list">
            {range.map((rangeElem, star) =>
                stars >= rangeElem ? (
                    <img
                        src={fullStar}
                        alt="pink star"
                        key={star}
                        className="star"
                    />
                ) : (
                    <img
                        src={emptyStar}
                        alt="grey star"
                        key={star}
                        className="star"
                    />
                )
            )}
        </div>
    );
}


export default Star;