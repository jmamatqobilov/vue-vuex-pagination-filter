<template>
    <div class="sidebar">
        <div class="">
            <div class="">
                
            </div>
            <div class="filter-brands">
                
                <div v-for="brand in brands" class="fliter-brand-circle" @click="filterBrandClicked(brand)">
                    <div class="filter-circle-box">
                        
                    </div>
                    {{ brand }}
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
// @ is an alias to /src


export default {
    name: 'SideBar',

    props: {

    },

    data(){
        return{
            brands:["Artel","Roison","LG","Avalon" ]
        }
    },

    methods:{
        filterBrandClicked(brand){
            this.$emit('filterBrand',brand)
        }
    }
}
</script>


<style lang="scss">
.sidebar {
    background-color: rgb(252, 252, 252);
    width: 280px;
    height: 580px;
    .filter-brands{
        flex-direction: column;
        align-items: center;
        text-align: start;
        .fliter-brand-circle{
            display: flex;
            align-items: center;
            background-color: red;
            padding: 10px;
            .filter-circle-box{
                margin-right: 16px;
                width: 10px;
                height: 10px;
                border: solid 2px rebeccapurple;
            }
        }
    }
}
</style>