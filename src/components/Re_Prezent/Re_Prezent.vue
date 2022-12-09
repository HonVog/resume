<template src="./template.html">
    
</template>

<script>
    import Re_ButtonVue from '@/components/Re_UI/Re_Button/Re_Button.vue';
    import Re_ActivPanelVue from '@/components/Re_Prezent/Re_ActivPanel/Re_ActivPanel.vue';

    import { PREZENT_BUTTON } from '../../static/list_prezent'

    export default {
        name: "Re_Prezent",
        components: {
            Re_ButtonVue,
            Re_ActivPanelVue
        },
        props: [],
        data(){
            return {
                activKey: '', 
            }
        },
        computed:{
            list_button() {
                return PREZENT_BUTTON;
            }
        },
        methods:{
            clickButton(key) {
                this.activKey = key;
            },

            exitPanel() {
                this.activKey = ''
            }
        }
    }
</script>

<style scoped src="./Style.less" lang="less">

</style>