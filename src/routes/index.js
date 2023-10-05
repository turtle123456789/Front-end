import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OderPage from "../pages/OderPage/OderPage";
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
        path: '/Oder',
        page: OderPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage
    }
]
