import { authRoutes, appRoutes } from '@/routes';
import type { AppRoute } from '@/types/props';
import { Route, Routes } from 'react-router-dom';
import Layout from '@/layouts/index';


const Routing = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                {
                    appRoutes.map(({ title, path, element }: AppRoute, index: number) => (
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