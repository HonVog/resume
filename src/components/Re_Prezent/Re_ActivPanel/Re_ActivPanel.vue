<template src="./template.html">
    
</template>

<script>
    import Re_DinamPanelVue from '@/components/Re_UI/Re_DinamPanel/Re_DinamPanel.vue';
    import Re_SkrollVue from '@/components/Re_UI/Re_Skroll/Re_Skroll.vue';
    import Re_FormVue from '@/components/Re_UI/Re_Form/Re_Form.vue';
    import Re_Style from '@/components/Re_UI/Re_Style/Re_Style.vue'

    import { PREZENT_ACTIV } from '@/static/list_prezent';

    export default {
        name: "Re_ActivPanel",
        components: {
            Re_DinamPanelVue,
            Re_SkrollVue,
            Re_FormVue,
            Re_Style
        },
        props: [
            'activKey'
        ],
        data(){
            return {
            }
        },
        computed:{
            activ_panel() {
                return PREZENT_ACTIV[this.activKey];
            }
        },
        methods:{
            exitPanel(){
                this.$emit('exitPanel')
            }
        }
    }
    
</script>

<style scoped src="./Style.less" lang="less">
</style>