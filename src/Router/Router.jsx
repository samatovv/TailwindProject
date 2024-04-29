import { createBrowserRouter } from 'react-router-dom'
import PokupatelPage from '../pages/PokupatelPage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'
import Layout from '../Components/Layout/Layout.jsx'
import DostavkaPage from '../pages/DostavkaPage.jsx'
import KatalogPage from '../pages/KatalogPage.jsx'
import ModelPage from '../pages/ModelPage.jsx'
import OnasPage from '../pages/OnasPage.jsx'
import Bedroom from '../Components/Bedroom.jsx/Bedroom.jsx'
import '../index.css'
import ProductPage from '../pages/ProductsPage.jsx'

export const router = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    errorElement: <NotFoundPage />,
    children: [
        {
            path: "/",
            element: <ProductPage/>
        },
        {
            path: "/dostavka",
            element: <DostavkaPage />
        },
        {
            path: "/katalog",
            element: <KatalogPage />
        },
        {
            path: "/model",
            element: <ModelPage/>
        },
        {
            path: "/onas",
            element: <OnasPage />
        },
        {
            path: "/pokupatel",
            element: <PokupatelPage />
        },
        {
            path:"/bedroom",
            element:<Bedroom/>
        }
    ]
},
    // {
    //   path: "/profiles",
    //   element: <HeaderPage />,
    //   children: [
    //     {
    //       path: '/profiles/:profileId',
    //       element: <ProfilePage />,
    //     }
    //   ]
    // },
]);