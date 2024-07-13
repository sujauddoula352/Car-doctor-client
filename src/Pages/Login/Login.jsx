import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import login from "../../../public/assets/images/login/login.svg"
import { faFacebook, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={login} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleLogin}>
                        <h1 className="text-3xl text-center font-bold mt-3">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required name="password" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className="flex flex-col items-center space-y-3">
                        <p>Or Sing with</p>
                        <div className="pb-4">
                            <FontAwesomeIcon icon={faFacebook} size="2x" className="text-blue-600 cursor-pointer mr-4" />
                            <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-blue-600 cursor-pointer mr-4" />
                            <FontAwesomeIcon icon={faGoogle} size="2x" className=" cursor-pointer" />
                        </div>
                        <p className="pb-7">Have an accounts ? <Link to="/singUp" className="text-red-500 font-semibold"> Sing Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;