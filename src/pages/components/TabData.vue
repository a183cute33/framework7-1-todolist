<template>
    <div class="block">
        <add-task @query="onQuery"></add-task>
        <f7-list sortable :sortable-enabled="sorting">
          <f7-list-item v-if="action === 'all' || action === item.checkbox" v-for="item in items" v-bind:class="{ li_yellow: item.star }">
            <!-- <div class="item-inner"> -->
              <div class="item-media">
                <a @click="onClick(item)" v-show="item.show">
                  <f7-icon f7="check_round" v-if="item.checkbox"></f7-icon>
                  <f7-icon f7="circle" v-else></f7-icon>
                </a>
              </div>
              <div class="item-title">
                <div class="accordion-item" :id='action +"_accordion-item_" + item.id'>
                  <div class="accordion-item">
                    <del v-if="item.checkbox">
                      <ShowTitle :item="item"></ShowTitle>
                    </del>
                    <div v-else>
                      <ShowTitle :item="item"></ShowTitle>
                    </div>
                  </div>
                  <div class="accordion-item-content">
                      <forms @query="onQuery" @closeEditTodo="closeEdit" :data="transferData"></forms>
                  </div>
                </div>
              </div>
              <div class="item-after" v-show="item.show">
                <a @click="onOpen(item)"><f7-icon f7="compose"></f7-icon></a>&nbsp &nbsp
                <a @click="onStarClick(item)">
                  <f7-icon class="starColor" v-if="item.star" f7="star_fill" color="#F5A623"></f7-icon>
                  <f7-icon class="starColor" v-else f7="star" color="#F5A623"></f7-icon>
                </a>
              </div>
            <!-- </div> -->
          </f7-list-item>
          <div id="taskCount" v-if="action === true"><i>{{completedCount}} tesk completed</i></div>
          <div id="taskCount" v-if="action === 'all'"><i>{{AllCount}} tesk left</i></div>
          <div id="taskCount" v-if="action === false"><i>{{progressCount}} tesk left</i></div>
        </f7-list>
    </div>
</template>
<script>
import Forms from "./Form.vue";
import AddTask from "./AddTask.vue";
import ShowTitle from "./ShowTitle.vue";

export default {
  components: { Forms: Forms, AddTask: AddTask, ShowTitle: ShowTitle },
  name: "TabData",
  props: ["items", "action"],
  data() {
    return {
      sorting: true,
      openObject: null,
      newData: {
        id: null,
        title: "",
        date: null,
        time: null,
        file: null,
        comment: null,
        checkbox: false,
        star: false,
        new: true,
        show: true
      },
      transferData: null,
      completedCount: 0,
      progressCount: 0,
      AllCount: 0
    };
  },
  watch: {
    items: {
      handler: function(val, oldVal) {
        this.completedCount = val.filter(f => f.checkbox).length;
        this.progressCount = val.filter(f => !f.checkbox).length;
        this.AllCount = val.length;
      },
      deep: true
    }
  },
  methods: {
    onClick(param) {
      param.checkbox = !param.checkbox;
    },
    onStarClick(param) {
      param.star = !param.star;
    },
    onOpen(item) {
      this.transferData = Object.assign({}, item);
      this.openObject = this.action + "_accordion-item_" + item.id;
      const elementClass = document.getElementsByClassName("accordion-item");
      for (let i = 0; i <= elementClass.length - 1; i++) {
        elementClass[i].classList.remove("accordion-item-opened");
      }
      const element = document.getElementById(this.openObject);
      element.classList.toggle("accordion-item-opened");
    },
    onQuery(val) {
      this.$emit("query", {
        data: val
      });
    },
    closeEdit() {
      const element = document.getElementById(this.openObject);
      element.classList.toggle("accordion-item-opened");
    }
  }
};
</script>

<style>
.starColor{
  color: #F5A623;
}
.li_yellow {
  background-color: #FFF2DC;
}
#taskCount {
  font-family: Roboto-Italic;
  text-align: left;
  color: #E1E1E1 ;
}
</style>
