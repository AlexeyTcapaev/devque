<template>
    <div class="container">
        <div class="normalheader">
                <div class="hpanel">
                    <div class="panel-body">
                        <div class="panel-actions pull-right">
                            <a href="#" class="btn btn-success btn-sm">Создать проект</a>
                            <span class="toggle">
                                <a href="#" class="btn btn-link text-muted"><span class="toggle-item"><i class="fa fa-th-large"></i></span></a>
                                <a href="#" class="btn btn-link text-success"><span class="toggle-item"><i class="fa fa-bars"></i></span></a>
                            </span>
                        </div>
                        <h2 class="font-light m-b-xs">Лента</h2>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
