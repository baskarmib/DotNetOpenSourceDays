<template>
  <Layout>  
  <section class="hero is-light is-small">
  <div class="hero-body">
    <div class="container author content has-text-centered">
      <g-image alt="Author image" class="image" src="~/assets/img/dotNetx.png" />   
    </div>
  </div>
</section>
<section class="hero is-light is-fullheight-with-navbar">  
  <div class="hero-head">
    <div class="container content has-text-centered">   
    <h2 class="subtitle">
    Join us for the first virtual conference on April-17-2020.
    </h2>
    <br>
    <g-link class="button is-info" to="https://www.eventbrite.com/e/dot-net-open-source-days-virtual-conference-tickets-101833546880">RSVP</g-link>
    </div>
  </div>
  <div class="hero-body has-text-centered">
  <div class="columns content has-text-centered">
  <div class="column">
  <article class="media">
  <figure class="media-centered">
    <p class="image is-128x128">
      <g-image class="image" alt="Chris Woodruff" src="~/assets/img/chris.jpg" /> 
    </p>
     <p>
        <strong>Chris Woodruff</strong> 
        <br>    
        <small>@cwoodruff</small> 
      </p>
  </figure> 
  </article>
  </div>
  <div class="column">
 <article class="media">
  <figure class="media-centered">
    <p class="image is-128x128">
      <g-image class="image" alt="Matt Eland" src="~/assets/img/Matt.png" /> 
    </p>
     <p>
        <strong>Matt Eland</strong> 
        <br>    
        <small>@integerman</small> 
      </p>
  </figure>
 
  </article>
  </div>
   <div class="column">
 <article class="media">
  <figure class="media-centered">
    <p class="image is-128x128">
      <g-image class="image" alt="Rob Richardson" src="~/assets/img/Rob.png" /> 
    </p>
     <p>
        <strong>Rob Richardson</strong> 
        <br>    
        <small>@rob_rich</small> 
      </p>
  </figure>
 
  </article>
  </div>
   <div class="column">
 <article class="media">
  <figure class="media-centered">
    <p class="image is-128x128">
      <g-image class="image" alt="Ado Kukic" src="~/assets/img/ado.jpg" /> 
    </p>
     <p>
        <strong>Ado Kukic</strong> 
        <br>    
        <small>@KukicAdo</small> 
      </p>
  </figure>
 
  </article>
  </div>
   <div class="column">
 <article class="media">
  <figure class="media-centered">
    <p class="image is-128x128">
      <g-image class="image" alt="Patrick Kelly" src="~/assets/img/patrick.jpg" /> 
    </p>
     <p>
        <strong>Patrick Kelly</strong> 
        <br>    
        <small>@pkell7</small> 
      </p>
  </figure>
 
  </article>
  </div>
</div>
</div>
<div class="container content has-text-centered">
   <h2 class="subtitle">
    Schedule
   </h2>
   <br>
   <table class="table">
   <thead>
    <tr>
      <th>Time</th>
      <th>Speaker</th>
      <th><abbr title="Session Description">Session</abbr></th>      
    </tr>
    </thead>
    <tr>
    <td>09:00 AM EDT</td>
    <td>Chris Woodruff</td>
    <td>Keynote - <g-link to="/content/sessions/embracing-your-renaissance-man-or-woman-in-the-digital-age/">
              Embracing your Renaissance Man (or Woman) in the Digital Age
              </g-link>
              </td>
    </tr>
    <tr>
    <td>10:00 AM EDT</td>
    <td>Matt Eland</td>
    <td><g-link to="/content/sessions/stand-back-i-m-going-to-try-scientist/">Stand back; I'm Going to Try Scientist!</g-link></td>
    </tr>
     <tr>
    <td>11:00 AM EDT</td>
    <td>Rob Richardson</td>
    <td><g-link to="/content/sessions/your-technology-your-way-full-stack-web-and-service-with-net-and-node/">Your Technology Your Way: Full-stack Web and Service with .NET and Node</g-link></td>
    </tr>
    <tr>
    <td>12:00 PM EDT</td>
    <td></td>
    <td>Lunch Break</td>
    </tr>
    <tr>
    <td>01:00 PM EDT</td>
    <td>Ado Kukic</td>
    <td><g-link to="/content/sessions/no-sql-design-patterns-you-need-to-know/">NoSQL Design Patterns You Need to Know</g-link></td>
    </tr>
     <tr>
    <td>02:00 PM EDT</td>
    <td>Patrick Kelly</td>
    <td><g-link to="/content/sessions/text-processing-is-really-complicated/">Text Processing is Really Complicated</g-link></td>
    </tr>
    <tr>
    <td>03:00 PM EDT</td>
    <td>Rob Richardson</td>
    <td><g-link to="/content/sessions/the-definitive-deep-dive-into-the-git-folder/">The definitive deep dive into the .git folder</g-link></td>
    </tr>  
   </table>
   <br>
  </div>
  </div>
</section>
 

</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
