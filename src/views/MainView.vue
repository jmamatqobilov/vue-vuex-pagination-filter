<template>
    <div class="home">
      <div class="">
        <Header />
      </div>
      <div class="home-sidebar-products">
  
        <div class="sidebar-box">
          <!-- <SideBar @filterBrand="filterBrand(brand)" :brands="brands"/> -->
          <div class="sidebar">
            <div class="">
              <div class="sidebar-filter-title">
                Filter Brand
                <div class="delete-filter" @click="filterRemove">
                  <img :src="require('../assets/icons/Delete.svg')" width="15" />
                </div>
              </div>
              <div class="filter-brands">
  
                <div v-for="brand in brands" class="fliter-brand-circle" :key="brand.id" @click="setBrand(brand)">
                  <div class="filter-circle-box-parent">
                    <div class="filter-circle-box" :class="brand === brandName ? 'active' : ''">
  
                    </div>
                  </div>
                  <div :class="brand === brandName ? 'active' : ''" class="brand-name">
                    {{ brand }}
                  </div>
                </div>
              </div>
            </div>
          </div>
  
  
        </div>
        <div class="container">
          <div class="container-product-height">
            <div class="container-filter-length">
  
              <div class="kolvo-title">
                КОЛ-ВО:{{ PAGES.length }}
              </div>
              <div class="">
  
              </div>
  
            </div>
            <div class="row">

              <div v-if="pageNumber > pages">Boshqa ma'lumot topilmadi </div>

              <div v-for="(product, index) in PRODUCTS" :key="index" class="">
  
                <ProductCard :product="product" />  
  
              </div>

              
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
    name: 'MainView',
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
        brandName: null,
        brands: ["Artel", "Roison", "LG", "Avalon"]
      }
    },
    methods: {
      ...mapActions([
        'productList',
        'productsListLength',
  
      ]),
  
      setPage(page) {
        this.pageNumber = page;
  
        this.fetchProducts()
      },
      setBrand(brand) {
        this.brandName = brand;
        this.pageNumber = 1
        
        this.fetchProducts()
      },
  
      filterRemove() {
        this.brandName = null
        this.pageNumber = 1
        this.fetchProducts()
      },
  
      fetchProducts() {
        const params = this.brandName ? {
          page: this.pageNumber,
          brand: this.brandName
        } : {
          page: this.pageNumber
        }
        this.$router.push({ query: params })
        this.$store.dispatch('productList', params)
        this.$store.dispatch('productsListLength', params)
      },
      fetchProductsMount() {
        
        this.pageNumber = Number(this.$route.query.page) ?? 1;
        this.brandName = this.$route.query.brand

        
        console.log(this.$route.query)

       
        
        this.$router.push({ query: this.$route.query })
         
        this.$store.dispatch('productList', this.$route.query)
        this.$store.dispatch('productsListLength', this.$route.query)
      },
      
      
  
  
    },
    mounted() {
      this.fetchProductsMount();
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
          margin: 4px 20px;
          border-radius: 6px;
          // background-color: rgb(254, 255, 255);
          background-color: rgb(233, 235, 238);
          border: solid 2px #ececec;
          width: 280px;
          height: 580px;
  
          .sidebar-filter-title {
            text-align: start;
            padding-left: 40px;
            padding-top: 10px;
            color: #000000;
            font-size: 16px;
            font-weight: 600;
            display: flex;
            align-items: center;
  
            .delete-filter {
              padding: 0 10px;
            }
          }
  
          .filter-brands {
            flex-direction: column;
            align-items: center;
            text-align: start;
            padding: 30px;
  
            .fliter-brand-circle {
              display: flex;
              align-items: center;
              // background-color: red;
              padding: 10px;
  
              .filter-circle-box-parent {
                width: 14px;
                height: 14px;
                border-radius: 50%;
                border: solid 1.2px rgb(165, 165, 165);
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 14px;
  
                .filter-circle-box {
  
  
                  width: 8px;
                  height: 8px;
                  border-radius: 50%;
                  border: solid 1px rgb(41, 35, 47);
  
                  &.active {
                    background-color: rgb(9, 39, 71);
                    border: solid 1px rgb(170, 170, 2);
                  }
                }
              }
  
  
              .brand-name {
                color: #4e4e4e;
                font-size: 15px;
                font-weight: 400;
  
                &.active {
                  color: rgb(9, 39, 71);
                  font-weight: 600;
                }
              }
            }
          }
        }
      }
  
      .container {
        background-color: #ffffff;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
        display: flex;
  
        .container-product-height {
  
          .container-filter-length {
            margin-top: 4px;
            width: 100%;
            height: 36px;
            border-radius: 3px;
            border: solid 2px #f1f1f1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 60px;
  
            .kolvo-title {
              font-size: 12px;
              font-weight: 600;
            }
          }
  
          .row {
            padding-top: 30px;
            display: flex;
            flex-wrap: wrap;
          }
        }
  
  
  
  
        .pagination {
          display: flex;
          justify-content: start;
          padding-left: 120px;
  
          .page {
            height: 30px;
            width: 30px;
            border-radius: 4px;
            margin: 8px;
            padding: 6px 8px;
            border: solid 2px rgb(9, 39, 71);
            display: flex;
            justify-content: center;
            align-items: center;
  
            &.active {
              background-color: rgb(9, 39, 71);
              color: white;
            }
  
            &:hover {
              background-color: rgb(9, 39, 71);
              color: white;
            }
          }
        }
      }
    }
  }
  </style>
  