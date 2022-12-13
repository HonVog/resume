<template src="./template.html">
    
</template>

<script>
    import Re_ButtonVue from '../Re_Button/Re_Button.vue';

    export default {
        name: "Re_DinamPanel",
        components: {
            Re_ButtonVue,
        },
        props: [
            'listPrint'
        ],
        data(){
            return {  
                dinamicList: [],
                activElement: '',
                indexActivElement: 0,
                activLeft: '<',
                activRegth: '>',
                clickLeft: !true,
                timer: ''
            }
        },
        beforeMount() {
            this.pushTenElement();
            this.setActivElement();
        },
        computed:{
        },
        methods:{
            pushTenElement() {
                let nam = this.dinamicList.length;

                for(let i = nam; i < nam + 10; ++i) {
                    this.dinamicList.push({...this.listPrint[0]});
                    this.dinamicList[i].id = i + 1;
                }
            },

            setActivElement(element) {
                if(!element) {
                    this.activElement = this.dinamicList[Math.trunc( this.dinamicList.length / 2)];
                    this.indexActivElement = Math.trunc( this.dinamicList.length / 2)
                    return;
                }
                this.activElement = element;
            },

            setRigth(){
                this.setIndex();
                this.setActivElement( this.dinamicList[this.indexActivElement]);
                this.avtoClick()
            },

            setLeft(){
                this.setIndex( false );
                this.setActivElement( this.dinamicList[this.indexActivElement] );
                this.avtoClick( true );
            },

            setIndex(isAdd = true){
                let step = isAdd ? 1 : -1;
                this.indexActivElement = this.dinamicList[this.indexActivElement + step] ?
                                        this.indexActivElement + step :
                                        isAdd ? 0 :  this.dinamicList.length - 1;
            },

            avtoClick( ckickLeft = !true){
                if(ckickLeft){
                    clearTimeout(this.timer)
                    this.timer = setTimeout(function () { this.setLeft() }.bind(this), 1000);

                } else {
                    clearTimeout(this.timer)
                    this.timer = setTimeout(function () { this.setRigth() }.bind(this), 1000);
                }
            }
        }
    }
</script>

<style scoped src="./Style.less" lang="less">

</style>