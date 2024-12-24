"use client";

import { getLocalStorageItem } from "@/utils/localstorage-manager";
import GoogleAuthComponent from "./logins/google";

const Header = () => {
    return (
        <div>
            <div className="flex items-center justify-between ">
                <div className="flex items-center">
                    HiveIt
                </div>
                <div className="flex items-center">
                    {
                        getLocalStorageItem('hiveit-google-user-auth') ? <></> : <GoogleAuthComponent />
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;

