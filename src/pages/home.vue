<template>
  <f7-page>
    <div class="page">
      <div class="navbar">
        <div class="navbar-inner sliding">
          <div class="title">Todolist</div>
        </div>
      </div>
      <div class="toolbar tabbar">
        <div class="toolbar-inner">
          <a href="#tab-1" class="tab-link tab-link-active" @click="setAction('all')">My Tasks</a>
          <a href="#tab-1" class="tab-link" @click="setAction(false)">In Progress</a>
          <a href="#tab-1" class="tab-link" @click="setAction(true)">Completed</a>
          <span class="tab-link-highlight" v-bind:style="{transform: tabStyle}" style="width: 33.3333%;"></span>
        </div>
      </div>
      <div class="block">
        <!-- <div class="row" style=""> -->
          <div class="tabs-animated-wrap">
            <div class="tabs">
              <div id="tab-1" class="page-content tab tab-active">
                <tab-data :action="currentTab" :items="items"  @query="onQuery" @changData="changData"></tab-data>
              </div>
            </div>
          </div>
        <!-- </div> -->
      </div>
    </div>
  </f7-page>
</template>
<script>
import TabData from "./components/TabData.vue";

export default {
  components: { TabData: TabData },
  name: "Home",
  data() {
    return {
      items: [],
      currentTab: "all",
      id: 0,
      tabStyle: "translate3d(0%, 0px, 0px)"
    };
  },
  methods: {
    changData(val) {},
    onQuery: function(val) {
      if (val.data.new) {
        this.id++;
        this.items.push({
          id: this.id,
          title: val.data.title,
          date: val.data.date,
          time: val.data.time,
          file: val.data.file,
          comment: val.data.comment,
          checkbox: false,
          star: false
        });
        return;
      }
      console.log(val.data)
      let item = this.items.find(f => f.id === val.data.id);
      console.log(item)
      item =  {
        ...val.data
      } 
      // item = Object.assign({}, val.data);
      console.log(this.items)
    },
    setAction(action) {
      this.currentTab = action;
      if (this.currentTab == true)
        this.tabStyle = "translate3d(200%, 0px, 0px)";
      else if (this.currentTab == false)
        this.tabStyle = "translate3d(100%, 0px, 0px)";
      else this.tabStyle = "translate3d(0%, 0px, 0px)";
    }
  }
};
</script>
<style>
.li_yellow {
  background-color: #fff2dc;
}
</style>
