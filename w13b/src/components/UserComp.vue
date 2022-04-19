<template>
    <div>
        
<h3> {{   postAuthor }}</h3>
<p> {{ postContent }}</p>
<p> {{postDate}}  </p>
    </div>
</template>

<script>
    export default {
        name : "TweetComp",
        props: {
            postAuthor: String,
             postContent : String ,
             postDate : String,
             id : Number
        },

    }
</script>

<style  scoped>
div{
    border: solid 2px #1DA1F2;
    background-color: rgb(255, 255, 255);
}
    h3{
        color:rgb(0, 0, 0);
        display: inline;
    }
    p{
        color: rgb(6, 227, 243);
        font-style: italic;
        font-weight: bold;
    }
    img{
        height: 1em;
    }

</style>