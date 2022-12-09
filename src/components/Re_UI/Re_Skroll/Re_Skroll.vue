<template src="./template.html">
    
</template>

<script>
    import Re_ButtonVue from '../Re_Button/Re_Button.vue';
    export default {
        name: "Re_Skroll",
        components: {
            Re_ButtonVue,
        },
        props: [
            'listPrint'
        ],
        data() {
            return {
                scrolList: []     
            }
        },
        computed: {
        },
        beforeMount() {
            this.pushTenElement();
        },
        methods: {
            pushTenElement() {
                let nam = this.scrolList.length;
                
                for(let i = nam; i < nam + 10; ++i) {
                    this.scrolList.push({...this.listPrint[0]});
                    this.scrolList[i].id = i + 1;
                }
            },

            delEl(id) {
                this.scrolList.splice(id, 1)
            }
        }
    }
</script>

<style scoped src="./Style.less" lang="less">

</style>