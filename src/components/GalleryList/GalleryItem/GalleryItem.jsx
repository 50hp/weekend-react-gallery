

function GalleryItem(props) {
const putLikes = props.putLikes;
const item = props.item;

    return (

        <div className="Box">

            <img src={item.path}/>
            <button onClick={()=> putLikes(item.id)}>I Like This</button>
            <p>{item.likes} people like this!</p>

        </div>

    );



}

export default GalleryItem;
