import { authRoutes, homeRoutes } from '@/routes';
import type { AppRoute } from '@/types/props';
import { Route, Routes } from 'react-router-dom';
import Layout from '@/layouts/index';


const Routing = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                {
                    homeRoutes.map(({ title, path, element }: AppRoute, index: number) => (
                        <Route key={title + index} path={path} element={element} />
                    ))
                }
            </Route>

            {
                authRoutes.map(({ title, path, element }: AppRoute, index: number) => {
                    return <Route key={title + index} path={path} element={element} />;
                })
            }

        </Routes>
    )
}


export default Routing;