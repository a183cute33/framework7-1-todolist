<template>
<div>
     <div class="item-title">
        {{item.title}}
    </div>
    <div class="item-after">
        <div v-if="item.date"><f7-icon size="18" f7="alarm_fill"></f7-icon>&nbsp &nbsp{{item.date}}&nbsp &nbsp</div>
        <div v-if="item.file"><f7-icon size="18" f7="document_fill"></f7-icon>&nbsp &nbsp</div>
        <div v-if="item.comment"><f7-icon size="18" f7="chat_fill"></f7-icon></div>
    </div>
</div>
</template>
<script>
export default {
  name: "ShowTitle",
  props: ["item"]
};
</script>
<style>
.item-after{
    font-size: 12px;
}
</style>
