import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    const sidebar = document.querySelector('nav');
    sidebar.classList.toggle('close');
  };

  // const openSidebar = () => {
  //   const sidebar = document.querySelector('nav');
  //   sidebar.classList.remove('close');
  // };

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <>
      <nav className={`sidebar ${darkMode ? 'dark' : ''}`}  >
        <header>
          <div className="image-text">
            <span className="image">
              <img src="logo.png" alt="" />
            </span>

            <div className="text logo-text">
              <span className="name">Dashboard</span>
            </div>
          </div>

          <i className='bx bx-chevron-right toggle' onClick={toggleSidebar}></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            {/* <li className="search-box">
              <i className='bx bx-search icon'></i>
              <input type="text" placeholder="Search Games..." />
            </li> */}

            <ul className="menu-links">
              {/* <li className="nav-link"  style={{border:'2px solid red'}}>
                <a href="#">
                  <i className='bx bx-home-alt icon'></i>
                  <span className="text nav-text">Dashboard</span>
                </a>
              </li>

              <li className="nav-link"  style={{border:'2px solid red'}}>
                <a href="#">
                  <i className='bx bx-bar-chart-alt-2 icon'></i>
                  <span className="text nav-text">Revenue</span>
                </a>
              </li>

              <li className="nav-link"  style={{border:'2px solid red'}}>
                <a href="#">
                  <i className='bx bx-bell icon'></i>
                  <span className="text nav-text">Notifications</span>
                </a>
              </li>

              <li className="nav-link"  style={{border:'2px solid red'}}>
                <a href="#">
                  <i className='bx bx-pie-chart-alt icon'></i>
                  <span className="text nav-text">Analytics</span>
                </a>
              </li>

              <li className="nav-link"  style={{border:'2px solid red'}}>
                <a href="#">
                  <i className='bx bx-heart icon'></i>
                  <span className="text nav-text">Likes</span>
                </a>
              </li>

              <li className="nav-link"  style={{border:'2px solid red'}}>
                <a href="#">
                  <i className='bx bx-wallet icon'></i>
                  <span className="text nav-text">Wallets</span>
                </a>
              </li> */}
              <li className="">
              <a href="#">
                  <i className='bx bx-home-alt icon'></i>
                  <span className="text nav-text">Dashboard</span>
              </a>
            </li> 
              <li className="">
              <a href="#">
                  <i className='bx bx-bar-chart-alt-2 icon'></i>
                  <span className="text nav-text">Revenue</span>
              </a>
            </li>
            <li className="">
              <a href="#">
                  <i className='bx bx-bell icon'></i>
                  <span className="text nav-text">Notifications</span>
              </a>
            </li>   <li className="">
              <a href="#">
                 <i className='bx bx-pie-chart-alt icon'></i>
                  <span className="text nav-text">Analytics</span>
              </a>
            </li>   <li className="">
              <a href="#">
                  <i className='bx bx-heart icon'></i>
                  <span className="text nav-text">Likes</span>
              </a>
            </li>   <li className="">
              <a href="#">
                  <i className='bx bx-wallet icon'></i>
                  <span className="text nav-text">Wallets</span>
              </a>
            </li>  
            </ul>
          </div>

          <div className="bottom-content">
            <li className="">
              <a href="#">
                <i className='bx bx-log-out icon'></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>
{/* 
            <li className="mode" onClick={toggleDarkMode}>
              <div className="sun-moon">
                <i className={`bx ${darkMode ? 'bx-moon' : 'bx-sun'} icon moon`}></i>
              </div>
              <span className="mode-text text">{darkMode ? 'Light mode' : 'Dark mode'}</span>

              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li> */}
          </div>
        </div>
      </nav>

      <section className="home ms-2">
       <div className='d-flex row p-3'>
       <h4 className='col-3'>Hi Shahrukh</h4>
        <div className='col-6'></div>
        <div className='col-3'>
        <form class="form">
      <button>
          <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
              <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
      </button>
      <input class="input" placeholder="Type your text" required="" type="text" />
      <button class="reset" type="reset">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
      </button>
  </form>
        </div>
       </div>
      <div class="cont">
    <div class="box"> <div>
            <div class="d-flex align-items-center">
                <div class="rounded-circle-icon" style={{backgroundColor:'#CBFEE5'}}>
                    <i class="fa fa-cart-plus fa-5x" style={{color:'#00AA4A'}}></i>
                </div>
                <div class="ml-4 text-dark flex-grow-1">
                    <h6 class="mb-1">Earnings</h6>
                    <h3 class=""><span  style={{fontSize:'20px'}}>$198K</span></h3>
                    <p class="mb-0"><span style={{color:"green",fontWeight:'bold'}}>↑38.8%</span>&nbsp;of&nbsp;month</p>
                </div>
            </div>
        </div>
      </div>

    <div class="box">
        <div class="d-flex align-items-center">
                <div class="rounded-circle-icon bg-c-green" style={{backgroundColor:'#DACCF5'}}>
                    <i class="fa fa-cart-plus fa-5x" style={{color:'#A301FF'}}></i>
                </div>
                <div class="ml-4 text-dark flex-grow-1">
                    <h6 class="mb-1">Orders</h6>
                    <h3 class=""><span  style={{fontSize:'20px'}}>$2.5K</span></h3>
                      <p class="mb-0" ><span style={{color:"green",fontWeight:'bold'}}>↓2%</span>&nbsp;of&nbsp;month</p>
                </div>
            </div>
    </div>
    <div class="box">
        <div class="d-flex align-items-center">
                <div class="rounded-circle-icon bg-c-green" style={{backgroundColor:'#C2F0FF'}}>
                    <i class="fa fa-cart-plus fa-5x" style={{color:'#0A5CC0'}}></i>
                </div>
                <div class="ml-4 text-dark flex-grow-1">
                    <h6 class="mb-1">Balance</h6>
                    <h3 class=""><span  style={{fontSize:'20px'}}>$2.5K</span></h3>
                   <p class="mb-0"><span style={{color:"green",fontWeight:'bold'}}>↓2%</span>&nbsp;of&nbsp;month</p>
                </div>
            </div>

    </div>
    <div class="box">
        <div class="d-flex align-items-center">
                <div class="rounded-circle-icon bg-c-green" style={{backgroundColor:'#FFBFE2'}}>
                    <i class="fa fa-cart-plus fa-5x" style={{color:'#D90012'}}></i>
                </div>
                <div class="ml-4 text-dark flex-grow-1">
                    <h6 class="mb-1">Toatal sales</h6>
                     <h3 class=""><span  style={{fontSize:'20px'}}>$89K</span></h3>
                    <p class="mb-0"><span style={{color:"green",fontWeight:'bold'}}>↑11%</span>&nbsp;of&nbsp;week</p>
                </div>
            </div>
    </div>
  </div>

 



