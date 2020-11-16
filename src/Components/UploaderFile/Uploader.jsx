import React from 'react';
import { post } from 'axios';

class Fileupload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: ''
        };
    }

    async submit(e) {

        e.preventDefault();
      
        let url = `https://localhost:44351/api/DisciplineDBs/PostUploadFiles`;
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
    render() {
        return (
            <div className="container-fluid">
                <form onSubmit={e => this.submit(e)}>                    
                    <input type="file" onChange={e => this.setFile(e)} />
                    <button className="btn btn-primary" type="submit">Upload</button>
                </form>
            </div>
        )
    }
}
export default Fileupload    