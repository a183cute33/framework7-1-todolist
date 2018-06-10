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
          <span class="tab-link-highlight" v-bind:style="{transform: tabStyle}"></span>
        </div>
      </div>
      <div class="block">
        <div class="tabs-animated-wrap">
          <div class="tabs">
            <div id="tab-1" class="page-content tab tab-active">
              <tab-data :action="currentTab" :items="items"  @query="onQuery" @changData="changData"></tab-data>
            </div>
          </div>
        </div>
      </div>
    </div>
  </f7-page>
</template>
<script>
import TabData from "./components/TabData.vue";

export default {
  name: "Home",
  components: { TabData: TabData },
  data() {
    return {
      id: 0,
      items: [],
      currentTab: "all",
      tabStyle: "translate3d(0%, 0px, 0px)"
    };
  },
  methods: {
    onQuery: function(val) {
      if (val.data.new) {
        this.items.push({
          id: this.id,
          title: val.data.title,
          date: val.data.date,
          time: val.data.time,
          file: val.data.file,
          comment: val.data.comment,
          checkbox: false,
          new: false,
          star: false,
          show: true
        });
        this.id++;
        return;
      }
      let item = this.items.find(f => f.id === val.data.id);
      var index = this.items.indexOf(item);
      if (index !== -1) this.items.splice(index, 1);
      this.items.push(val.data);
    },
    setAction(action) {
      this.currentTab = action;
      if (this.currentTab == true)
        this.tabStyle = "translate3d(200%, 0px, 0px)";
      else if (this.currentTab == false)
        this.tabStyle = "translate3d(100%, 0px, 0px)";
      else this.tabStyle = "translate3d(0%, 0px, 0px)";
    },
  }
};
</script>
<style>
.li_yellow {
  background-color: #fff2dc;
}
.tab-link-highlight {
  width: 33.3333%;
}
</style>
