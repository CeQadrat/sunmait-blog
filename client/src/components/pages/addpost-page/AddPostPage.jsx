import * as React from 'react';
import '../../../assets/styles/HomePage.less';
<<<<<<< HEAD
import Header from 'components/common/header/Header.jsx';
=======
import Header from 'components/common/header/index.jsx';
>>>>>>> 82362fe... new structure
import Post from 'components/common/post/index.jsx';
import Footer from 'components/common/footer/index.jsx';

class AddPostPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      auth: false,
    };
  }

  render() {
    return (
      <div className="main">
        <Header auth={this.state.auth} />
        <div className="content">
          <div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AddPostPage;