"use client"
// import DeviceList from "./components/devices/page";
import { GoogleLogin } from '@react-oauth/google';
// const SERVER_URI = "https://hiveit-444208.web.app";
export default function Landing() {
    return (
        <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    );
}
