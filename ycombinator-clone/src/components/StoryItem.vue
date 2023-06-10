<template>
    <div class="story">
        <div >
            <span class="story-serial-number">{{ serialNumber + 1}}. </span>
            <a :href="url" target="_blank" class="story-title"> {{ title }} </a>
            <p>
                {{ score }} points 
                <a :href="userPage" > by {{  by }} </a>
                | 
                <a :href="commentUrl" target="_blank"> {{ descendants }} comments </a>
            </p>  
        </div>
    </div>
</template>

<script>
import {getItemUrlDetails} from '../utils/Constants'

export default {
    name : 'StoryItem',
    props : {
        id: {
            type : Number,
            required : true,
        },
        by: {
            type: String,
            required: true
        },
        descendants: {
            type: Number,
            required: false,
            default: 0,
        },
        kids : {
            type : Array,
            required : false,
            default : [], 
        },
        score : {
            type : Number,
            required : false,
            default : 0,
        },
        time : {
            type : Number,
            required : true,
        },
        title : {
            type : String, 
            required : true,
        },
        type : {
            type : String, 
            required: true,
        },
        url : {
            type : String, 
            required: true,
        },
        serialNumber : {
            type : Number, 
            requried : true,
        }
    },
    computed : {
        userPage() {
            return `users/${this.by}`;
        },
        commentUrl() {
            const firstCommentId = this.kids[0];
            return getItemUrlDetails(firstCommentId);
        }
    }
}
</script>

<style scoped>

.story {
    margin : 2rem 2rem;
}

.story-serial-number {
    margin-right : 1 rem;
}
.story-title {
    font-size: 1rem;
    font-weight: bold;
}
</style>