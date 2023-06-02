

function GalleryItem(props) {

const item = props.item;

    return (

        <div className="Box">

            <img src={item.path}/>
            <button>I Like This</button>
            <p>{item.likes} people like this!</p>

        </div>

    );



}

export default GalleryItem;
