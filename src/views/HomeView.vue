<template>
  <div class="home">
    <div class="">
      <Header />
    </div>
    <div class="home-sidebar-products">

      <div class="sidebar-box">
        <!-- <SideBar @filterBrand="filterBrand(brand)"/> -->
        <div class="sidebar">
          <div class="">
            <div class="">

            </div>
            <div class="filter-brands">

              <div v-for="brand in brands" class="fliter-brand-circle" @click="setBrand(brand)">
                <div class="filter-circle-box">

                </div>
                {{ brand }}
              </div>
            </div>
          </div>
        </div>


      </div>
      <div class="container">
        <div class="row">
          <div v-for="(product, index) in PRODUCTS" :key="index" class="">

            <ProductCard :product="product" />

          </div>

        </div>

        <div class="pagination">
          <div v-for="page in pages" :key="page" @click="setPage(page)"
            :class="'page ' + (page === pageNumber ? 'active' : '')">
            {{ page }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import { mapActions, mapGetters } from 'vuex';
import ProductCard from '@/components/ProductCard.vue';
import SideBar from '@/components/SideBar.vue';
import Header from '@/components/Header.vue'
export default {
  name: 'HomeView',
  components: {
    ProductCard,
    SideBar,
    Header
  },




  computed: {
    ...mapGetters(['PRODUCTS']),
    ...mapGetters(['PAGES']),


    pages() {
      return Math.ceil(this.PAGES.length / 4);
    },

  },

  data() {
    return {
      pageNumber: 1,
      brandName: '',
      brands: ["Artel", "Roison", "LG", "Avalon"]
    }
  },

  methods: {
    ...mapActions([
      'getProductsFromApi',
      'getProductsAllApi',
      
    ]),

    async setPage(page) {
      this.pageNumber = page;
      await this.$store.dispatch('getProductsFromApi',page)
    },
    async setBrand(brand) {
      this.brandName = brand
      await this.$store.dispatch('GET_PRODUCTS_FROM_API',brand)
        
    }


    



  },


  mounted() {
    this.getProductsFromApi(),
      this.getProductsAllApi()
  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;

  .home-sidebar-products {
    display: flex;


    .sidebar-box {
      .sidebar {
        background-color: rgb(252, 252, 252);
        width: 280px;
        height: 580px;

        .filter-brands {
          flex-direction: column;
          align-items: center;
          text-align: start;

          .fliter-brand-circle {
            display: flex;
            align-items: center;
            background-color: red;
            padding: 10px;

            .filter-circle-box {
              margin-right: 16px;
              width: 10px;
              height: 10px;
              border: solid 2px rebeccapurple;
            }
          }
        }
      }
    }

    .container {
      background-color: #ffffff;
      width: 100%;

      .row {
        display: flex;
        flex-wrap: wrap;
      }


      .pagination {
        display: flex;
        justify-content: center;

        .page {
          margin: 8px;
          padding: 10px;
          border: solid 2px rgb(0, 0, 0);

          &.active {
            background-color: rgb(0, 0, 0);
            color: white;
          }

          &:hover {
            background-color: rgb(0, 0, 0);
            color: white; 
          }
        }
      }
    }
  }
}
</style>
