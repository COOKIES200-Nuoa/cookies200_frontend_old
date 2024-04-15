import React from "react";
import useRouteElements from "./routes/useRouteElements";

const App: React.FC = (): JSX.Element => {
    const elements = useRouteElements()
    
    return (
        <>
            {elements}
        </>
    )
};

export default App;
