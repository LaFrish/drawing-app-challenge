import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { image_stamp } from '../actions/index';


class ImageStamp extends Component {
  constructor(props, handleImageUpload) {
    super(props, handleImageUpload);
    this.state = {file: '',imagePreviewUrl: 'http://i.imgur.com/RecH1bT.png'};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.types = ['image/png', 'image/jpg', 'image/gif', 'image/jpeg'];
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleImageUpload(e) {
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
  render(){
    let {imagePreviewUrl} = this.state;

    return (
      <div>
        <input
          type="file"
          className="fileInput"
          defaultValue={image_stamp}
          onChange={(e)=>this.handleImageUpload(e)} />

        <div className="imgPreview">
          <img id="imgSource" height="150" src={imagePreviewUrl} alt=''/>
        </div>
      </div>
    );
  }
}

ImageStamp.propTypes = {
  image_stamp: PropTypes.string.isRequired,
  handleImageUpload: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
  tool: state.eraser,
});

const mapDispatchToProps = (dispatch) => ({
  action: (tool) => dispatch(image_stamp(tool)),
});

const ImageStampContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ImageStamp);

export default ImageStampContainer;
