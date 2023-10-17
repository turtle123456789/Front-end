import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OderPage from "../pages/OderPage/OderPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/Products',
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path: '/ProductDetails/:productId', // Use a dynamic route parameter
        page: ProductDetailsPage,
        isShowHeader: true
    },
    {
        path: '/Oder',
        page: OderPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage
    }
]
