"use client";

import { jwtExpired } from "@/utils/jwt";
import { getLocalStorageItem } from "@/utils/localstorage-manager";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    // Check via localstorage service if user google data is present
    const user = getLocalStorageItem('hiveit-google-user-auth')

    console.log(jwtExpired(JSON.stringify(user)))

    if (user && Object.keys(user).length > 0) {
      // router.push('/pages/dashboard')
    }
    else {
      // router.push('/pages/landing')
    }
  }, []);


  return (
    <div>
      Checking user...
    </div>
  );
}