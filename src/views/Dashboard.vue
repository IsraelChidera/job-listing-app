<template>
    <div>
        <div>
            <header class="header">
                <div class="flex">
                    <p>Find Jobs</p>
                    <ul>
                        <li>
                            <router-link to="/">
                                Home
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/dashboard">
                                Dashboard
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/form2">
                                Post a job
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/form">
                                Register
                            </router-link>
                        </li>
                        <li @click="logout">
                            <router-link to="/">
                                Log out
                            </router-link>
                        </li>
                    </ul>
                </div>
                <h2>Find your dreamJob</h2>
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

        
        </div>    
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data(){
        return{
            
        }
    },
    methods: {
      logout(){
          firebase.auth().signOut().then(() => {
                alert('Successfully logged out');
                this.$router.push('/');
            }).catch((error) => {
                alert(error.message);
                this.$router.push('/');
            });
        }
    }
}
</script>

<style scoped>
.header {
    background: url('../assets/header2.png') no-repeat center center/cover;
    position: relative;
    height: 40vh;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.header .flex{
    display: flex;
    justify-content: space-between;
    padding: 2rem 3rem 4rem 3rem;
}

.flex .flex-icons {
    display: flex;
    justify-content: space-between;
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
    font-size: 1.6rem;
    color: #334;
    position: absolute;
    bottom: 1px;
    padding: 0rem 3rem;
}

.flex-search-btns {
    display: flex;
    justify-content: center;
    margin-top: 0rem;
    position: relative;
    top: 29px;
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

</style>
