<template>
    <div class="card">
        <div class="card-header">Header</div>
        <div class="card-content card-content-padding">
            <ul>
                <li>
                    <div class="item-content item-input">
                        <div class="item-inner">
                            <div class="item-title item-label">Title</div>
                            <div class="item-input-wrap">
                                <input type="text" name="name" placeholder="Title" v-model="data.title">
                            </div>
                        </div>
                    </div>
                <li>
                    <div class="item-content item-input">
                        <div class="item-inner">
                            <div class="item-title item-label">Deadline</div>
                            <div class="item-input-wrap">
                                <input type="date" name="name" placeholder="yyyy/mm/dd" v-model="data.date">
                                <input type="time" name="name" placeholder="hh:mm" v-model="data.time">
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="item-content item-input">
                        <div class="item-inner">
                            <div class="item-title item-label">File</div>
                            <div class="item-input-wrap">
                                <input type="file" id="files" name="files[]" multiple />
                                <output id="list"></output>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="item-content item-input">
                        <div class="item-inner">
                            <div class="item-title item-label">Comment</div>
                            <div class="item-input-wrap">
                                <textarea placeholder="E-mail" rows="4" cols="50" v-model="data.comment">
                                </textarea>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="card-footer">
            <a @click="closeEdit" class="button">Cancel</a>
            <a @click="onSubmit" v-if="data.check != ''" class="button button-active">Update</a>
            <a @click="onSubmit" v-else class="button button-active">Add Task</a>
        </div>
    </div>
</template>
<script>
export default {
  props: ["data"],
  name: "Form",
  watch: {
    data: function() {
        isNew: false
    }
  },
  mounted() {},
  methods: {
    onSubmit() {
      if (!this.data.title) {
        alert("請輸入訊息");
        return;
      }
      this.$emit("query", this.data);
    },
    closeEdit() {
      // 關閉內容時，讓外層了解並觸發
      this.$emit("closeEditTodo");
    }
  }
};
</script>
<style>
ul {
  padding-right: 0px;
  list-style: none;
}
</style>
