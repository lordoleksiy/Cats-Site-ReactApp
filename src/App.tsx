import './App.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./AppRouter.tsx";
import {Provider} from "react-redux";
import store from "./store.ts";
function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
)
}

export default App;