<div className="row container-fluid mt-3">

<div className="col">
     <div className="year-stats height-100">
         <div className="row">
    <div className="col-lg-3">
       <h5 className="fw-bold">Overview</h5>
       <p>Earning</p>
    </div>
    <div className="col-lg-6">

    </div>
    <div className="col-lg-3">
       Quaterly
    </div>
 </div>
     <div className="month-group">
       <div className="bar h-100"></div>
       <p className="month">Jan</p>
     </div>
     <div className="month-group">
       <div className="bar h-50"></div>
       <p className="month">Feb</p>
     </div>
     <div className="month-group">
       <div className="bar h-75"></div>
       <p className="month">Mar</p>
     </div>
     <div className="month-group">
       <div className="bar h-25"></div>
       <p className="month">Apr</p>
     </div>
     <div className="month-group selected">
       <div className="bar h-100"></div>
       <p className="month">May</p>
     </div>
     <div className="month-group">
       <div className="bar h-50"></div>
       <p className="month">Jun</p>
     </div>
     <div className="month-group">
       <div className="bar h-75"></div>
       <p className="month">Jul</p>
     </div>
     <div className="month-group">
       <div className="bar h-25"></div>
       <p className="month">Aug</p>
     </div>
     <div className="month-group">
       <div className="bar h-50"></div>
       <p className="month">Sep</p>
     </div>
     <div className="month-group">
       <div className="bar h-75"></div>
       <p className="month">Oct</p>
     </div>
     <div className="month-group">
       <div className="bar h-25"></div>
       <p className="month">Nov</p>
     </div>
     <div className="month-group">
       <div className="bar h-100"></div>
       <p className="month">Dez</p>
     </div>
   </div>

