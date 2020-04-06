<template>
  <Layout>
     <section class="hero is-light is-fullheight-with-navbar">
       <br>
     <div class="hero-head has-text-centered">
        <h1 class="title">{{$page.session.title}} </h1>        
     </div>
     <div class="hero-body">
     <div class="container">
        <div class="content has-text-left is-size-6" v-html="$page.session.content">
        </div>
     </div>
    </div>  
  </section>
  </Layout>
</template>

<page-query>
query Session ($path: String!) {
   session: session (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>

<style>

</style>
<script>
  export default {
    mounted() {
      let twitterScript = document.createElement('script')
      twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      document.head.appendChild(twitterScript)
    }    
  }
</script>