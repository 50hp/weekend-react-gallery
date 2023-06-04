import {useState} from 'react';


function InputForm({addPic}) {
    
    const [file, setFile] = useState();
    const [picDescription, setPicDescription] = useState('');

    let pic = {};
    const handleSubmit = (event) => {
        console.log(file);
        event.preventDefault();

        if (file && picDescription){
            pic ={
                file: file,
                description: picDescription,
            }

            addPic(pic);


        }else{
            alert('all imputs must have a value');
            return;
        }
        
        setFile();
        setPicDescription('');



    }
//-add input validation for urls
    return (

        <div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className ='urlInput '>
                <label htmlFor="fileInput">Picture:  </label>
                <input className ='input'id="fileInput"
                       filename={file}
                       type="file"
                       accept="image/png, image/jpeg"
                       onChange={e => setFile(e.target.files)}/>
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
