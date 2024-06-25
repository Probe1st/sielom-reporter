import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";

function Router({ authorized }) {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/add"} />} />

            {/* публичные пути */}
            {publicRoutes.map((routeObj) => (
                <Route
                    key={routeObj.path}
                    path={routeObj.path}
                    element={routeObj.element}
                />
            ))}

            {/* приватные пути */}
            {authorized &&
                privateRoutes.map((routeObj) => (
                    <Route
                        key={routeObj.path}
                        path={routeObj.path}
                        element={routeObj.element}
                    />
                ))}

            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
}

function NoMatch() {
    return <div>Page not found. 404</div>;
}

export default Router;
