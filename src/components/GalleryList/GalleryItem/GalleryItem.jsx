import {useState} from 'react';

function GalleryItem(props) {
    const putLikes = props.putLikes;
    const item = props.item;

    const [toggle, setToggle] = useState(0);
    const swappToggle = () => {
            if (toggle === 0){
                setToggle(1);    
            }else {
                setToggle(0);
            }


    }
    return (

        <div className="Box">
            <div className="pic" onClick={()=> swappToggle()}>
            {(toggle===0) ? (

                    <img src={item.path}/>

            ):(

                    <p>{item.description}</p>

            )}




            </div>

            <button onClick={()=> putLikes(item.id)}>I Like This</button>
            <p>{item.likes} people like this!</p>

        </div>

    );



}

export default GalleryItem;
