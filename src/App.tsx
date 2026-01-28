import React, { Suspense } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router';

import './App.css';

// import Home from './pages/Home';
// import ProductDetail from './pages/ProductDetail';
// import Cart from './pages/Cart';
// import Order from './pages/Order';
// import NotFound from './pages/NotFound';
// import ConcertsHome from './pages/concerts/ConcertsHome';
// import City from './pages/concerts/City';
// import Trending from './pages/concerts/Trending';

// 코드 분할 - Code Spliting
const Home = React.lazy(() => import('@/pages/Home'));
const ProductDetail = React.lazy(() => import('@/pages/ProductDetail'));
const Cart = React.lazy(() => import('@/pages/Cart'));
const Order = React.lazy(() => import('@/pages/Order'));
const NotFound = React.lazy(() => import('@/pages/NotFound'));
const ConcertsHome = React.lazy(() => import('@/pages/concerts/ConcertsHome'));
const City = React.lazy(() => import('@/pages/concerts/City'));
const Trending = React.lazy(() => import('@/pages/concerts/Trending'));
//
const UseCallbackPage = React.lazy(() => import('@/pages/UseCallbackPage'));
const UseMemoPage = React.lazy(() => import('@/pages/UseMemoPage'));
const ConditionPage = React.lazy(() => import('@/pages/ConditionPage'));
const UseEffectPage = React.lazy(() => import('@/pages/UseEffectPage'));
const UserListPage = React.lazy(() => import('@/pages/UserListPage'));
const ContextPage = React.lazy(() => import('@/pages/ContextPage'));
const ThemeAppPage = React.lazy(() => import('@/pages/ThemeAppPage'));
const CssPage = React.lazy(() => import('@/pages/CssPage'));
const TailwindCssPage = React.lazy(() => import('@/pages/TailwindCssPage'));
const EventPage = React.lazy(() => import('@/pages/EventPage'));
const KeyPage = React.lazy(() => import('@/pages/KeyPage'));
const ProductsPage = React.lazy(() => import('@/pages/ProductsPage'));
const CustomHookPage = React.lazy(() => import('@/pages/CustomHookPage'));
const UseLocalStoragePage = React.lazy(() => import('@/pages/UseLocalStoragePage'));
const GenericTypePage = React.lazy(() => import('@/pages/GenericTypePage'));
const UseTogglePage = React.lazy(() => import('@/pages/UseTogglePage'));
const UseDebouncePage = React.lazy(() => import('@/pages/UseDebouncePage'));
const UseFetchPage = React.lazy(() => import('@/pages/UseFetchPage'));
const UseHookFlowPage = React.lazy(() => import('@/pages/UseHookFlowPage'));
const ShoppingPage = React.lazy(() => import('@/pages/ShoppingPage'));
const AxiosPage = React.lazy(() => import('@/pages/AxiosPage'));
const FormPage = React.lazy(() => import('@/pages/FormPage'));
const TanstackQueryPage = React.lazy(() => import('@/pages/TanstackQueryPage'));

function App() {
  return (
    <BrowserRouter basename="/my-react-app">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="product-detail" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
          <Route path="concerts">
            <Route index element={<ConcertsHome />} />
            <Route path=":city" element={<City />} />
            <Route path="trending" element={<Trending />} />
          </Route>
          <Route path="use-callback" element={<UseCallbackPage />} />
          <Route path="use-memo" element={<UseMemoPage />} />
          <Route path="condition" element={<ConditionPage />} />
          <Route path="use-effect" element={<UseEffectPage />} />
          <Route path="user-list" element={<UserListPage />} />
          <Route path="context-page" element={<ContextPage />} />
          <Route path="theme-app" element={<ThemeAppPage />} />
          <Route path="css" element={<CssPage />} />
          <Route path="tailwind" element={<TailwindCssPage />} />
          <Route path="event" element={<EventPage />} />
          <Route path="key" element={<KeyPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="custom-hook" element={<CustomHookPage />} />
          <Route path="use-local-storage" element={<UseLocalStoragePage />} />
          <Route path="generic-type" element={<GenericTypePage />} />
          <Route path="use-toggle" element={<UseTogglePage />} />
          <Route path="use-debounce" element={<UseDebouncePage />} />
          <Route path="use-fetch" element={<UseFetchPage />} />
          <Route path="use-flow" element={<UseHookFlowPage />} />
          <Route path="shopping" element={<ShoppingPage />} />
          <Route path="axios" element={<AxiosPage />} />
          <Route path="form" element={<FormPage />} />
          <Route path="tanstack-query" element={<TanstackQueryPage />} />
          {/* 404 Error */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
