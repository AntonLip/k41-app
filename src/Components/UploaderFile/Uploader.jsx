import React from 'react';
import { post } from 'axios';
import { uploadFilePlan } from '../../API/DisciplineAPI';

class Fileupload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            type: ''
        };
    }

    async submit(e) {
        debugger
        e.preventDefault();
      
        let url = `https://localhost:44351/api/DisciplineDBs/uploadfile?id=0F3FF685-05A4-40DF-35BF-08D88A5CCB61`;
        const formData = new FormData();
        formData.append('body', this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        return post(url, formData, config).then(responce => {            
            return responce.data
        }).catch((error)=>{
            console.log("upload files error");
            alert(error.message);
         });
    }

    setFile(e) {
        this.setState({ file: e.target.files[0] });
    }
    setType(e) {        
        this.setState({ type: e.target.value});
    }
    render() {
        return (
            <div className="container-fluid">
                <form onSubmit={e => this.submit(e)}>
                    <input type="file" onChange={e => this.setFile(e)} />
                    <select onChange={e => this.setType(e)} >
                        <option value={"none"}>none</option>
                        <option value={"plan"}>plan</option>
                        <option value={"gpid"}>gpid</option>
                    </select>
                    <button className="btn btn-primary" type="submit">Upload</button>
                </form>
            </div>
        )
    }
}
export default Fileupload    