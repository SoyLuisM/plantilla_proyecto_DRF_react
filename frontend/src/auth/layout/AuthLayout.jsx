import { useReloadScript } from "../hooks/useReloadScripts";



export const AuthLayout = ({children, message = "" }) => {
    useReloadScript('/js/scripts-init/carousel-slider.js');   
    useReloadScript('/js/vendors/carousel-slider.js');
 
    return (
    <>
        <div className="app-container app-theme-white body-tabs-shadow">
            <div className="app-container">
                <div className="h-100">
                    <div className="h-100 no-gutters row">
                        <div key={location.pathname} className="d-none d-lg-block col-lg-4">
                            <div className="slider-light">
                                <div className="slick-slider">
                                    <div>
                                        <div className="h-100 d-flex justify-content-center align-items-center bg-plum-plate" tabIndex={-1}>
                                            <div className="slide-img-bg" style={{ backgroundImage: "url('/images/city.jpg')" }}></div>
                                            <div className="slider-content"><h3>Perfect Balance</h3>
                                                <p>Kero is like a dream. Some think it's too good to be true! Extensive collection of unified React Boostrap Components and Elements.</p></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="h-100 d-flex justify-content-center align-items-center bg-premium-dark" tabIndex={-1}>
                                            <div className="slide-img-bg" style={{ backgroundImage: "url('/images/citynights.jpg')" }}></div>
                                            <div className="slider-content"><h3>Scalable, Modular, Consistent</h3>
                                                <p>Easily exclude the components you don't require. Lightweight, consistent Bootstrap based styles across all elements and components</p></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="h-100 d-flex justify-content-center align-items-center bg-sunny-morning" tabIndex={-1}>
                                            <div className="slide-img-bg" style={{ backgroundImage: "url('/images/citydark.jpg')" }}></div>
                                            <div className="slider-content"><h3>Complex, but lightweight</h3>
                                                <p>We've included a lot of components that cover almost all use cases for any type of application.</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-8">
                            <div className="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
                                
                                <h4 className="mb-0">
                                    <span className="d-block">Bienvenido</span>
                                    <span>Ingresa tus datos para {message}</span></h4>
                                    {children}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
