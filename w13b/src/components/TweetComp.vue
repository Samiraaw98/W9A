<template>
    <div>
        <h1> Tweets</h1>
<UserComp 
postAuthor="John Doe"
:postContent="post1Content"
postDate="April 15, 2022"
 :id='1'
 />

<UserComp 
postAuthor="John Doe"
:postContent="post2Content"
postDate="April 13, 2022"
  :id='2'
    />

 <UserComp 
postAuthor="John Doe"
:postContent="post3Content"
postDate="April 12, 2022"
 :id='3'
 />

<UserComp 
postAuthor="John Doe"
:postContent="post4Content"
postDate="April 9, 2022"
 :id='4'
 />

 <UserComp 
postAuthor="John Doe"
:postContent="post5Content"
postDate="April 9, 2022"
 :id='5'
 />

    </div>
</template>

<script>
    import UserComp from '@/components/UserComp.vue'


    export default {
        name : "TweetComp",
        components: {
                UserComp,
        },
        data() {
            return {
                post1Id: 1,
                post2Id: 2,
                 post3Id: 3,
                  post4Id: 4,
                   post5Id: 5,
                //1 : declare
                post1Content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, possimus.",
                post2Content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, possimus.",
                post3Content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, possimus.",
                post4Content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, possimus.",
                post5Content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, possimus.",
                postDate : "April 15, 2022"
                

            }
        },
        
    }
</script>


<style scoped>
h1{
    color: #1DA1F2;
}

</style>