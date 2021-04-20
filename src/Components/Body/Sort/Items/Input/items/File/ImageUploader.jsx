import React from 'react'
import { post } from 'axios';

export class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    {
      file: '',
      url: 'https://localhost:44383/Vieo/addvideo',
      title: 'Загрузить'
    };
    
   
  }
  componentDidMount(){
    if(this.props.url != undefined)
    {
      this.setState({
        url: this.props.url
      })
    }
    if(this.props.title != undefined)
    {
      this.setState({title: this.props.title})
    }   
  }

  _handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('body', this.state.file);
    
    const config = {
      headers: {
      },
    };
    return post(this.state.url, formData, config).then(responce => {
      console.log("upload files success");
      return responce.data
    }).catch((error) => {
      console.log("upload files error");
      alert(error.message);
    });
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    console.log(file)

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this._handleSubmit(e)}>
          <input
            type="file"
            onChange={(e) => this._handleImageChange(e)} />
          <button
            type="submit"
            onClick={(e) => this._handleSubmit(e)}>{this.state.title}</button>
        </form>
      </div>
    )
  }
}
