<template>
<div class="container">
    <div class="normalheader">
                    <div class="hpanel">
                        <div class="panel-body">
                            <div class="panel-actions pull-right">
                                <a href="/inspire" class="btn btn-success btn-sm">Создать проект</a>
                                <span class="toggle">
                                    <a @click="SwitchViewMode" :class="{nogrid:mode}" class="btn btn-link "><span class="toggle-item"><i class="fa fa-th-large"></i></span></a>
                                    <a @click="SwitchViewMode" :class="{nogrid:!mode}" class="btn btn-link "><span class="toggle-item"><i class="fa fa-bars"></i></span></a>
                                </span>
                            </div>
                            <h2 class="font-light m-b-xs">Список проектов</h2>
                        </div>
                    </div>
    </div>
</div>
</template>

<script>
export default {
  name: "hpanel",
  props: ["mode"],
  methods: {
    SwitchViewMode: function() {
      this.$emit("switch", this.mode);
    }
  }
};
</script>

<style>
 h2 {
  line-height: normal !important;
}
.btn-success {
  background-color: #62cb31 !important;
  color: white !important;
  border-color: #62cb31 !important;
}
.btn {
  box-shadow: none !important;
  height: 30px;
}
.nogrid {
  color: #62cb31 !important;
}
</style>
<style scoped src="../../../assets/css/theme.css">

</style>