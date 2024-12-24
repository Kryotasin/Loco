"use client";


const GoogleSignInRedirectionPage = () => {

    // Fetch URL params
    const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams.toString())

    return (
        <div>
            <h1>Google Sign-In Success</h1>
            <p>Redirecting to the main page...</p>
        </div>
    );
};

export default GoogleSignInRedirectionPage;