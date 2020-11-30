<template>
    <div>
        <div class="name-list">
            <p data-nis="2016623">Farhan</p>
            <p>Nama Kamu</p>
            <p>Nama Kamu</p>
            <p>Nama Kamu</p>
            <p>Nama Kamu</p>
            <p>Nama Kamu</p>
            <p>Nama Kamu</p>
            <p>Nama Kamu</p>
            <p>Nama Kamu</p>
            <p>Nama Kamu</p>
            <p>Nama Kamu</p>
            <p>Nama Kamu</p>
            <p>Nama Kamu</p>
            <p>Nama Kamu</p>
            <p>Nama Kamu</p>
            <p>Nama Kamu</p>
            <p>Nama Kamu</p>
            
        </div>
        <div id="profile-info">
            <h2></h2>
            <div class="picture">
                <img src="https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg">
            </div>
            <span class="close-btn">&#x2715;</span>
        </div>
    </div>
</template>

<script>
    export default {

        head: {
            script: [
                { src: '/js/compName.js'},
            ]
        },
        
    }
</script>

<style scoped>

    p {
        letter-spacing: 1px;
        font-weight: bold;
        font-size: 20px;
        color: white;
        display: inline;
        transition: .5s all ease-in-out;
        cursor: pointer;
        
    }

    p:hover {
        text-decoration: underline;
    }

    .name-list {
        position: absolute;
        top: 300px;
        left: 120px;
        height: 200px;
        width: 50%;
        text-align: center;
        
    }

    #profile-info {
        position: absolute;
        top: 420px;
        height: 250px;
        width: 250px;
        padding: 0 20px;
        box-sizing: border-box;
        left: -250px;
        transition: 1s all ease-in-out;
        text-align: center;
    }

    .picture img {
        height: 150px;
        width: 100%;
    }

    #profile-info span {
        color: white;
        cursor: pointer;
    }

    @media only screen and (max-width: 600px) {
        .name-list {
            display: none;
        }
    }


</style>