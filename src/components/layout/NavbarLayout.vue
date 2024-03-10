<template>
  <div>
    <div className="navbar w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="{0}" role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="{0}"
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Home</a></li>
            <li>
              <a>Shop</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Abouts</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl tracking-wider">SypeX</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 tracking-wider text-lg">
          <li><a>Home</a></li>
          <li>
            <details>
              <summary>Shop</summary>
              <ul className="p-2">
                <li><a>Product</a></li>
                <li><a>Category</a></li>
              </ul>
            </details>
          </li>
          <li><a>About Us</a></li>
          <li><a>Contact Us</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <img
          class="w-14 h-14 rounded-full"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
