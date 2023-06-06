import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { useState, useEffect } from 'react';
import Home from './components/Home.jsx';
import axios from 'axios';
import Dashboard from './components/Dashboard.jsx';
import { useSetRecoilState } from 'recoil';
import { devAuthState } from './recoil_state.js';

const code = new URLSearchParams(window.location.search).get('code');
function App() {


  
  return code ? <Dashboard code={code}/> : <Home />
}

export default App
