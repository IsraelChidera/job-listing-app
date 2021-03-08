<template>
    <div class="flex-header">
        <div class="flex1">
            <p>Find Jobs</p>
            <h2>Find the best candidates
                <br>for your organization</h2>           
            <img src="../assets/character16.svg" alt="">
        </div>
        <div class="flex2">
            <p>Login</p>
            <form action="">
                <div>
                    <label for="mail">
                        Email
                    </label>
                    <input type="email">
                </div>
                <div>
                    <label for="Pass">Password</label>
                    <input type="password">
                </div>
                <button class="btn">Login</button>
            </form>
        </div>
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    scroll-behavior: smooth;
    
}

.flex-header {
    display:flex;
    justify-content: space-between;
    font-family: 'Poppins', sans-serif;
    height: 100vh;
    padding-top: 2rem;
    background: url('../assets/bg1.png')
    no-repeat center center/cover;
}

.flex1 {
    padding-left: 4rem;
    color: #ffffff;
    text-shadow: 2px 2px #030303;
}

.flex1 h2{
    font-size: 2rem;
    flex-wrap: wrap;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    margin-top: 5rem;
}

.flex1 img {
    margin-top: 2rem;
}

.flex2 {
    margin: 3rem auto;
}

img {
    max-width: 300px;
}

/* flex 2 */
.flex2 {
    padding-top: 6rem;
}

.flex2 p {
    font-weight: 600;
}

.flex2 form {
    margin-top: 2rem;
}

.flex2 form div {
    margin-top: 1rem;
}

.flex2 form button {
    margin-top: 2rem;
}

.flex2 form label {
    display: block;
}

.flex2 form div input{
    width: 200%;
    border: 2px solid black;
    border-radius: 8px;
    padding: 8px 13px 8px 2px;
}

.flex2 form div input:focus {
    background-color: #eee;
    color: black;
    transition: ease-in-out, width .35s ease-in-out;
    border-radius: 8px;
    outline: none;
}

.btn {
    color: #E5E5E5;
    background-color: #CF5B13;
    padding: 12px 20px 12px 20px;
    border-radius: 8px;
    cursor: pointer;
}
</style>