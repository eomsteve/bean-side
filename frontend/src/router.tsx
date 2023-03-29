import { createBrowserRouter } from 'react-router-dom';
import { Router as RemixRouter } from '@remix-run/router/dist/router';
import MobileLayout from './layout/MobileLayout';
import { HomePage } from './pages/Home';
import { SplitBill } from './pages/Bills';
import { ResultPage } from './pages/Result';

interface pageData {
  id: number;
  pageLabel: string;
  path: string;
  element: React.ReactNode;
}

const pageMap: pageData[] = [
  {
    id: 0,
    pageLabel: '홈페이지',
    path: '/',
    element: <HomePage />,
  },
  {
    id: 1,
    pageLabel: '정산페이지',
    path: '/tempSplitPage',
    element: <SplitBill />,
  },
  {
    id: 2,
    pageLabel: '결과페이지',
    path: '/result',
    element: <ResultPage />,
  },
];

export const routers: RemixRouter = createBrowserRouter(
  pageMap.map((page) => {
    return {
      path: page.path,
      element: <MobileLayout>{page.element}</MobileLayout>,
    };
  })
);
