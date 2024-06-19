// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )



import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Provider } from 'react-redux'
// import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage.jsx'
import AddVendors from './components/Vendor/AddVendors.jsx'
import ServicesPageCustomePage from './components/ServicesPage/ServicesPageCustomePage.jsx'
import HomePageAbout from './components/HomePage/HomePageAbout.jsx'
import TeamsPage from './components/HomePage/TeamsPage.jsx'
import Contact from './components/HomePage/Contact.jsx'
// import Home from './pages/Home.jsx'
// import { AuthLayout, Login } from './components/index.js'


// import AddPost from "./pages/AddPost";
// import Signup from './pages/Signup'
// import EditPost from "./pages/EditPost";

// import Post from "./pages/Post";

// import AllPosts from "./pages/AllPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <HomePage />,
        },
        
        {
            path: "/service/:data1",
            element: <ServicesPageCustomePage />,
            // children:
            // [
            //   {
            //   path: "/addVendors",
            //   element: <AddVendors />,
            //   },
            // ],
        },
        {
            path: "/about",
            element: <HomePageAbout />,
        },
        {
            path: "/teams",
            element: <TeamsPage />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        // {
        //     path: "/login",
        //     element: (
        //         <AuthLayout authentication={false}>
        //             <Login />
        //         </AuthLayout>
        //     ),
        // },
        // {
        //     path: "/signup",
        //     element: (
        //         <AuthLayout authentication={false}>
        //             <Signup />
        //         </AuthLayout>
        //     ),
        // },
        // {
        //     path: "/all-posts",
        //     element: (
        //         <AuthLayout authentication>
        //             {" "}
        //             <AllPosts />
        //         </AuthLayout>
        //     ),
        // },
        // {
        //     path: "/add-post",
        //     element: (
        //         <AuthLayout authentication>
        //             {" "}
        //             <AddPost />
        //         </AuthLayout>
        //     ),
        // },
        // {
        //     path: "/edit-post/:slug",
        //     element: (
        //         <AuthLayout authentication>
        //             {" "}
        //             <EditPost />
        //         </AuthLayout>
        //     ),
        // },
        // {
        //     path: "/post/:slug",
        //     element: <Post />,
        // },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <RouterProvider router={router}/>
    {/* </Provider> */}
  </React.StrictMode>,
)
