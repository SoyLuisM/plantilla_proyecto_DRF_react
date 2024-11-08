import { Link } from "react-router-dom"

export const DashboardLayout = ({children}) => {
  return (
    <>
      <div className="app-container app-theme-gray app-sidebar-full body-subnav-pills">
        <div className="app-main">
          <div className="app-sidebar-wrapper">
                <div className="app-sidebar sidebar-shadow">
                    <div className="app-header__logo">
                        <Link to="#" data-toggle="tooltip" data-placement="bottom" title="KeroUI Admin Template" className="logo-src"></Link>
                        
                        <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                        </button>
                    </div>
                    <div className="scrollbar-sidebar scrollbar-container">
                        <div className="app-sidebar__inner">
                            <ul className="vertical-nav-menu">
                                <li className="app-sidebar__heading">Menu</li>
                                <li>
                                    <Link to="#"> 
                                        <i className="metismenu-icon pe-7s-browser"></i>
                                        Pages
                                        <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#"> 
                                                <i className="metismenu-icon"></i>
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#"> 
                                                <i className="metismenu-icon">
                                                </i>Login Boxed
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#"> 
                                                <i className="metismenu-icon">
                                                </i>Register
                                            </Link>
                                        </li>
                                        
                                    </ul>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="metismenu-icon pe-7s-plugin"></i>
                                        Applications
                                        <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">
                                                <i className="metismenu-icon">
                                                </i>Mailbox

                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="metismenu-icon">
                                                </i>Chat
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="metismenu-icon">
                                                </i>FAQ Section
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
   
                                <li className="app-sidebar__heading">UI Components</li>
                                <li>
                                    <Link to="#">
                                        <i className="metismenu-icon pe-7s-diamond"></i>
                                        Elements
                                        <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="#">
                                                <i className="metismenu-icon"></i>
                                                Buttons
                                                <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                            </Link>
                                            <ul>
                                                <li>
                                                    <Link to="#">
                                                        <i className="metismenu-icon">
                                                        </i>Standard
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="metismenu-icon">
                                                        </i>Pills
                                                    </Link>
                                                </li>
                                                
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="metismenu-icon">
                                                </i>Dropdowns
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="metismenu-icon">
                                                </i>Icons
                                            </Link>
                                        </li>
                                        
                                    </ul>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="metismenu-icon pe-7s-car"></i>
                                        Components
                                        <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </Link>
                                    <ul >
                                        <li>
                                            <Link to="#">
                                                <i className="metismenu-icon">
                                                </i>Tabs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="metismenu-icon">
                                                </i>Accordions
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="#">
                                                <i className="metismenu-icon">
                                                </i>Tooltips &amp; Popovers
                                            </Link>
                                        </li>
                                      
                                        
                                    </ul>
                                </li>                        


                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="app-sidebar-overlay d-none animated fadeIn"></div>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <div className="header-mobile-wrapper">
                        <div className="app-header__logo">
                            <Link to="#" data-toggle="tooltip" data-placement="bottom" title="KeroUI Admin Template" className="logo-src"> </Link>
                            
                            <button type="button" className="hamburger hamburger--elastic mobile-toggle-sidebar-nav">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                            <div className="app-header__menu">
                            <span>
                                <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                    <span className="btn-icon-wrapper">
                                        <i className="fa fa-ellipsis-v fa-w-6"></i>
                                    </span>
                                </button>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="app-header">
                        <div className="page-title-heading">
                            Page Title
                            <div className="page-title-subheading">
                                Page Description here...
                            </div>
                        </div>
                        <div className="app-header-right">
                            <div className="header-btn-lg pr-0">
                                <div className="header-dots">
                                    <div className="dropdown">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" className="p-0 btn btn-link">
                                            <i className="typcn typcn-bell"></i>
                                            <span className="badge badge-dot badge-dot-sm badge-danger">Notifications</span>
                                        </button>
                                        <div tabIndex="-1" role="menu" aria-hidden="true" className="dropdown-menu-xl rm-pointers dropdown-menu dropdown-menu-right">
                                            <div className="dropdown-menu-header mb-0">
                                                <div className="dropdown-menu-header-inner bg-night-sky">
                                                    <div className="menu-header-image opacity-5" style={{ backgroundImage: "url('/images/city2.jpg')" }}></div>
                                                    <div className="menu-header-content text-light">
                                                        <h5 className="menu-header-title">Notifications</h5>
                                                        <h6 className="menu-header-subtitle">You have <b>21</b> unread messages</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="tabs-animated-shadow tabs-animated nav nav-justified tabs-shadow-bordered p-3">
                                                <li className="nav-item">
                                                    <a role="tab" className="nav-link active" data-toggle="tab" href="#tab-messages-header">
                                                        <span>Messages</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a role="tab" className="nav-link" data-toggle="tab" href="#tab-events-header">
                                                        <span>Events</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a role="tab" className="nav-link" data-toggle="tab" href="#tab-errors-header">
                                                        <span>System</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane active" id="tab-messages-header" role="tabpanel">
                                                    <div className="scroll-area-sm">
                                                        <div className="scrollbar-container">
                                                            <div className="p-3">
                                                                <div className="notifications-box">
                                                                    <div className="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--one-column">
                                                                        <div className="vertical-timeline-item dot-danger vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">All Hands Meeting</h4><span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-warning vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><p>Yet another one, at <span className="text-success">15:00 PM</span></p><span className="vertical-timeline-element-date"></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-success vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in">
                                                                                    <h4 className="timeline-title">Build the production release
                                                                                        <span className="badge badge-danger ml-2">NEW</span>
                                                                                    </h4>
                                                                                    <span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-primary vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in">
                                                                                    <h4 className="timeline-title">Something not important
                                                                                        <div className="avatar-wrapper mt-2 avatar-wrapper-overlap">
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="../assets/images/avatars/1.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="../assets/images/avatars/2.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="../assets/images/avatars/3.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="../assets/images/avatars/4.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="../assets/images/avatars/5.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="../assets/images/avatars/9.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="../assets/images/avatars/7.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="../assets/images/avatars/8.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm avatar-icon-add">
                                                                                                <div className="avatar-icon"><i>+</i></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </h4>
                                                                                    <span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-info vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">This dot has an info state</h4><span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-danger vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">All Hands Meeting</h4><span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-warning vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><p>Yet another one, at <span className="text-success">15:00 PM</span></p><span className="vertical-timeline-element-date"></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-success vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in">
                                                                                    <h4 className="timeline-title">Build the production release
                                                                                        <span className="badge badge-danger ml-2">NEW</span>
                                                                                    </h4>
                                                                                    <span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-dark vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">This dot has a dark state</h4><span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane" id="tab-events-header" role="tabpanel">
                                                    <div className="scroll-area-sm">
                                                        <div className="scrollbar-container">
                                                            <div className="p-3">
                                                                <div className="vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-success"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">All Hands Meeting</h4>
                                                                                <p>Lorem ipsum dolor sic amet, today at  <Link to="#">12:00 PM</Link></p><span className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-warning"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b className="text-danger">12:00 PM</b></p>
                                                                                <p>Yet another one, at <span className="text-success">15:00 PM</span></p><span className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-danger"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">Build the production release</h4>
                                                                                <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p><span
                                                                                        className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-primary"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title text-success">Something not important</h4>
                                                                                <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p><span className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-success"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">All Hands Meeting</h4>
                                                                                <p>Lorem ipsum dolor sic amet, today at <Link to="#"> 12:00 PM</Link></p><span className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-warning"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b className="text-danger">12:00 PM</b></p>
                                                                                <p>Yet another one, at <span className="text-success">15:00 PM</span></p><span className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-danger"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">Build the production release</h4>
                                                                                <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p><span
                                                                                        className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-primary"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title text-success">Something not important</h4>
                                                                                <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p><span className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane" id="tab-errors-header" role="tabpanel">
                                                    <div className="scroll-area-sm">
                                                        <div className="scrollbar-container">
                                                            <div className="no-results pt-3 pb-0">
                                                                <div className="swal2-icon swal2-success swal2-animate-success-icon">
                                                                    <div className="swal2-success-circular-line-left" style={{ backgroundColor: 'rgb(255, 255, 255)' }}></div>
                                                                    <span className="swal2-success-line-tip"></span>
                                                                    <span className="swal2-success-line-long"></span>
                                                                    <div className="swal2-success-ring"></div>
                                                                    <div className="swal2-success-fix" style={{ backgroundColor: 'rgb(255, 255, 255)' }}></div>
                                                                    <div className="swal2-success-circular-line-right" style={{ backgroundColor: 'rgb(255, 255, 255)' }}></div>
                                                                </div>
                                                                <div className="results-subtitle">All caught up!</div>
                                                                <div className="results-title">There are no system errors!</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="nav flex-column">
                                                <li className="nav-item-divider nav-item"></li>
                                                <li className="nav-item-btn text-center nav-item">
                                                    <button className="btn-shadow btn-wide btn-pill btn btn-focus btn-sm">View Latest Changes</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="header-btn-lg pr-0">
                                <div className="widget-content p-0">
                                    <div className="widget-content-wrapper">
                                        <div className="widget-content-left">
                                            <div className="btn-group">
                                                <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="p-0 btn">
                                                    <img width="42" className="rounded" src="../assets/images/avatars/3.jpg" alt=""/>
                                                    <i className="fa fa-angle-down ml-2 opacity-8"></i>
                                                </a>
                                                <div tabIndex="-1" role="menu" aria-hidden="true" className="rm-pointers dropdown-menu-lg dropdown-menu dropdown-menu-right">
                                                    <div className="dropdown-menu-header">
                                                        <div className="dropdown-menu-header-inner bg-info">
                                                            <div className="menu-header-image opacity-2" style={{ backgroundImage: "url('/images/city1.jpg')" }}></div>
                                                            <div className="menu-header-content text-left">
                                                                <div className="widget-content p-0">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left mr-3">
                                                                            <img width="42" className="rounded-circle"
                                                                                 src="../assets/images/avatars/3.jpg"
                                                                                 alt=""/>
                                                                        </div>
                                                                        <div className="widget-content-left">
                                                                            <div className="widget-heading">Minnie Betts
                                                                            </div>
                                                                            <div className="widget-subheading opacity-8">A short profile description
                                                                            </div>
                                                                        </div>
                                                                        <div className="widget-content-right mr-2">
                                                                            <button className="btn-pill btn-shadow btn-shine btn btn-focus">Logout
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="scroll-area-xs" style={{ height: '150px' }}>
                                                        <div className="scrollbar-container ps">
                                                            <ul className="nav flex-column">
                                                                <li className="nav-item-header nav-item">Activity
                                                                </li>
                                                                <li className="nav-item">
                                                                    <Link to="#" className="nav-link">Chat
                                                                        <div className="ml-auto badge badge-pill badge-info">8
                                                                        </div>
                                                                    </Link>
                                                                    
                                                                </li>
                                                                <li className="nav-item">
                                                                    <Link to="#" className="nav-link">ChatRecover Password
                                                                    </Link>
                                                                </li>
                                                                <li className="nav-item-header nav-item">My Account
                                                                </li>
                                                                <li className="nav-item">
                                                                    <Link to="#" className="nav-link">ChatSettings
                                                                        <div className="ml-auto badge badge-success">New
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <Link to="#" className="nav-link">ChatMessages
                                                                        <div className="ml-auto badge badge-warning">512
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <Link to="#" className="nav-link">ChatLogs
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item-divider mb-0 nav-item"></li>
                                                    </ul>
                                                    <div className="grid-menu grid-menu-2col">
                                                        <div className="no-gutters row">
                                                            <div className="col-sm-6">
                                                                <button className="btn-icon-vertical btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-warning">
                                                                    <i className="pe-7s-chat icon-gradient bg-amy-crisp btn-icon-wrapper mb-2"></i>
                                                                    Message Inbox
                                                                </button>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <button className="btn-icon-vertical btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-danger">
                                                                    <i className="pe-7s-ticket icon-gradient bg-love-kiss btn-icon-wrapper mb-2"></i>
                                                                    <b>Support Tickets</b>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item-divider nav-item">
                                                        </li>
                                                        <li className="nav-item-btn text-center nav-item">
                                                            <button className="btn-wide btn btn-primary btn-sm">
                                                                Open Messages
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="app-header-overlay d-none animated fadeIn"></div>
                    </div>
 {/* comentario aqui /////////////////////////////////////////////////////////////////////////////////////////// */}
                    { children }
                </div>
                <div className="app-wrapper-footer">
                    <div className="app-footer">
                        <div className="app-footer__inner">
                            <div className="app-footer-left">
                                <div className="footer-dots">
                                    <div className="dropdown">
                                        <a aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" className="dot-btn-wrapper">
                                            <i className="dot-btn-icon typcn typcn-warning-outline text-warning"></i>
                                            <div className="badge badge-dot badge-abs badge-dot-sm badge-danger">Danger</div>
                                        </a>
                                        <div tabIndex="-1" role="menu" aria-hidden="true" className="dropdown-menu-xl rm-pointers dropdown-menu">
                                            <div className="dropdown-menu-header mb-0">
                                                <div className="dropdown-menu-header-inner bg-deep-blue">
                                                    <div className="menu-header-image opacity-1" style={{ backgroundImage: "url('/images/city3.jpg')" }}></div>
                                                    <div className="menu-header-content text-dark">
                                                        <h5 className="menu-header-title">Notifications</h5>
                                                        <h6 className="menu-header-subtitle">You have <b>21</b> unread messages</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="tabs-animated-shadow tabs-animated nav nav-justified tabs-shadow-bordered p-3">
                                                <li className="nav-item">
                                                    <a role="tab" className="nav-link active" data-toggle="tab" href="#tab-messages-header1">
                                                        <span>Messages</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a role="tab" className="nav-link" data-toggle="tab" href="#tab-events-header1">
                                                        <span>Events</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a role="tab" className="nav-link" data-toggle="tab" href="#tab-errors-header1">
                                                        <span>System</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane active" id="tab-messages-header1" role="tabpanel">
                                                    <div className="scroll-area-sm">
                                                        <div className="scrollbar-container">
                                                            <div className="p-3">
                                                                <div className="notifications-box">
                                                                    <div className="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--one-column">
                                                                        <div className="vertical-timeline-item dot-danger vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">All Hands Meeting</h4><span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-warning vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><p>Yet another one, at <span className="text-success">15:00 PM</span></p><span className="vertical-timeline-element-date"></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-success vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in">
                                                                                    <h4 className="timeline-title">Build the production release
                                                                                        <span className="badge badge-danger ml-2">NEW</span>
                                                                                    </h4>
                                                                                    <span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-primary vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in">
                                                                                    <h4 className="timeline-title">Something not important
                                                                                        <div className="avatar-wrapper mt-2 avatar-wrapper-overlap">
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="../assets/images/avatars/1.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="../assets/images/avatars/2.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="../assets/images/avatars/3.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="../assets/images/avatars/4.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="../assets/images/avatars/5.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="../assets/images/avatars/9.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="../assets/images/avatars/7.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="../assets/images/avatars/8.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm avatar-icon-add">
                                                                                                <div className="avatar-icon"><i>+</i></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </h4>
                                                                                    <span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-info vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">This dot has an info state</h4><span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-danger vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">All Hands Meeting</h4><span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-warning vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><p>Yet another one, at <span className="text-success">15:00 PM</span></p><span className="vertical-timeline-element-date"></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-success vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in">
                                                                                    <h4 className="timeline-title">Build the production release
                                                                                        <span className="badge badge-danger ml-2">NEW</span>
                                                                                    </h4>
                                                                                    <span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-dark vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">This dot has a dark state</h4><span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane" id="tab-events-header1" role="tabpanel">
                                                    <div className="scroll-area-sm">
                                                        <div className="scrollbar-container">
                                                            <div className="p-3">
                                                                <div className="vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-success"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">All Hands Meeting</h4>
                                                                                <p>Lorem ipsum dolor sic amet, today at <Link to="#">12:00 PM</Link></p><span className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-warning"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b className="text-danger">12:00 PM</b></p>
                                                                                <p>Yet another one, at <span className="text-success">15:00 PM</span></p><span className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-danger"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">Build the production release</h4>
                                                                                <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p><span
                                                                                        className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-primary"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title text-success">Something not important</h4>
                                                                                <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p><span className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-success"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">All Hands Meeting</h4>
                                                                                <p>Lorem ipsum dolor sic amet, today at <Link to="#">12:00 PM</Link></p><span className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-warning"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b className="text-danger">12:00 PM</b></p>
                                                                                <p>Yet another one, at <span className="text-success">15:00 PM</span></p><span className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-danger"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">Build the production release</h4>
                                                                                <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p><span
                                                                                        className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-primary"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title text-success">Something not important</h4>
                                                                                <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p><span className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane" id="tab-errors-header1" role="tabpanel">
                                                    <div className="scroll-area-sm">
                                                        <div className="scrollbar-container">
                                                            <div className="no-results pt-3 pb-0">
                                                                <div className="swal2-icon swal2-success swal2-animate-success-icon">
                                                                    <div className="swal2-success-circular-line-left" style={{ backgroundColor: 'rgb(255, 255, 255)' }}></div>
                                                                    <span className="swal2-success-line-tip"></span>
                                                                    <span className="swal2-success-line-long"></span>
                                                                    <div className="swal2-success-ring"></div>
                                                                    <div className="swal2-success-fix" style={{ backgroundColor: 'rgb(255, 255, 255)' }}></div>
                                                                    <div className="swal2-success-circular-line-right" style={{ backgroundColor: 'rgb(255, 255, 255)' }}></div>
                                                                </div>
                                                                <div className="results-subtitle">All caught up!</div>
                                                                <div className="results-title">There are no system errors!</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="nav flex-column">
                                                <li className="nav-item-divider nav-item"></li>
                                                <li className="nav-item-btn text-center nav-item">
                                                    <button className="btn-shadow btn-wide btn-pill btn btn-focus btn-sm">View Latest Changes</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="dots-separator"></div>
                                    <div className="dropdown">
                                        <a className="dot-btn-wrapper dd-chart-btn-2" aria-haspopup="true" data-toggle="dropdown" aria-expanded="false">
                                            <i className="dot-btn-icon typcn typcn-chart-bar-outline text-danger"></i>
                                            <div className="badge badge-dot badge-abs badge-dot-sm badge-warning">Warning</div>
                                        </a>
                                        <div tabIndex="-1" role="menu" aria-hidden="true" className="dropdown-menu-xl rm-pointers dropdown-menu">
                                            <div className="dropdown-menu-header">
                                                <div className="dropdown-menu-header-inner bg-premium-dark">
                                                    <div className="menu-header-image" style={{ backgroundImage: "url('/images/city4.jpg')" }}></div>
                                                    <div className="menu-header-content text-white">
                                                        <h5 className="menu-header-title">Users Online
                                                        </h5>
                                                        <h6 className="menu-header-subtitle">Recent Account Activity Overview
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-chart">
                                                <div className="widget-chart-content">
                                                    <div className="icon-wrapper rounded-circle">
                                                        <div className="icon-wrapper-bg opacity-9 bg-focus">
                                                        </div>
                                                        <i className="lnr-users text-white">
                                                        </i>
                                                    </div>
                                                    <div className="widget-numbers">
                                                        <span>344k</span>
                                                    </div>
                                                    <div className="widget-subheading pt-2">
                                                        Profile views since last login
                                                    </div>
                                                    <div className="widget-description text-danger">
                                                        <span className="pr-1">
                                                            <span>176%</span>
                                                        </span>
                                                        <i className="fa fa-arrow-left"></i>
                                                    </div>
                                                </div>
                                                <div className="widget-chart-wrapper">
                                                    <div id="dashboard-sparkline-carousel-4-pop"></div>
                                                </div>
                                            </div>
                                            <ul className="nav flex-column">
                                                <li className="nav-item-divider mt-0 nav-item">
                                                </li>
                                                <li className="nav-item-btn text-center nav-item">
                                                    <button className="btn-shine btn-wide btn-pill btn btn-warning btn-sm">
                                                        <i className="fa fa-cog fa-spin mr-2">
                                                        </i>
                                                        View Details
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                
                                </div>
                            </div>
                            <div className="app-footer-right">
                                <ul className="header-megamenu nav">
                                    <li className="nav-item">
                                        <a data-placement="top" rel="popover-focus" data-offset="300" data-toggle="popover-custom" className="nav-link">
                                            Footer Menu
                                            <div className="badge badge-success ml-0 ml-1">
                                                <small>Old</small>
                                            </div>
                                            <i className="fa fa-angle-up ml-2 opacity-8"></i>
                                        </a>
                                        <div className="rm-max-width rm-pointers">
                                            <div className="d-none popover-custom-content">
                                                <div className="dropdown-mega-menu dropdown-mega-menu-sm">
                                                    <div className="grid-menu grid-menu-2col">
                                                        <div className="no-gutters row">
                                                            <div className="col-sm-6 col-xl-6">
                                                                <ul className="nav flex-column">
                                                                    <li className="nav-item-header nav-item">Overview</li>
                                                                    <li className="nav-item"><Link to="#" className="nav-link"><i className="nav-link-icon lnr-inbox"> </i><span>Contacts</span></Link></li>
                                                                    <li className="nav-item"><Link to="#" className="nav-link"><i className="nav-link-icon lnr-book"> </i><span>Incidents</span>
                                                                        <div className="ml-auto badge badge-pill badge-danger">5</div>
                                                                    </Link></li>
                                                                    <li className="nav-item"><Link to="#" className="nav-link"><i className="nav-link-icon lnr-picture"> </i><span>Companies</span></Link></li>
                                                                    <li className="nav-item"><a disabled="" href="" className="nav-link disabled"><i className="nav-link-icon lnr-file-empty"> </i><span>Dashboards</span></a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-6 col-xl-6">
                                                                <ul className="nav flex-column">
                                                                    <li className="nav-item-header nav-item">Sales &amp; Marketing</li>
                                                                    <li className="nav-item"><Link to="#" className="nav-link">Queues</Link></li>
                                                                    <li className="nav-item"><Link to="#" className="nav-link">Resource Groups</Link></li>
                                                                    <li className="nav-item"><Link to="#" className="nav-link">Goal Metrics
                                                                        <div className="ml-auto badge badge-warning">3</div>
                                                                    </Link></li>
                                                                    <li className="nav-item"><Link to="#" className="nav-link">Campaigns</Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>    
          
      {children}
    </>
  )
}
