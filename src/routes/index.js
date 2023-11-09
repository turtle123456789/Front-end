import AdminPage from "../pages/AdminPage/AdminPage";
import CartPage from "../pages/CartPage/CartPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import SigninPage from "../pages/SigninPage/SigninPage";

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
        path: '/CartPage',
        page: CartPage,
        isShowHeader: true
    },
    {
        path: '/Signin',
        page: SigninPage,
        isShowHeader: true
    },
    {
        path: '/Register',
        page: RegistrationPage,
        isShowHeader: true
    },
    {
        path: '/profile-user',
        page: ProfilePage,
        isShowHeader: true
    },
    {
        path: '/system/admin',
        page: AdminPage,
        isShowHeader: false,
        isPrivate: true
    },
    
    {
        path: '*',
        page: NotFoundPage
    }
]
