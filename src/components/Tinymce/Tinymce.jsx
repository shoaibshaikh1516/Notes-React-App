import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import ReactDOM from 'react-dom';

class Tinymce extends React.Component {
  handleEditorChange = e => {
    console.log('Content was updated:', e.target.getContent());
  };

  render() {
    return (
      <Editor
        // apiKey="2edmaulpnq9gkukbofns3y3ifatfo0yemunty0b62sns25n6"
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          plugins: 'link image code',
          toolbar:
            'undo redo | bold italic | alignleft aligncenter alignright | code',
        }}
        onChange={this.handleEditorChange}
      />
    );
  }
}

export default Tinymce;
