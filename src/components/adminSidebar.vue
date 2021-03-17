<template>
  <div>
    <section
    
    class="bg-white mr-4 rounded-lg text-gray-700">
      <router-link 
      to="/frontend"
      active-class="active"
      exact tag="p"
      class="side"
      >
        <div class="p-6">
          <div class="flex justify-between text-2xl font-semibold">
            <h3>Front end developer</h3>
            <p>$14k-$18k</p>
          </div>
          <p>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            Ikeja, Lagos
          </p>
          <p class="text-sm mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nisi quaerat accusantium velit laudantium 
            rem aperiam odit distinctio porro inventore ratione
              illo labore at quia amet, earum quibusdam 
              corrupti mollitia. Delectus corporis dolores impedit sunt 
            hic fugiat inventore libero temporibus iure!
          </p>
          <div class="mt-4 flex justify-end">
            <button @click="goTo(route)">See more</button>
          </div>
        </div>
      </router-link>  
    </section>

    <section 
   
    class="bg-white mr-4 rounded-lg mt-6 text-gray-700">
      <router-link
        to="/backend"
        active-class="active"
        exact tag="p"
        class="side"
       >
        <div class="p-6">
          <div class="flex justify-between text-2xl font-semibold">
            <h3>Back end developer</h3>
            <p>$14k-$18k</p>
          </div>
          <p>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            Ipaja, Lagos
          </p>
          <p class="text-sm mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nisi quaerat accusantium velit laudantium 
            rem aperiam odit distinctio porro inventore ratione
              illo labore at quia amet, earum quibusdam 
              corrupti mollitia. Delectus corporis dolores impedit sunt 
            hic fugiat inventore libero temporibus iure!
          </p>
          <div class="mt-4 flex justify-end">
            <button>See more</button>
          </div>
        </div>
      </router-link>  
    </section>

    <section
   
     class="bg-white mr-4 rounded-lg mt-6 text-gray-700">
      <router-link to="/UIUX"
        active-class="active"
        exact tag="p"
        class="side"
      >
        <div class="p-6">
          <div class="flex justify-between text-2xl font-semibold">
            <h3>UI/UX Designer</h3>
            <p>$14k-$18k</p>
          </div>
          <p>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            PWD, Lagos
          </p>
          <p class="text-sm mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nisi quaerat accusantium velit laudantium 
            rem aperiam odit distinctio porro inventore ratione
              illo labore at quia amet, earum quibusdam 
              corrupti mollitia. Delectus corporis dolores impedit sunt 
            hic fugiat inventore libero temporibus iure!
          </p>
          <div class="mt-4 flex justify-end">
            <button>See more</button>
          </div>
        </div>
      </router-link>
    </section>

    <section 
    
    class="bg-white mr-4 rounded-lg mt-6 text-gray-700">
      <router-link to="/graphics" 
        active-class="active"
        exact tag="p"
        class="side"
      >
        <div class="p-6">
          <div class="flex justify-between text-2xl font-semibold">
            <h3>Graphic designer</h3>
            <p>$14k-$18k</p>
          </div>
          <p>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            Alausa, Lagos
          </p>
          <p class="text-sm mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nisi quaerat accusantium velit laudantium 
            rem aperiam odit distinctio porro inventore ratione
              illo labore at quia amet, earum quibusdam 
              corrupti mollitia. Delectus corporis dolores impedit sunt 
            hic fugiat inventore libero temporibus iure!
          </p>
          <div class="mt-4 flex justify-end">
            <button>See more</button>
          </div>
        </div>
      </router-link>
    </section>
  </div>
</template>

<script>
export default{
    data(){
        return{

        }
    },
    methods: {
      
    }
}

</script>

<style scoped>
.side{
  background-color: white;
  color: black;
}
.side.active {
  background-color: brown;
  color: white;
  border-radius: 8px;
}
</style>