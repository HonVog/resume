<template src="./template.html">
    
</template>

<script>
    import Re_ButtonVue from '../Re_Button/Re_Button.vue';

    export default {
        name: "Re_Form",
        components: {
            Re_ButtonVue,
        },
        props: [
            'listPrint'
        ],
        data(){
            return {
                baseForm: {} 
            }
        },
        beforeMount() {
            for(let i in this.listPrint ) {
                    let key = this.listPrint[i].titel
                    this.baseForm[key] = '';
                }
        },
        computed:{
        },
        methods:{
            checForm(){
                for(let i in this.baseForm){
                    if( !this.baseForm[i]){
                        return false;
                    }
                }
                return !false;
            }
        }
    }
</script>

<style scoped src="./Style.less" lang="less">

</style>