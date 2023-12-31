import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const SocialAuth = () => {
    const { googleSignIn, githubSignIn } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const savedUser = {name: result.user.displayName, email: result.user.email}
                if (result.user) {
                    fetch("http://localhost:4000/users", {
                        method: 'POST',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(savedUser),

                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.insertedId);
                        if(data.insertedId){
                            navigate("/")
                        }
                    })
                }
            })
    }

    const handleGitHubLogin = () => {
        githubSignIn()
            .then(result => {
                console.log(result.user);
                const savedUser = {name: result.user.displayName, email: result.user.email}
                if (result.user) {
                    fetch("http://localhost:4000/users", {
                        method: 'POST',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(savedUser),

                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if(data.insertedId){
                            navigate("/")
                        }
                    })
                }
            })
    }

    return (
        <div className='flex p-4 justify-between items-center'>
            <button onClick={handleGoogleLogin} className='w-[88px] h-[46px] bg-[whitesmoke] rounded-md flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6.18173 12.2128C6.18173 11.5642 6.28946 10.9423 6.48173 10.359L3.11627 7.78906C2.46037 9.12081 2.09082 10.6214 2.09082 12.2128C2.09082 13.8028 2.45991 15.3025 3.11491 16.6333L6.47855 14.0583C6.28809 13.4778 6.18173 12.8582 6.18173 12.2128Z" fill="#FBBC05" />
                    <path d="M12.0908 6.31216C13.4998 6.31216 14.7726 6.81145 15.7726 7.62847L18.6817 4.7235C16.9089 3.18024 14.6362 2.22705 12.0908 2.22705C8.13894 2.22705 4.74257 4.48702 3.11621 7.78915L6.48167 10.3591C7.25712 8.00521 9.46757 6.31216 12.0908 6.31216Z" fill="#EB4335" />
                    <path d="M12.0908 18.1136C9.46757 18.1136 7.25712 16.4206 6.48167 14.0667L3.11621 16.6362C4.74257 19.9388 8.13894 22.1987 12.0908 22.1987C14.5298 22.1987 16.8585 21.3327 18.6062 19.71L15.4117 17.2403C14.5103 17.8082 13.3753 18.1136 12.0908 18.1136Z" fill="#34A853" />
                    <path d="M21.6363 12.2128C21.6363 11.6227 21.5454 10.9873 21.409 10.3972H12.0908V14.2554H17.4545C17.1863 15.5708 16.4563 16.5821 15.4117 17.2402L18.6063 19.7099C20.4422 18.006 21.6363 15.4677 21.6363 12.2128Z" fill="#4285F4" />
                </svg>
            </button >
            <button onClick={handleGitHubLogin} className='w-[88px] h-[46px] bg-[whitesmoke] rounded-md flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.0006 1.50006C9.50778 1.5004 7.09642 2.3876 5.19784 4.00296C3.29926 5.61832 2.03731 7.85646 1.63774 10.317C1.23817 12.7776 1.72704 15.3 3.01691 17.4332C4.30677 19.5663 6.31348 21.1709 8.67806 21.9601C9.20306 22.0576 9.42806 21.7351 9.42806 21.4576C9.42806 21.1801 9.42806 20.5501 9.42806 19.6726C6.51056 20.3026 5.89556 18.2626 5.89556 18.2626C5.6904 17.6197 5.2586 17.0733 4.68056 16.7251C3.72806 16.0801 4.75556 16.0876 4.75556 16.0876C5.08827 16.1346 5.40583 16.257 5.684 16.4455C5.96216 16.6339 6.19358 16.8835 6.36056 17.1751C6.65107 17.6961 7.13662 18.0805 7.71044 18.2436C8.28426 18.4068 8.89938 18.3353 9.42056 18.0451C9.46291 17.5129 9.69751 17.0144 10.0806 16.6426C7.75556 16.3726 5.30306 15.4726 5.30306 11.4526C5.28606 10.4085 5.67298 9.39818 6.38306 8.63256C6.06166 7.72821 6.09924 6.73504 6.48806 5.85756C6.48806 5.85756 7.36556 5.57256 9.37556 6.93006C11.0942 6.46127 12.907 6.46127 14.6256 6.93006C16.6281 5.57256 17.5056 5.85756 17.5056 5.85756C17.8944 6.73504 17.932 7.72821 17.6106 8.63256C18.3206 9.39818 18.7076 10.4085 18.6906 11.4526C18.6906 15.4876 16.2381 16.3726 13.8981 16.6351C14.1487 16.8891 14.342 17.194 14.4649 17.5291C14.5878 17.8641 14.6375 18.2217 14.6106 18.5776C14.6106 19.9801 14.6106 21.1126 14.6106 21.4576C14.6106 21.8026 14.7981 22.0651 15.3606 21.9601C17.7283 21.17 19.737 19.5622 21.0267 17.4252C22.3164 15.2881 22.8025 12.7615 22.3981 10.2985C21.9936 7.8354 20.7249 5.597 18.8195 3.98464C16.9141 2.37228 14.4966 1.49144 12.0006 1.50006Z" fill="#212B36" />
                </svg>
            </button>
        </div>
    );
};

export default SocialAuth;