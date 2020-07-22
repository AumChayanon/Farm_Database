<template>
  <div class="div_plant">
    <h3 style=" color: #508944;">อาชีพหลัก</h3>
<table class="table table-hover">
        <thead>
          <tr>
            <th>อาชีพ</th>
            <th style="text-align: center; ">จำนวนคนที่ทำ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in this.data" :key="item.id">
            <td>{{ item.job }}
            </td>
            <td style="text-align: center;">{{ item.num }}
            </td>
          </tr>
        </tbody>
      </table>
      <br>
      <h3 style=" color: #508944;">อาชีพเสริม</h3>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>อาชีพ</th>
            <th style="text-align: center;">จำนวนคนที่ทำ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="index in this.pre_data" :key="index.id">
            <td>{{ index.job }}
            </td>
            <td style="text-align: center;">{{ index.num }}
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name:"job",
  props: ["data", "pre_data"],
  data() {
    return {
      searchQuery:"",
      pre_searchQuery:""
    };
  },
}
</script>

<style>
.div_plant{
    width: 100%;
    height: 100%;
    margin: 0;
    padding : 16px
}
</style>