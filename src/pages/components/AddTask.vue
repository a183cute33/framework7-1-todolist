<template>
    <div>
        <a  v-show="!isShow" class="link popup-open showForm" href="#" data-popup=".popup" @click="onClick">
            <button class="col button button-fill color-gray ">
                <f7-icon slot="media" f7="add_round"></f7-icon> &nbsp &nbsp Add Tsak
            </button>
        </a>
        <Forms :data="transferData" v-show="isShow" @query="onQuery" @closeEditTodo="closeEdit"></Forms>
    </div>
</template>
<script>
import Forms from "./Form.vue";

export default {
  components: { Forms: Forms },
  name: "AddTask",
  data() {
    return {
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
        show: true
      },
      transferData: null,
      isShow: false
    };
  },
  methods: {
    onClick() {
      this.isShow = !this.isShow;
      this.transferData = Object.assign({}, this.newData);
    },
    onQuery(val) {
      this.$emit("query", val);
    },
    closeEdit() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style>
.showForm {
  width: 100%;
}
</style>
