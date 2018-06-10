<template>
    <div class="card">
        <div class="card-header">
             <div class="item-content item-input">
                <div class="item-inner">
                    <div class="item-title item-label">Title</div>
                    <div class="item-input-wrap">
                        <input type="text" name="name" placeholder="Title" v-model="data.title">
                    </div>
                </div>
            </div>
        </div>
        <div class="card-content card-content-padding">
            <li>
                <div class="item-content item-input">
                    <div class="item-inner">
                        <div class="item-title item-label">Deadline</div>
                        <div class="item-input-wrap">
                            <input type="date" placeholder="Select date" v-model="data.date"/>
                            <input type="time" placeholder="Date Time" v-model="data.time"/>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="item-content item-input">
                    <div class="item-inner">
                        <div class="item-title item-label">File</div>
                        <label class="file-select">
                            <div class="row">
                                <div class="col-10">
                                    <div class="select-button">
                                        <span><f7-icon slot="media" f7="add"></f7-icon></span>
                                    </div>
                                </div>
                            </div>
                            <div  v-if="data.file">{{data.file.name}}</div>
                            <input style="display: none;" type="file" @change="handleFileChange"/>
                        </label>
                    </div>
                </div>
            </li>
            <li>
                <div class="item-content item-input">
                    <div class="item-inner">
                        <div class="item-title item-label">Comment</div>
                        <div class="item-input-wrap">
                            <textarea placeholder="text" rows="4" cols="50" v-model="data.comment">
                            </textarea>
                        </div>
                    </div>
                </div>
            </li>
        </div>
        <div class="card-footer">
            <a @click="closeEdit" class="button">Cancel</a>
            <a @click="onSubmit" v-if="!data.new" class="button button-active">Update</a>
            <a @click="onSubmit" v-else class="button button-active">Add Task</a>
        </div>
    </div>
</template>
<script>
export default {
  props: ["data"],
  name: "Form",
  watch: {},
  mounted() {
    // console.log(this.$f7);
  },
  methods: {
    onSubmit() {
      if (!this.data.title) {
        alert("請輸入訊息");
        return;
      }
      this.closeEdit();
      this.$emit("query", this.data);
    },
    closeEdit() {
      this.$emit("closeEditTodo");
    },
    previewFiles(item) {
      item.file = this.$refs.myFiles.files;
    },
    handleFileChange(e) {
      this.data.file = e.target.files[0];
    }
  }
};
</script>
<style>
ul,
li {
  list-style: none;
}
.select-button {
  padding: 1rem;
  width: 20px;
  height: 20px;
  color: white;
  background-color: #997a52;
  border-radius: 0.3rem;
  text-align: center;
  font-weight: bold;
}
</style>
