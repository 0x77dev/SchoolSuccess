<template>
  <div id="app">
    <div>
      <vs-navbar v-model="lang" class="nabarx">
        <div slot="title">
          <vs-navbar-title>{{ $t('title', lang) }}</vs-navbar-title>
        </div>

        <vs-navbar-item index="en">
          <a href="#">English</a>
        </vs-navbar-item>
        <vs-navbar-item index="ru">
          <a href="#">Русский</a>
        </vs-navbar-item>
      </vs-navbar>
    </div>
    <vs-list>
      <vs-list-header color="danger" :title="$t('countOfImportant', lang)" />
      <vs-list-item>
        <vs-input-number color="danger" v-model="countOfLessons"></vs-input-number>
      </vs-list-item>
      <vs-list-header color="success" :title="$t('countOfLessons', lang)" />
      <vs-list-item>
        <vs-input-number color="success" v-model="countOfImportant"></vs-input-number>
      </vs-list-item>
      <vs-list-header color="warning" :title="$t('countOfHomeWork', lang)" />
      <vs-list-item>
        <vs-input-number color="warning" v-model="countOfHomeWork"></vs-input-number>
      </vs-list-item>
      <vs-list-header color="dark" :title="$t('countOfDoneHomeWork', lang)" />
      <vs-list-item>
        <vs-input-number color="dark" v-model="countOfDoneHomeWork"></vs-input-number>
      </vs-list-item>
      <vs-list-header color="dark" :title="$t('nnOptions', lang)" />
      <vs-list-item>
        inputSize:
        <vs-input-number color="danger" v-model="nnOptions.inputSize"></vs-input-number>
      </vs-list-item>
      <vs-list-item>
        inputRange:
        <vs-input-number color="success" v-model="nnOptions.inputRange"></vs-input-number>
      </vs-list-item>
      <vs-list-item>
        outputSize:
        <vs-input-number color="warning" v-model="nnOptions.outputSize"></vs-input-number>
      </vs-list-item>
      <vs-list-item>
        hiddenLayer1:
        <vs-input-number color="warning" v-model="nnOptions.hiddenLayer1"></vs-input-number>
      </vs-list-item>
      <vs-list-item>
        hiddenLayer2
        <vs-input-number color="warning" v-model="nnOptions.hiddenLayer2"></vs-input-number>
      </vs-list-item>
      <vs-list-item class="net-svg" v-html="toSVG()"></vs-list-item>
    </vs-list>

    <vs-divider position="center">
      <vs-button
        @click="$vs.notify({
  title:$t('prognoseDone', lang),
  text:prognose()+'% '+$t('ofSuccess', lang),
  color:'primary',
  position: 'bottom-center',
  icon:'done',
  time:60000
})"
        line-position="bottom"
        line-origin="center"
        color="dark"
        type="line"
      >{{ $t('prognose', lang) }}!</vs-button>
    </vs-divider>
    <vs-divider position="center">
      <vs-button
        @click="$vs.notify({
  title:$t('trainDone', lang),
  text:train(),
  color:'success',
  position: 'bottom-center',
  icon:'done',
  time:60000
})"
        line-position="bottom"
        line-origin="center"
        color="dark"
        type="line"
      >{{ $t('train', lang) }}!</vs-button>
    </vs-divider>
    <pre v-html="log"></pre>
  </div>
</template>

<script>
// import inputdata from "./inputdata";
import brain from "./brain";
const NN = new brain();
window.NN = NN;
window.countOfLessons = 0;
window.countOfImportant = 0;
window.countOfHomeWork = 0;
window.countOfDoneHomeWork = 0;
export default {
  name: "App",
  data() {
    return {
      countOfLessons: 0,
      countOfImportant: 0,
      countOfHomeWork: 0,
      countOfDoneHomeWork: 0,
      nnOptions: {
        inputSize: 4,
        inputRange: 8,
        outputSize: 1,
        hiddenLayer1: 5,
        hiddenLayer2: 5
      },
      log: NN.log,
      lang: "ru"
    };
  },
  watch: {
    countOfLessons: val => (window.countOfLessons = val),
    countOfImportant: val => (window.countOfImportant = val),
    countOfHomeWork: val => (window.countOfHomeWork = val),
    countOfDoneHomeWork: val => (window.countOfDoneHomeWork = val),
    nnOptions: {
      handler(val) {
        NN.net = new NN.brain.NeuralNetwork({
          inputSize: val.inputSize,
          inputRange: val.inputRange,
          outputSize: val.outputSize,
          hiddenLayers: [val.hiddenLayer1, val.hiddenLayer2]
        });
        // console.log(val);
        document.querySelector(".net-svg").innerHTML = NN.toSVG(NN.net);
      },
      deep: true
    }
  },
  methods: {
    prognose: () => {
      NN.train();
      const out =
        (Math.round(
          eval(
            NN.run([
              window.countOfLessons,
              window.countOfImportant,
              window.countOfHomeWork,
              window.countOfDoneHomeWork
            ]).toString()
          ) * 100
        ) /
          100) *
        100;
      return out;
    },
    train: () => {
      const out = NN.train();
      return `${out.iterations},\n ${out.error}`;
    },
    toSVG: () => {
      return NN.toSVG(NN.net);
    }
  }
};
</script>

<style>
@import "material-icons/iconfont/material-icons.css";
@import "typeface-montserrat";
#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: whitesmoke;
}
* {
  font-family: Montserrat, monospace;
}
.vs-button,
.vs-divider,
.vs-divider--text {
  background: whitesmoke;
  font-family: Montserrat, "Arial Black", Arial, Helvetica, sans-serif;
}
.vs-button,
body
  > div.vs-component.vs-notifications.vs-noti-bottom-center.vs-noti-success.activeNoti
  > div
  > div
  > *,
body
  > div.vs-component.vs-notifications.vs-noti-bottom-center.vs-noti-primary.activeNoti
  > div
  > div
  > * {
  font-size: 1.75vw;
}
.net-svg {
  border: 1 solid black;
}
</style>
