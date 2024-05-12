import fetcher from "./fetcher"

export const getDashboardAPI = async () => {
    try {
        const response = await fetcher.get("https://ap-southeast-1.quicksight.aws.amazon.com/embed/3d46f2fbcc3a4d789f9cf7c82d2c767c/dashboards/3d4f04a8-789d-4237-9d93-25a458a28311?code=AYABeErr17GHAGPR935T4O2JXqEAAAABAAdhd3Mta21zAFBhcm46YXdzOmttczphcC1zb3V0aGVhc3QtMTo5Nzc1ODQzODI4MTY6a2V5LzM1YTcwZDUzLTc3ZDAtNDA3MC05YTg1LWE4Yzg1ZjQwMzY2YQC4AQIBAHhDqgt7TFd8z372DH2I7seJ1IWSmXR2mGwc7gJKuVmIYwEEhQU8aTYVwCewzHkp-UQQAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMHjjsxRjlxwx24XPIAgEQgDs5X6yV_58H4RMnybAfjRcdgC9geJdqWk93qqe-nbHiNCJBp2vduPJfrM6i9MRz2jU4x5NpGv46Nm9U1AIAAAAADAAAEAAAAAAAAAAAAAAAAAAbqgSQo7K1H57tjk1YP9Mf_____wAAAAEAAAAAAAAAAAAAAAEAAACbTTsfpt6K0VIZ5fCV8f-V17w9RLBpUgKkkP0Hxvp7HZ5vxuY_Sy1JgcZ7qcbta8hOk9pGSSV6QwsNfrCUw9s9ku3ftJej86M69d0_azDlbbair0Z5lGoS-DH9ZKccveJBAT4P7GcPCwKIAhS7BquWZlgnMtOw4zVwJqaITSyfPviOkpC1KQJexPclR3DSTj82SWfRD84Mw14XGXkiFsqLVW70Xw9qSYwiT1Cb&identityprovider=quicksight&isauthcode=true")
        console.log("response: ", response)
        return response
    } catch(exception: any) {
        throw new Error(exception)
    } 
}