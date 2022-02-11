
import * as React from "react"; 
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import UploadFile from './pages/Upload';
import Detalhe from './pages/Detalhe';

export default function Routes() {
  return (
    <Router>
     <Route exact path="/Upload" component={UploadFile} />  
     <Route exact path="/Detalhe" component={Detalhe} /> 
    </Router>
  );
}