</div>


<div className='col' style={{display:'grid',placeItems:'center',backgroundColor:'#FFFFFF',borderRadius:'10px'}}>
  <div class="single-chart pt-2 pb-1">
  <h5>Customers</h5>
  <p style={{marginTop:'-10px'}}>Customers that buy products</p>
    <svg viewBox="0 0 36 36" class="circular-chart green">
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle"
        stroke-dasharray="60, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage">65%</text>
    </svg>

</div>
</div>
</div>


      </section>

    </>
  );
}

export default App;


















// import React, { useEffect, useState } from 'react';
// import './index.css'; // Add your CSS file here
// const App = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 768) {
//         setSidebarOpen(true);
//       } else {
//         setSidebarOpen(false);
//       }
//     };

//     // Listen for window resize events
//     window.addEventListener('resize', handleResize);

//     // Initial check for window width on load
//     handleResize();

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const handleToggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   useEffect(() => {
//     const showNavbar = (toggleId, navId, bodyId, headerId) => {
//       const toggle = document.getElementById(toggleId);
//       const nav = document.getElementById(navId);
//       const bodypd = document.getElementById(bodyId);
//       const headerpd = document.getElementById(headerId);

//       // Validate that all variables exist
//       if (toggle && nav && bodypd && headerpd) {
//         toggle.addEventListener('click', () => {
//           // show navbar
//           nav.classList.toggle('show');
//           // change icon
//           toggle.classList.toggle('bx-x');
//           // add padding to body
//           bodypd.classList.toggle('body-pd');
//           // add padding to header
//           headerpd.classList.toggle('body-pd');
//         });
//       }
//     };

//     showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

//     /*===== LINK ACTIVE =====*/
//     const linkColor = document.querySelectorAll('.nav_link');

//     const colorLink = () => {
//       if (linkColor) {
//         linkColor.forEach((l) => l.classList.remove('active'));
//         this.classList.add('active');
//       }
//     };

//     linkColor.forEach((l) => l.addEventListener('click', colorLink));
//   }, []);

//   return (
//   <>
    
//       <div className={`l-navbar ${sidebarOpen ? 'show' : ''}`} id="nav-bar">
//       <nav className="nav">
       
//           <a href="#" className="nav_logo">
//             <i className='bx bx-layer nav_logo-icon'></i>
//             <span className="nav_logo-name">Dashboard</span>
//           </a>
//           <div className="nav_list">
//             <a href="#" className="nav_link active">
//               <i className='bx bx-grid-alt nav_icon'></i>
//               <span className="nav_name">Dashboard</span>
//             </a>
//             <a href="#" className="nav_link">
//               <i className='bx bx-user nav_icon'></i>
//               <span className="nav_name">Users</span>
//             </a>
//             <a href="#" className="nav_link">
//               <i className='bx bx-message-square-detail nav_icon'></i>
//               <span className="nav_name">Messages</span>
//             </a>
//             <a href="#" className="nav_link">
//               <i className='bx bx-bookmark nav_icon'></i>
//               <span className="nav_name">Bookmark</span>
//             </a>
//             <a href="#" className="nav_link">
//               <i className='bx bx-folder nav_icon'></i>
//               <span className="nav_name">Files</span>
//             </a>
//             <a href="#" className="nav_link">
//               <i className='bx bx-bar-chart-alt-2 nav_icon'></i>
//               <span className="nav_name">Stats</span>
//             </a>
//           </div>
        
//         <a href="#" className="nav_link">
//           <i className='bx bx-log-out nav_icon'></i>
//           <span className="nav_name">SignOut</span>
//         </a>
//       </nav>
//     </div>
//       </>
//   );
// };

// export default App;








// import React, { useEffect } from 'react';
// import './index.css';

// const App = () => {
//   useEffect(() => {
//     const showNavbar = () => {
//       const toggle = document.getElementById('header-toggle');
//       const nav = document.getElementById('nav-bar');
//       const bodypd = document.getElementById('body-pd');
//       const headerpd = document.getElementById('header');

//       if (toggle && nav && bodypd && headerpd) {
//         toggle.addEventListener('click', () => {
//           nav.classList.toggle('show');
//           toggle.classList.toggle('bx-x');
//           bodypd.classList.toggle('body-pd');
//           headerpd.classList.toggle('body-pd');
//         });
//       }
//     };

//     const colorLink = () => {
//       const linkColor = document.querySelectorAll('.nav_link');
//       if (linkColor) {
//         linkColor.forEach((l) => l.classList.remove('active'));
//         // This line seems incorrect; you may need to update it based on your requirements
//         // this.classList.add('active');
//       }
//     };

//     showNavbar();

//     const linkColor = document.querySelectorAll('.nav_link');
//     linkColor.forEach((l) => l.addEventListener('click', colorLink));

//     return () => {
//       const toggle = document.getElementById('header-toggle');
//       const linkColor = document.querySelectorAll('.nav_link');

//       if (toggle) {
//         toggle.removeEventListener('click', showNavbar);
//       }

//       if (linkColor) {
//         linkColor.forEach((l) => l.removeEventListener('click', colorLink));
//       }
//     };
//   }, []);

//   return (
//     <>
//       <div id='body-pd'>
//         <header className="header" id="header">
//           <div className="header_toggle"> <i className='bx bx-menu' id="header-toggle"></i> </div>
//         </header>

//         <div className="l-navbar" id="nav-bar">
//         <nav className="nav">
//             <div> <a href="#" className="nav_logo"> <i className='bx bx-layer nav_logo-icon'></i> <span className="nav_logo-name">Dashboard</span> </a>
//                 <div className="nav_list"> <a href="#" className="nav_link active"> <i className='bx bx-grid-alt nav_icon'></i> <span className="nav_name">Dashboard</span> </a> <a href="#" className="nav_link"> <i className='bx bx-user nav_icon'></i> <span className="nav_name">Users</span> </a> <a href="#" className="nav_link"> <i className='bx bx-message-square-detail nav_icon'></i> <span className="nav_name">Messages</span> </a> <a href="#" className="nav_link"> <i className='bx bx-bookmark nav_icon'></i> <span className="nav_name">Bookmark</span> </a> <a href="#" className="nav_link"> <i className='bx bx-folder nav_icon'></i> <span className="nav_name">Files</span> </a> <a href="#" className="nav_link"> <i className='bx bx-bar-chart-alt-2 nav_icon'></i> <span className="nav_name">Stats</span> </a> </div>
//             </div> <a href="#" className="nav_link"> <i className='bx bx-log-out nav_icon'></i> <span className="nav_name">SignOut</span> </a>
//         </nav>

//         </div>

//         <div className="height-100 bg-light">
//         <div className="cont">
//      <div className="box"> <div>
//              <div className="d-flex align-items-center">
//                  <div className="rounded-circle-icon bg-c-green">
//                      <i className="fa fa-cart-plus fa-5x"></i>
//                  </div>
//                  <div className="ml-4 text-dark flex-grow-1">
//                      <h6 className="mb-1">Earnings</h6>
//                   <h3 className="text"><span style={{fontSize:'20px'}}>$198K</span></h3>
//                      <p className="mb-0"><span style={{color:"green",fontWeight:'bold'}}>↑38.8%</span>&nbsp;of&nbsp;month</p>
//                  </div>
//              </div>
//          </div>
//        </div>

//      <div className="box">
//          <div className="d-flex align-items-center">
//                  <div className="rounded-circle-icon bg-c-green">
//                      <i className="fa fa-cart-plus fa-5x"></i>
//                  </div>
//                  <div className="ml-4 text-dark flex-grow-1">
//                      <h6 className="mb-1">Orders</h6>
//                      <h3 className="text"><span style={{fontSize:'20px'}}>$2.5K</span></h3>
//                        <p className="mb-0" ><span style={{color:"green",fontWeight:'bold'}}>↓2%</span>&nbsp;of&nbsp;month</p>
//                  </div>
//              </div>
//      </div>
//      <div className="box">
//          <div className="d-flex align-items-center">
//                  <div className="rounded-circle-icon bg-c-green">
//                      <i className="fa fa-cart-plus fa-5x"></i>
//                  </div>
//                  <div className="ml-4 text-dark flex-grow-1">
//                      <h6 className="mb-1">Balance</h6>
//                      <h3 className="text"><span style={{fontSize:'20px'}}>$2.5K</span></h3>
//                     <p className="mb-0"><span style={{color:"green",fontWeight:'bold'}}>↓2%</span>&nbsp;of&nbsp;month</p>
//                  </div>
//              </div>

//      </div>
//      <div className="box">
//          <div className="d-flex align-items-center">
//                  <div className="rounded-circle-icon bg-c-green">
//                      <i className="fa fa-cart-plus fa-5x"></i>
//                  </div>
//                  <div className="ml-4 text-dark flex-grow-1">
//                      <h6 className="mb-1">Toatal sales</h6>
//                       <h3 className="text"><span style={{fontSize:'20px'}}>$89K</span></h3>
//                      <p className="mb-0"><span style={{color:"green",fontWeight:'bold'}}>↑11%</span>&nbsp;of&nbsp;week</p>
//                  </div>
//              </div>
//      </div>
//    </div>
//           </div>
//       </div>
//     </>
//   );
// };

// export default App;








// import React, { useEffect } from 'react';
// import './index.css';


  
//     const App = () => {
//         const handleSidebarToggle = () => {
//           const sidebar = document.getElementById('sidebar');
//           if (sidebar) {
//             sidebar.classList.toggle('active');
//           }
//         };
      
//         useEffect(() => {
//           const sidebarToggle = document.getElementById('sidebarCollapse');
//           if (sidebarToggle) {
//             sidebarToggle.addEventListener('click', handleSidebarToggle);
//           }
      
//           return () => {
//             // Clean up the event listener when the component is unmounted
//             if (sidebarToggle) {
//               sidebarToggle.removeEventListener('click', handleSidebarToggle);
//             }
//           };
//         }, []);
      
//   return (
//     <>
//       <div>
//       <div className="wrapper">
//       <nav id="sidebar">
//       <div className="sidebar-header">
//         <h3>Bootstrap Sidebar</h3>
//       </div>

//       <ul className="list-unstyled components">
//         <li className="active">
//           <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
//             <i className="bx bx-layer nav_logo-icon"></i>Home
//           </a>
//           <ul className="collapse list-unstyled" id="homeSubmenu">
//             <li>
//               <a href="#"><i className="bx bx-home"></i>Home 1</a>
//             </li>
//             <li>
//               <a href="#"><i className="bx bx-home"></i>Home 2</a>
//             </li>
//             <li>
//               <a href="#"><i className="bx bx-home"></i>Home 3</a>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <a href="#"><i className="bx bxs-info-square"></i>About</a>
//         </li>
//         <li>
//           <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
//             <i className="bx bxs-file"></i>Pages
//           </a>
//           <ul className="collapse list-unstyled" id="pageSubmenu">
//             <li>
//               <a href="#"><i className="bx bxs-file"></i>Page 1</a>
//             </li>
//             <li>
//               <a href="#"><i className="bx bxs-file"></i>Page 2</a>
//             </li>
//             <li>
//               <a href="#"><i className="bx bxs-file"></i>Page 3</a>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <a href="#"><i className="bx bxs-briefcase"></i>Portfolio</a>
//         </li>
//         <li>
//           <a href="#"><i className="bx bxs-phone"></i>Contact</a>
//         </li>
//       </ul>
//     </nav>

     
//         <div id="content">
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid">
//                     <button type="button" id="sidebarCollapse" className="btn btn-info">
//                         <i className="fas fa-align-left"></i>
//                         <span>Toggle</span>
//                     </button>
//                     <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <i className="fas fa-align-justify"></i>
//                     </button>

//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="nav navbar-nav ml-auto">
//                             <li className="nav-item active">
//                                 <a className="nav-link" href="#">Page</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">Page</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">Page</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">Page</a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>

//             <h2>Collapsible Sidebar Using Bootstrap 4</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

//             <div className="line"></div>

//             <h2>Lorem Ipsum Dolor</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

//             <div className="line"></div>

//             <h2>Lorem Ipsum Dolor</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

//             <div className="line"></div>

//             <h3>Lorem Ipsum Dolor</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//         </div>
//     </div>
//       </div>
//     </>
//   );
// };

// export default App;












