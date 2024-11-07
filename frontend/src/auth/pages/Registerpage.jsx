import { Link } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const Registerpage = () => {
  return (
    <>
      <AuthLayout message="crear una cuenta">
        <div>
          <form className="">
              <div className="form-row">
                  <div className="col-md-6">
                      <div className="position-relative form-group"><label htmlFor="exampleEmail" className=""><span className="text-danger">*</span> Email</label><input name="email" id="exampleEmail" placeholder="Email here..." type="email"
                                                                                                                                                          className="form-control"/></div>
                  </div>
                  <div className="col-md-6">
                      <div className="position-relative form-group"><label htmlFor="exampleName" className="">Name</label><input name="text" id="exampleName" placeholder="Name here..." type="text" className="form-control"/></div>
                  </div>
                  <div className="col-md-6">
                      <div className="position-relative form-group"><label htmlFor="examplePassword" className=""><span className="text-danger">*</span> Password</label><input name="password" id="examplePassword" placeholder="Password here..."
                                                                                                                                                                type="password" className="form-control"/></div>
                  </div>
                  <div className="col-md-6">
                      <div className="position-relative form-group"><label htmlFor="examplePasswordRep" className=""><span className="text-danger">*</span> Repeat Password</label><input name="passwordrep" id="examplePasswordRep"
                                                                                                                                                                          placeholder="Repeat Password here..." type="password"
                                                                                                                                                                          className="form-control"/></div>
                  </div>
              </div>
              
              <div className="mt-4 d-flex align-items-center"><h5 className="mb-0">Ya tienes uan cuenta? <Link to={"/auth/login"} className="text-primary"> Inicia sesion </Link> </h5>
                  <div className="ml-auto">
                      <button className="btn-wide btn-pill btn-shadow btn-hover-shine btn btn-primary btn-lg">Crear una cuenta</button>
                  </div>
              </div>
          </form>
        </div>
      </AuthLayout>
    </>
  )
}
