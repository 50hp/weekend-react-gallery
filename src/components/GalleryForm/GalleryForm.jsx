import {useState} from 'react';


function InputForm({addPic}) {
    
    const [picURL, setPicURL] = useState('');
    const [picDescription, setPicDescription] = useState('');

    let pic = {};
    const handleSubmit = (event) => {

        event.preventDefault();

        if (picURL && picDescription){
            pic ={
                url: picURL,
                description: picDescription,
            }

            addPic(pic);


        }else{
            alert('all imputs must have a value');
            return;
        }
        
        setPicURL('');
        setPicDescription('');



    }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <div className ='urlInput '>
                <label htmlFor="urlInput">Name:  </label>
                <input className ='input'id="urlInput"
                       value = {picURL}
                       onChange={e => setPicURL(e.target.value)}/>
                      </div>
                <div className='description'>
                <label htmlFor="descriptionInput">Description:</label>
                <input className='input-2'id="descriptionInput"
                       value = {picDescription}
                       onChange={e => setPicDescription(e.target.value)}/>
                    </div>
                
                <button type="submit">Add Picture</button>
            </form> 
        </div>
    );

}

export default InputForm;
