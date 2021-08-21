import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Index from './views/index/index';
import './App.css'
import Nav from './nav';
import Blogs from './views/blogs';
import Blog from './views/blog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
 
function App() {
 
  return (
    <div>
      <Router>
        <div>
            <Nav></Nav>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
            </Route>
            <Route path="/blog">
               <Blog    ></Blog>
            </Route>
            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route path="/">
              <Index></Index>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
