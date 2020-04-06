<template>
 <div id="app">  
    <nav class="navbar">   
 
      <div class="container">        
        <div id="navbarMenuHeroB" class="navbar-menu">
          <div class="navbar-end">
            <span class="navbar-item">
              <g-link class="button is-info is-inverted" to="/">
              Home
              </g-link>
            </span>
            <span class="navbar-item">
              <g-link class="button is-info is-inverted" to="https://dotnetfoundation.org/code-of-conduct">
              Code of Conduct
              </g-link>
            </span>
          </div>
        </div>
      </div>
    </nav>
    
  
      <slot />
      <footer class="footer is-light has-text-centered">
      <span>Copyright © {{ new Date().getFullYear() }}. </span>
      <span>Follow us on <a href="//twitter.com/dotnetopensour1" target="_blank" rel="noopener noreferrer"> Twitter </a>. Code of Conduct violations can be reported through Twitter DM.</span>
    </footer>
 </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: Roboto,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}





</style>
