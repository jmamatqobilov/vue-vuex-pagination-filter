<template>
  <div class="product-box">
    <div class="product-box-content">
      <div class="">
        <img :src="require('../assets/products/' + product.image)" width="180" height="220" />
      </div>
      <div class="product-name-brand">
        <div class="product-name-brand-name">{{ product.name }}</div>
        <div class="product-name-brand-brand">{{ product.brand }}</div>
        <div class="stars">
          <div class="stars-container">
            <div class="star-box">
              <img :src="require('../assets/icons/star1.png')" />
            </div>
            <div class="star-box">
              <img :src="require('../assets/icons/star1.png')" />
            </div>
            <div class="star-box">
              <img :src="require('../assets/icons/star1.png')" />
            </div>
            <div class="star-box">
              <img :src="require('../assets/icons/star1.png')" />
            </div>
            <div class="star-box">
              <img :src="require('../assets/icons/star1.png')" />
            </div>
          </div>
        </div>

        <div class="product-price">
          {{ product.price }}$
        </div>
        <div class="oplata-button-content">
          <div class="v-korzinu-oplata">
            В КОРЗИНУ
          </div>
          <div class="xar-xil">
            <div class="stock">
              STOCK:{{ product.stock }}
            </div>
            <div class="">
              
            </div>
            <div class="">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
// @ is an alias to /src


export default {
  name: 'ProductCard',
  components: {

  },

  props: {
    product: Object
  }
}
</script>


<style lang="scss">
.product-box {
  width: 220px;
  height: 380px;
  border: solid 1px rgb(236, 236, 236);
  margin: 0px 20px;

  .product-box-content {
    display: flex;
    flex-direction: column;

    .product-name-brand {
      flex-direction: column;
      align-items: center;
      text-align: start;
      padding: 0 16px;
      .product-name-brand-name{
        font-size: 14px;
        font-weight: 500;
      }
      .product-name-brand-brand{
        font-size: 14px;
        font-weight: 700;
      }
      .stars {
        padding: 10px 0;
        .stars-container {
          display: flex;
          align-items: center;

          .star-box img {
            width: 12px;
          }
        }
      }

      .product-price {
        padding-bottom: 4px;
        color: rgb(9, 39, 71);
        font-size: 16px;
        font-weight: 700;
      }

      .oplata-button-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .v-korzinu-oplata {
          color: #ffffff;
          font-size: 12px;
          border-radius: 3px;
          font-weight: 500;
          width: 80px;
          height: 30px;
          background-color: rgb(9, 39, 71);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .xar-xil{
          display: flex;
          align-items: center;
          .stock{
            font-size: 12px;
            font-weight: 600;
          }
        }
      }


    }
  }

}
</style>