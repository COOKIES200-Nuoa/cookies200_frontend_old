import React, { useEffect, useRef, useState } from "react";
import { getLocalStorage } from "../../helpers";
import { User } from "../../types";
// import { getDashboardAPI } from "../../api/dashboard.api";
// import { createEmbeddingContext } from "amazon-quicksight-embedding-sdk";

const defaultID = "ap-southeast-1:2f799fc9-3822-c45c-70c3-32aee5cf8a44"

const Home: React.FC = (): JSX.Element => {
    // const dashboardRef: any = useRef([]);
    // const [dashboardId, setDashboardId] = useState(defaultID);
    // const [embeddedDashboard, setEmbeddedDashboard] = useState<any>(null);
    // const [dashboardUrl, setDashboardUrl] = useState<String | null>(null);
    // const [embeddingContext, setEmbeddingContext] = useState<any>(null);

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         fetch("https://ap-southeast-1.quicksight.aws.amazon.com/embed/3d46f2fbcc3a4d789f9cf7c82d2c767c/dashboards/3d4f04a8-789d-4237-9d93-25a458a28311?code=AYABeErr17GHAGPR935T4O2JXqEAAAABAAdhd3Mta21zAFBhcm46YXdzOmttczphcC1zb3V0aGVhc3QtMTo5Nzc1ODQzODI4MTY6a2V5LzM1YTcwZDUzLTc3ZDAtNDA3MC05YTg1LWE4Yzg1ZjQwMzY2YQC4AQIBAHhDqgt7TFd8z372DH2I7seJ1IWSmXR2mGwc7gJKuVmIYwEEhQU8aTYVwCewzHkp-UQQAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMHjjsxRjlxwx24XPIAgEQgDs5X6yV_58H4RMnybAfjRcdgC9geJdqWk93qqe-nbHiNCJBp2vduPJfrM6i9MRz2jU4x5NpGv46Nm9U1AIAAAAADAAAEAAAAAAAAAAAAAAAAAAbqgSQo7K1H57tjk1YP9Mf_____wAAAAEAAAAAAAAAAAAAAAEAAACbTTsfpt6K0VIZ5fCV8f-V17w9RLBpUgKkkP0Hxvp7HZ5vxuY_Sy1JgcZ7qcbta8hOk9pGSSV6QwsNfrCUw9s9ku3ftJej86M69d0_azDlbbair0Z5lGoS-DH9ZKccveJBAT4P7GcPCwKIAhS7BquWZlgnMtOw4zVwJqaITSyfPviOkpC1KQJexPclR3DSTj82SWfRD84Mw14XGXkiFsqLVW70Xw9qSYwiT1Cb&identityprovider=quicksight&isauthcode=true")
    //             .then((response: any) => 
    //                 {
    //                     return response.json()
    //                 }
    //             )
    //             .then((response: any) => {
    //                 setDashboardUrl(response.EmbedUrl);
    //             });
    //     }, 10);
    //     return () => clearTimeout(timeout);
    // }, []);

    // const createContext = async () => {
    //     const context = await createEmbeddingContext();
    //     setEmbeddingContext(context);
    // };

    // useEffect(() => {
    //     if (dashboardUrl) {
    //         createContext();
    //     }
    // }, [dashboardUrl]);

    // useEffect(() => {
    //     if (embeddingContext) {
    //         embed();
    //     }
    // }, [embeddingContext]);

    // const embed = async () => {
    //     const options = {
    //         url: dashboardUrl,
    //         container: dashboardRef.current,
    //         height: "500px",
    //         width: "600px",
    //     };

    //     const newEmbeddedDashboard = await embeddingContext.embedDashboard(
    //         options
    //     );
    //     setEmbeddedDashboard(newEmbeddedDashboard);
    // };

    // useEffect(() => {
    //     if (embeddedDashboard) {
    //         embeddedDashboard.navigateToDashboard(dashboardId, {});
    //     }
    // }, [dashboardId]);

    // // const handleChangeBoard = async (e: { target: { value: any; }; }) => {
    // //     const dashboardId = e.target.value;
    // //     setDashboardId(dashboardId);
    // // };

    const userData = getLocalStorage<User | null>("LOGIN_USER")
    console.log("userData", userData)

    return (
        <div className="">
            <h1 className="font-bold text-red-900">Home</h1>
            <p>home content here...</p>

            <iframe className="w-full min-h-screen" src="https://ap-southeast-1.quicksight.aws.amazon.com/embed/b659797e05b344358ac1481ea72b8db6/dashboards/3d4f04a8-789d-4237-9d93-25a458a28311?code=AYABeGNGnB3ngFn_5msvYKufxgsAAAABAAdhd3Mta21zAFBhcm46YXdzOmttczphcC1zb3V0aGVhc3QtMTo5Nzc1ODQzODI4MTY6a2V5LzM1YTcwZDUzLTc3ZDAtNDA3MC05YTg1LWE4Yzg1ZjQwMzY2YQC4AQIBAHhDqgt7TFd8z372DH2I7seJ1IWSmXR2mGwc7gJKuVmIYwGPmN2vKa8Pi5aF1D1xP9p9AAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMUHCXxktSu7RzEkhUAgEQgDsFzP_4EjrhFuMy4Kfg9DCrKazD3S86mM15AcBFJULTEfiXkiMXFzfwzwjo4Es2Fwxwqpc7HgpIsimAvQIAAAAADAAAEAAAAAAAAAAAAAAAAACg0h_JP5SEaFjmOtNHZocR_____wAAAAEAAAAAAAAAAAAAAAEAAACbruQIpN2DyYr9EanAQuCCRg-s2UBbk2AJPabOj_BU2uidqTZSD-wyBGzV29UNFLi0NI4iGJvDDTgGTdkqobnOEOaLMDoZcLPvGomz2kWMJgNPFMpOvNx8PuwAPRK5iXSt6q_emTjqwwe5hjATRJRPhA2DFunWV8BzHVS6_q0vhgZCDCP5Vv6I8hajFsV-SgTArpWWumQUMfCvhO6syoK9R1x3TvT8f_I27sFS&identityprovider=quicksight&isauthcode=true" />
        </div>
    );
};

export default Home;
