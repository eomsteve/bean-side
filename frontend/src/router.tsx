import { createBrowserRouter } from 'react-router-dom';
import { Router as RemixRouter } from '@remix-run/router/dist/router';
import { HomePage } from './pages/Home';
import { SplitBill } from './pages/SplitBill';
import { ResultPage } from './pages/Result';

export const routers : RemixRouter = createBrowserRouter();