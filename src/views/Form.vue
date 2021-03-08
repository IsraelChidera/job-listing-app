<template>
    <div id="form-body">
        <form action="">  
           <div class="py-20 bg-gray-300 px-2">          
                <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
                    <div class="px-4 py-4 ">
                        <h3>Front end developer</h3>
                        <p>
                            <i class="fa fa-map-marker" aria-hidden="true"></i> Ikeja, Lagos
                        </p>
                    </div>
                    <div class="md:flex">
                        <div class="w-full px-4 py-6 ">
                            <div class="mb-1"> <span class="text-sm">Full name</span> <input type="text" class="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"> </div>
                            <div class="mb-1"> <span class="text-sm">Last name</span> <input type="text" class="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"> </div>
                            <div class="mb-1"> <span class="text-sm">Email Address</span> <input type="email" class="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"> </div>
                            <div class="mb-1"> <span class="text-sm">Location</span> <input type="text" class="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"> </div>
                            <div class="mb-1"> <span class="text-sm">Phone Number</span> <input type="text" class="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"> </div>
                            <div class="mb-1"> <span class="text-sm text-gray-400">You will be able to edit this information later</span> </div>
                            <div class="mb-1"> <span>Attachments</span>
                                <div class="relative border-dotted h-32 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                                    <div class="absolute">
                                        <div class="flex flex-col items-center"> <i class="fa fa-folder-open fa-3x text-blue-700"></i> <span class="block text-gray-400 font-normal">Drag and drop your CV here</span> </div>
                                    </div> <input type="file" class="h-full w-full opacity-0" name="">
                                </div>
                            </div>
                            <div class="mt-3 text-center pb-3"> <button class="w-full h-12 text-lg w-32 bg-blue-600 rounded text-white hover:bg-blue-700">Submit Application</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>