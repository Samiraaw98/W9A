<template>
    <div>

    </div>
</template>

<script>
import UserComp from '@/components/UserComp.vue'
    export default {
        components : UserComp,
        name : "DateComp",
        data() {
            return {
                posts: [
                    {
                        id :1 ,
                        postAuthor : "John Doe",
                        postContent : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, possimus.",
                        postDate : "April 15, 2022"
                    },
                    {
                        id :2 ,
                         postAuthor : "John Doe",
                        postContent : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, possimus.",
                        postDate : "April 15, 2022"
                    },
                    {
                        id :3 ,
                         postAuthor : "John Doe ",
                        postContent : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, possimus. ",
                        postDate : "April 15, 2022"
                    },
                    {
                        id :4 ,
                         postAuthor : "Pepperoni Pizza",
                        postContent : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, possimus.",
                        postDate : "April 15, 2022"
                    },
                    {
                        id :5 ,
                         postAuthor : " BBQ Chicken Pizza",
                        postContent : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, possimus.",
                        postDate : "April 15, 2022"
                    }
                ]

                
            }
        },
    }
        
</script>

<style scoped>

</style>