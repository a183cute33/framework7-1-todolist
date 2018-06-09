<template>
    <div class="block">
        <add-task @query="onQuery"></add-task>
        <f7-list sortable :sortable-enabled="sorting">
          <f7-list-item v-if="action === 'all' || action === item.checkbox" v-for="item in items" v-bind:class="{ li_yellow: item.star }">
            <div class="item-media">
              <a @click="onClick(item)">
                <f7-icon f7="check_round" v-if="item.checkbox"></f7-icon>
                <f7-icon f7="circle" v-else></f7-icon>
              </a>
            </div>
            <!-- <div class="item-inner"> -->
               <div class="item-title">
                <div class="accordion-item" :id='action +"_accordion-item_" + item.id'>
                  <div class="accordion-item">
                      <!-- <a href="#" class="item-link item-content"> -->
                        <del v-if="item.checkbox">
                            <div class="item-title">
                            {{item.title}}
                            </div>
                            <div class="item-after"><f7-icon f7="alarm_fill"></f7-icon>{{item.date}}</div>
                        </del>
                        <div v-else>
                          <div class="item-title">
                              {{item.title}}
                          </div>
                          <div class="item-after">
                            <div v-if="item.date"><f7-icon size="18" f7="alarm_fill"></f7-icon>&nbsp &nbsp{{item.date}}</div>
                            <div v-if="item.file">&nbsp &nbsp<f7-icon size="18" f7="document_fill"></f7-icon></div>
                            <div v-if="item.comment">&nbsp &nbsp<f7-icon size="18" f7="chat_fill"></f7-icon></div>
                          </div>
                        </div>
                      <!-- </a> -->
                  </div>
                  <div class="accordion-item-content">
                      <forms @query="onQuery" @closeEditTodo="closeEdit" :data="transferData"></forms>
                  </div>
                </div>
               </div>
                <div class="item-after">
                  <a @click="onOpen(item.id)"><f7-icon f7="compose"></f7-icon></a>&nbsp &nbsp
                  <a @click="onStarClick(item)">
                    <f7-icon v-if="item.star" f7="star_fill" color="yellow"></f7-icon>
                    <f7-icon v-else f7="star" color="yellow"></f7-icon>
                  </a>
              </div>
            <!-- </div> -->
          </f7-list-item>
        </f7-list>
    </div>
</template>
<script>
import Forms from "./Form.vue";
import AddTask from "./AddTask.vue";

export default {
  components: { Forms: Forms, AddTask: AddTask },
  name: "TabData",
  props: ["items", "action"],
  data() {
    return {
      sorting: true,
      openObject: null,
      newData: {
        title: null,
        date: null,
        time: null,
        file: null,
        comment: null,
        check: false,
        new: true
      },
      transferData: null
    };
  },
  watch: {
    data() {
      this.$emit("changData", this.items);
    }
  },
  methods: {
    onClick(param) {
      param.checkbox = !param.checkbox;
    },
    onStarClick(param) {
      param.star = !param.star;
    },
    onOpen(id) {
      this.transferData = Object.assign({}, this.items.find(f => f.id === id));
      this.openObject = document.getElementById(
        this.action + "_accordion-item_" + id
      );
      this.openObject.classList.toggle("accordion-item-opened");
    },
    onQuery(val) {
      this.$emit("query", {
        data: val
      });
    },
    closeEdit() {
      this.openObject.classList.toggle("accordion-item-opened");
    }
  }
};
</script>

<style>
</style>
