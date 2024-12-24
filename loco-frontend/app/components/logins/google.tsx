import { setLocalStorageItem } from "@/utils/localstorage-manager";
import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";

const GoogleAuthComponent = () => {
    const router = useRouter();
    return (
        <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);

                // JSON.stringify(credentialResponse)

                //                 setLocalStorageItem('hiveit-google-user-auth', );

                //                 // Redirect to the main page
                //                 router.push('/pages/dashboard');
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    );
};

export default GoogleAuthComponent;