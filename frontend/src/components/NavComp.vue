<template>
<nav class="navbar navbar-expand-lg">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarRightAlignExample"
      aria-controls="navbarRightAlignExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <font-awesome-icon :icon="['fas', 'bars']" style="color: #ff70d9;" />
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarRightAlignExample">
      <!-- Left links -->
      <ul class="navbar-nav ms-auto mb-4 mb-lg-0">
        <li class="nav-item me-5">
          <router-link class="nav-link active" to="/">Home</router-link>
        </li>
        <li class="nav-item me-5">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item me-5">
          <router-link class="nav-link" to="/shop">Shop</router-link>
        </li>
        <li class="nav-item me-5">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
    <!-- Collapsible wrapper -->
  </div>
  <!-- Container wrapper -->
</nav>
</template>
