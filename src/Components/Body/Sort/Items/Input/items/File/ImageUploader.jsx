import React from 'react'
import { post } from 'axios';

export class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    {
      file: '',
      imagePreviewUrl: '',
      url: 'https://localhost:44383/Vieo/Image'
    };
  }

  _handleSubmit(e) {
    e.preventDefault();
    debugger
    const formData = new FormData();
    formData.append('body', this.state.file);
    
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
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

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div >
        <form onSubmit={(e) => this._handleSubmit(e)}>
          <input
            type="file"
            onChange={(e) => this._handleImageChange(e)} />
          <button
            type="submit"
            onClick={(e) => this._handleSubmit(e)}>Upload Image</button>
        </form>
        <div >
          {$imagePreview}
        </div>
      </div>
    )
  }
}
