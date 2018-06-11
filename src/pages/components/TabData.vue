<template>
  <div>
    <add-task @query="onQuery"></add-task>
    <div class="list sortable accordion-list sortable-enabled">
      <ul>
        <li class="accordion-item" v-if="action === 'all' || action === item.checkbox" v-for="item in items" v-bind:class="{ li_yellow: item.star }">
          <div class="item-content">
            <div class="item-media">
              <a @click="onClick(item)">
                <f7-icon f7="check_round" v-if="item.checkbox"></f7-icon>
                <f7-icon f7="circle" v-else></f7-icon>
              </a>
            </div>
            <div class="item-inner">
              <del v-if="item.checkbox">
                <ShowTitle :item="item"></ShowTitle>
              </del>
              <div v-else>
                <ShowTitle :item="item"></ShowTitle>
              </div>
              <div class="item-after">
                <a @click="onOpen(item)"><f7-icon f7="compose"></f7-icon></a>&nbsp
                <a @click="onStarClick(item)">
                  <f7-icon class="starColor" v-if="item.star" f7="star_fill" color="#F5A623"></f7-icon>
                  <f7-icon class="starColor" v-else f7="star" color="#F5A623"></f7-icon>
                </a>
              </div>
            </div>
          </div>
          <forms v-if="item.show" @query="onQuery" @closeEditTodo="closeEdit(item)" :data="transferData"></forms>
          <div class="sortable-handler"></div>
        </li>
      </ul>
    </div>
    <div id="taskCount" v-if="action === true"><i>{{completedCount}} task completed</i></div>
    <div id="taskCount" v-if="action === 'all'"><i>{{AllCount}} task left</i></div>
    <div id="taskCount" v-if="action === false"><i>{{progressCount}} task left</i></div>
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
        title: null,
        date: null,
        time: null,
        file: null,
        comment: null,
        checkbox: false,
        star: false,
        new: true,
        show: false
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
      this.items.map((m) => (m.show = false));
      item.show = !item.show;
      this.transferData = Object.assign({}, item);
    },
    onQuery(val) {
      this.items.map((m) => (m.show = false));
      val.show = !val.show;
      this.$emit("query", {
        data: val
      });
    },
    closeEdit(item) {
      item.show = !item.show;
      const element = document.getElementById(this.openObject);
      element.classList.toggle("accordion-item-opened");
    }
  }
};
</script>

<style>
.starColor {
  color: #f5a623;
}
.li_yellow {
  background-color: #fff2dc;
}
#taskCount {
  font-family: Roboto-Italic;
  text-align: left;
  color: #e1e1e1;
}
.md .list .item-media {
  min-width: 20px;
}
</style>
