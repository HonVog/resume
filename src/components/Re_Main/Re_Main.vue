<template src="./template.html">
    
</template>

<script>
    import Re_PrezentVue from "../Re_Prezent/Re_Prezent.vue";
    import { LIST_USER } from "../../static/list_user";

    export default {
        name: "Re_Main",
        components: {
            Re_PrezentVue
        },
        props: [],
        data(){
            return { 
                user:[]
            }
        },
        computed:{
            list_user() {
                return LIST_USER;
            }
        },
        methods:{
            getObjectKey(element) {  
                return typeof element === 'object' ?
                        Object.keys( element )[0] :
                        "";
            },
        }
    }
</script>

<style scoped src="./Style.less" lang="less">

</style>