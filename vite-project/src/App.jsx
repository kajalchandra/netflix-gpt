
// import { getDatabase,ref,set } from 'firebase/database'
// import { app } from './utils/firebase'
import { Provider } from 'react-redux'
import './App.css'
import Body from './components/Body'
import appStore from './utils/appStore'
// import Signup from './components/SignUp';
// import SignIn from './components/SignIn';




// const db = getDatabase(app);

function App() {
// const putData = () => {
//     set(ref(db, "user/test"), {
//       id: 1,
//       name: "test firebase",
//       age: 25,
//     });
//   };


  return (
    <>
    <div>
      <Provider store={appStore}>
          <Body/>
      </Provider>
     
      {/* <button onClick={putData}>Click</button> */}
     {/* <Signup /> 
     <SignIn /> */}
      
    </div>
    </>
  )
}

export default App
