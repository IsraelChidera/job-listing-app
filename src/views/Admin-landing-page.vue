<template>
    <div>
        <header class="header">
            <div class="flex">
                <div>
                    <p>Find Jobs</p>
                    <h2>Jobs</h2>
                </div>
                <div class="flex-icons">
                    <i class="fas fa-bell"></i>
                    <i class="fas fa-plus"></i>
                </div>
            </div>
        </header>
        
        <div class="mb-6 flex-search-btns">
            <div class="flex-search">
                <div>
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Front end developer">
                    <button>
                        Search
                    </button>
                </div>
               
            </div>

            <div class="flex-btn">
                <button>
                    <router-link to="/form2">Add new job</router-link>
                </button>
            </div>
        </div>

        <div class="header-admin bg-gray-800">
            <div class="text-white grid md:grid-cols-5 gap-4">
                <div>Job title</div>
                <div>Date modified</div>
                <div>Candidates</div>
                <div></div>
                <div>Filter<i class="fas fa-filter"></i></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.header {
    background: url('../assets/header2.png') no-repeat center center/cover;
    position: relative;
    height: 30vh;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.header .flex{
    display: flex;
    justify-content: space-between;
    padding: 3rem 3rem;
}

.flex .flex-icons {
    display: flex;
    justify-content: space-between;
}

header div p, .fa-bell, .fa-plus {
    color:white;
}

header div p{
    cursor: pointer;
    color:white;
    font-weight: 600;
    font-size: 1.2rem;
}

header h2 {
    font-weight: 600;
    font-family: cursive;
    font-size: 3rem;
    color: #334;
    margin-top: 3rem;
}

.flex-search-btns {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
}

.flex-search div input {
    border: 2px solid rgba(100, 48, 5, 0.658);
    padding: 12px 5rem 12px 25px;
    border-radius: 10px;
    display: inline-block;
    outline: none;
}

.flex-search {
    position: relative;
}
.flex-search div button {
    padding: 8px 10px 8px 10px;
    background-color: #CF5B13;
    border-radius: 8px;
    font-weight: 500;
    color: #ffffff;
    position: absolute;
    top: 5px;
    right: 5px;
}

.flex-search div .fa-search {
    position: absolute;
    top: 15px;
    left: 10px;
}

.flex-btn button {
    padding: 10px 10px 10px 10px;
    background-color: #CF5B13;
    border-radius: 8px;
    font-weight: 500;
    color: #ffffff;
}
/* #CF5B13 */

.header-admin {
    margin-top: 1.5rem;
    padding: 1.5rem;
}
</style>