import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import LoadingScreen from '../components/layout/LoadingScreen';

const Home = lazy(() => import('../pages/Home'));
const Initiatives = lazy(() => import('../pages/Initiatives'));
const Transparency = lazy(() => import('../pages/Transparency'));
const Services = lazy(() => import('../pages/Services'));
const Connect = lazy(() => import('../pages/Connect'));
const NotFound = lazy(() => import('../pages/NotFound'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="initiatives" element={<Initiatives />} />
          <Route path="transparency" element={<Transparency />} />
          <Route path="services" element={<Services />} />
          <Route path="connect" element={<Connect />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}