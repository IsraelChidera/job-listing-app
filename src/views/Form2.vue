<template>
    <div id="form-body">
        <form >  
           <div class="py-20 bg-gray-300 px-2">          
                <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
                    <div class="px-4 py-4 ">
                        <h3 class="font-bold">New Job</h3>
                        <p class="text-xs m-0.5">
                            Kindly provide the required information to get matched with suitable candidates
                        </p>
                    </div>
                    <div class="md:flex">
                        <div class="w-full px-4 py-6 ">
                            <div class="mb-1"> 
                                <span class="text-sm">Job Title</span> 
                                <input
                                type="text" 
                                class="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
                                required>
                            </div>
                            <div class="mb-1"> 
                                <span class="text-sm">Company Name</span> 
                                <input 
                                type="text" 
                                class="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
                                required> 
                            </div>
                            <div class="mb-1"> 
                                <span class="text-sm">Location</span> 
                                <input 
                                type="text" 
                                class="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
                                v-model="job.location"
                                required> 
                            </div>
                            <div class="mb-1"> 
                                <span class="text-sm">What type of employment is it?</span> 
                                <select
                                v-model="job.title" 
                                class="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
                                required>
                                    <option>Select option</option>
                                    <option>Front end developer</option>
                                    <option>UI/UX designer</option>
                                    <option>Graphic designer</option>
                                </select>
                            </div>
                            <div class="mb-1"> 
                                <span class="text-sm">Salary Range</span> 
                                <input 
                                type="text" 
                                class="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
                                v-model="job.range"
                                required> 
                            </div>

                            <div class="mb-1"> 
                                <span class="text-sm">Submission deadline</span> 
                                <input 
                                type="text" 
                                class="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
                                v-model="job.dateDeadline"
                                required> 
                            </div>

                            <div class="mb-1"> 
                                <span class="text-sm">What Sector is this job categorized under?</span> 
                                <select 
                                class="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
                                required
                                >
                                    <option>Select option</option>
                                    <option>Front end developer</option>
                                    <option>UI/UX designer</option>
                                    <option>Graphic designer</option>
                                </select>
                            </div>

                            <div class="mt-3 text-center pb-3"> 
                                
                                    <button 
                                    @click.prevent="post"
                                    class="w-full h-12 text-lg w-32 bg-blue-600 rounded text-white hover:bg-blue-700"
                                        required>
                                        <router-link to="/dashboard">
                                            Submit Application
                                        </router-link>
                                    </button>        
                                        
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
            
        <!-- <p>{{date}}: date</p> -->
    </div>
</template>

<script>
import {db} from '../main.js'

export default {
    data() {
        return {
            job: {
                title: "",
                location: "",
                range: "",
                dateDeadline: ""
            }
        }
    },
    methods: {
        post: function() {
            db.collection("jobs").add(
                this.job
            )
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
            // event.target.reset();
        }
    }
}
</script>

<style scoped>

</style>